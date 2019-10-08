---
title: Getting Dat to work in new environments
excerpt: 'A look at some of the work that RangerMauve has been doing.'
content: >-
  \*\*A look at some of the work I've been doing for Dat\*\*




  Dat is an awesome mashup of a bunch of useful modules, for \[peer
  discovery](https://www.npmjs.com/package/discovery-swarm) and for \[data
  replication](https://www.npmjs.com/package/hyperdrive), that work together to
  enable people to share data and build distributed websites and applications.




  Current implementations focus on Node.js-based applications, or are being
  abstracted away with high level APIs in the \[Beaker
  Browser](http://beakerbrowser.com/). What I worked on as part of the
  \[handshake
  funding](https://blog.datproject.org/2019/02/13/handshake-funding-brings-in-new-developers-for-dat/)
  was to explore getting these modules to work in new environments outside of
  Node, namely on mobile devices with \[React
  Native](https://facebook.github.io/react-native/), updating the tooling for
  Dat apps in the non-distributed web, and adding a standard service for storing
  Dats to the CLI.




  \## Mobile Apps




  Since I first tried out Beaker, I've been thinking "Wouldn't it be cool if I
  could do the same thing on my phone". Some prior work in this direct was the
  \[Bunsen Browser](https://github.com/bunsenbrowser/bunsen/) but it wasn't
  finished, and I wanted to take a stab at doing something similar with
  \[Datmobile](https://github.com/RangerMauve/datmobile).




  \### Using Node Modules In React native




  I've worked with React native before, and thought that it would give good
  performance gains over Cordova for the UI and that the native module ecosystem
  could get me pretty far towards getting Hyperdrive and Discovery-Swarm to
  work.




  Of course, React Native isn't Node, and it can be fairly daunting to try to
  get something working when the compiler gives you dozens of warnings about
  missing dependencies and \`undefined\` globals. At first I tried to manually
  add missing dependencies and define missing globals, but it was hard to get
  dependencies to accept my changes due to the way React Native's build tools
  work. Luckily, I was pointed to
  \[rn-nodeify](https://github.com/tradle/rn-nodeify) which automatically does
  most of the work needed, and I then got to focus on getting the rest of the
  app together.




  \### Getting Something Out There




  After figuring out how to get Hyperdrive to compile, I then started looking
  into getting a minimal viable product using it. I had recently worked on an
  \[example app](https://github.com/RangerMauve/dat-js-example/) that used
  dat-js to browse archives on the web, and I decided to take a similar approach
  for Datmobile.




  Instead of getting Dat's discovery mechanisms to work in React Native, I
  reused the Websocket replication from
  \[dat-gateway](https://github.com/garbados/dat-gateway/) and implemented some
  simple screens for viewing folders and files in the archive. An important
  thing to note is that this version didn't work offline and merely loaded stuff
  in memory from the gateway.




  I polished up the file views, and \[published it on Google
  Play](https://play.google.com/store/apps/details?id=com.datmobile).




  \### P2P Networking & Persistence




  After testing out the initial version, I started looking into discovery-swarm
  and for a way to persist data to the device so it could be used offline. Just
  to recap, discovery-swarm consists of three main parts: The \[BitTorrent-based
  DHT](https://www.npmjs.com/package/bittorrent-dht), the \[DNS
  trackers](https://github.com/mafintosh/dns-discovery), and \[Multicast DNS for
  local peer discovery](https://www.npmjs.com/package/multicast-dns). After
  \[monkey-patching](https://github.com/RangerMauve/datmobile/blob/master/shim.js#L53)
  some of the react-native libraries that rn-nodeify added, I got P2P discovery
  working through the BitTorrent DHT, but MDNS and DNS discovery will need some
  more tinkering. Plus, the performance of the DHT isn't too great, likely due
  to the number of false positives in the DHT and the overall performance of the
  \[react-native-udp](https://github.com/tradle/react-native-udp) module. But...
  it works!




  Regarding persistence, and some help with setting up testing from
  (@lachenmayer)\[https://github.com/lachenmayer/] , I created
  \[random-access-rn-file](https://github.com/RangerMauve/random-access-rn-file)
  which could be plugged into hyperdrive to persist the state. Sadly, the \[FS
  API that it's using](https://github.com/itinance/react-native-fs/) does
  several layers of encoding and decoding from \`JS -> Base64 -> RN Bridge ->
  Base64 -> Java\`. \[@Allain](https://github.com/allain/) has been looking into
  alternatives which could give us performance gains. It works, but it adds a
  lot of latency.




  \### Making A Browser




  The last step that was missing was getting the dat content to loading in an
  actual web view and providing the relevant \[JS
  APIs](https://beakerbrowser.com/docs/apis/dat). The hardest part of this was
  registering a new \`dat://\` protocol handler so that images and \`fetch()\`
  requests would automatically invoke the JS code to load content. Neither React
  Native, nor Android provide a simple API to do this. The closest thing you can
  do on Android is to \[intercept all
  requests](https://developer.android.com/reference/android/webkit/WebViewClient.html#shouldInterceptRequest(android.webkit.WebView,%20android.webkit.WebResourceRequest))
  and generate entire responses synchronously. I initially attempted to
  implement a streaming response system, but a bug in the C++ code in Android
  that interacts with this method means that it will only attempt to read from
  the request once, and subsequent requests will hang. Then, I saw that somebody
  was already working on adding support for this feature \[in the
  react-community-webivew
  repo](https://github.com/react-native-community/react-native-webview/pull/209).
  I forked the repo and fixed it up so that I could add support for the Dat
  protocol.




  \### Performance Wasn't Good Enough




  Sadly, I had to put my Datmobile work on hold without finishing up the WebView
  integration. The performance was just too slow to release. Requests would get
  intercepted by the webview, but it would take seconds to load anything and the
  request would time out. I'll need to work on getting DNS discovery to work and
  to improve FS performance, and then come back to see if it's usable.




  \## Dat On The Web




  Before I got into working on Datmobile, I had done some initial work on
  \[dat-js](https://github.com/datproject/dat-js#readme) in order to improve
  it's performance, and help it load dats from the P2P network.




  \### P2P In The Browser




  Initially, Dat-JS was using
  \[webrtc-swarm](https://www.npmjs.com/package/webrtc-swarm) in order to create
  archives in the browser, and share them with other browsers using
  \[WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API). It
  uses a \[signalling server](https://www.npmjs.com/package/signalhub) to find
  peers, and automatically establishes P2P connections directly between the
  browsers. With this in place you could use Dat in web applications, but it was
  limited to Dats that were created within the browser network and it couldn't
  load Dats created in the CLI or Beaker.




  \### Gateways And Websockets




  A while ago, I had been playing around with getting Beaker's \[DatArchive
  API](https://github.com/RangerMauve/dat-archive-web) to work in the web, and
  part of that was to get a way to connect a Dat in the browser, to the rest of
  the network using Websockets. I used the Webosocket replication support in
  \[dat-gateway](https://github.com/garbados/dat-gateway/) by
  \[@garbados](https://github.com/garbados/). The way it works is it listens for
  incoming websocket connections, gets the Dat read key from the URL, loads the
  Dat archive for the key in the gateway, and replicates it through the
  websocket to the browser. After adding this functionality to Dat JS, it was
  now possible to load \_any\_ Dat in the browser, and create Dats in the
  browser that could be loaded in Beaker or the CLI.




  \### Persisting Data In The Browser




  By default, Dat-JS loads archive data in memory, and all of that data gets
  cleared if you refresh your page. So when you create an archive in the
  browser, your private keys would get cleared and you'd lose the ability to
  update it. You'd also be unable to use the data while offline. To solve this,
  you need to provide a \[storage
  layer](https://www.npmjs.com/package/random-access-storage) which would
  persist the data.




  I had mostly used \[an IndexedDB
  based](https://www.npmjs.com/package/random-access-idb) storage layer in the
  past, but even though it had great browser support, it ended up slowing things
  down significantly. There were alternatives that I knew about, one that used
  experimental
  \[Chrome](https://www.npmjs.com/package/random-access-chrome-file) APIs, and
  one that used experimental \[Firefox](random-access-idb-mutable-file) APIs.
  There was a definite need from \[the
  community](https://github.com/datproject/discussions/issues/86) to have a
  storage layer that "just worked" and would use the best storage layer without
  developers having to do feature detection. With that in mind, I created
  \[random-access-web](https://www.npmjs.com/package/random-access-web) which
  did exactly that. Now it should be easy for people making applications to
  persist their data in browsers and know that it'll have decent performance on
  modern browsers.




  \### Supporting More Data Structures




  A potential downside of the dat-gateway approach was that it worked by having
  the gateway sync data with the network first, which meant the gateway had
  access to potentially private data. Plus, the gateway was only able to handle
  Dat archives using \[Hyperdrive](https://www.npmjs.com/package/hyperdrive) and
  wouldn't work for projects that wanted to experiment with other data
  structures like \[HyperDB](https://www.npmjs.com/package/hyperdb) or
  \[Kappa-Core](https://github.com/kappa-db/kappa-core).




  Ideally we'd want to have a gateway that acted as a proxy for Dat's peer
  discovery mechanism without revealing the actual data to it. That proxy is
  \[discovery-swarm-stream](https://www.npmjs.com/package/discovery-swarm-stream).
  It works by having a browser open up a websocket connection and sending
  discovery keys for resources that it's interested in. The proxy will then
  search for peers in the P2P network, open connections to them, and proxy those
  connections to the client over the websocket. The client's interface looks
  almost exactly the same as the Node.js API, so people can reuse a lot of their
  Node.js code in the browser by pairing this with
  \[Browserify](http://browserify.org/).




  After making sure that discovery-swarm-stream worked, I paired it with
  \[discovery-swarm-webrtc](https://www.npmjs.com/package/@geut/discovery-swarm-webrtc)
  into
  \[discovery-swarm-web](https://github.com/RangerMauve/discovery-swarm-web)
  which tries to find peers using WebRTC first, and then uses
  discovery-swarm-stream to bridge to the rest of the Dat network. The library
  has a default gateway and signaling server configured for it, but it will
  attempt to use a local gateway if one exists.




  After testing this stuff out, I can sat that Dat-js feels a lot faster, and
  it's easier to ensure data will be saved locally without having to think about
  storage mechanisms.




  \## \`dat store\`




  A big challenge in P2P systems is that you need at least one peer to be
  reachable with some content in oder for new peers to get access to it. In
  short, if nobody is online with a copy of your Dat, nobody new can download
  it.




  With that in mind, people needed to use some sort of server that would always
  be online so that you could tell it to have a copy of your Dat loaded at all
  times in case your personal computer isn't reachable.




  This mostly came in the form of \[Hashbase](http://hashbase.io/), a service
  hosted by \[Blue Link Labs](https://bluelinklabs.com/) (Makers of Beaker), and
  some smaller self-hosted alternatives like
  \[homebase](https://github.com/beakerbrowser/homebase/) and
  \[hypercored](https://github.com/mafintosh/hypercored/).




  In early 2018, a new \[Dat Enhancement Proposal (DEP
  0003)](https://github.com/datprotocol/DEPs/blob/master/proposals/0003-http-pinning-service-api.md)
  was made which would standardise how people would interact with such services,
  but sadly it didn't get adopted by the CLI or any other hosting services.




  \### Putting It Together




  With that in mind, I needed to get something into the Dat CLI which would: 1.
  let us interact with storage providers like Hashbase, and 2. make it easy for
  people to set up a basic storage provider from the CLI. Luckily there were a
  bunch of high level modules that I could combine to get what I needed. To
  interact with servers implementing DEP 0003, there is
  \[dat-pinning-service-client](https://github.com/beakerbrowser/dat-pinning-service-client)
  that handles all the handshaking. To manage a set of Dats, I used
  \[dat-librarian](https://www.npmjs.com/package/dat-librarian). For the HTTP
  API for the daemon, I used \[fastify](https://www.fastify.io/), and for good
  measure added
  \[discovery-swarm-web](https://github.com/RangerMauve/discovery-swarm-web) to
  it. And to install the storage provider as a service across different
  operating systems, I used
  \[os-service](https://www.npmjs.com/package/os-service) which has a tiny API
  which handles everything that's needed to work on Linux, Windows, and MacOS.




  With all of these parts together, and some \[bikeshedding about the name on
  IRC](https://github.com/datproject/dat/issues/1081#issuecomment-479059178), I
  released \[dat-store](https://www.npmjs.com/dat-store) and integrated it as an
  extension to the Dat CLI.




  \### Using The CLI




  Now, if you want to add a Dat to Hashbase from the CLI, you can do the
  following:




  \`\``


  npm install -g dat dat-store




  dat store set-provider https://hashbase.io




  dat store login YOUR_HASHBASE_USERNAME




  dat store dat://datproject.org


  \`\``




  If you want to run your own store, you can do so without needing to muck
  around with setting up services on your OS.




  \`\``


  dat store install-service




  dat store dat://datproject.org


  \`\``




  What's cool is that if you have a Dat Store installed on your machine, it will
  enable apps using \`discovery-swarm-web\` to talk to it directly instead of
  reaching out to the public gateway.




  \### Different data structures




  Now that we have an easy way to share regular Dats, I'd like to go further and
  figure out what we can do to create a DEP that would allow the store to
  interact with different Dat data structures like
  \[HyperDB](https://www.npmjs.com/package/hyperdb),
  \[Kappa-Core](https://github.com/kappa-db/kappa-core), and anything else the
  community will come up with. Ideally, all Dat stores should support any type
  of data structure so that application developers can think more about their
  application, and users can have more choice about how they want to back up
  their content.




  \## What's next




  Now that Dat-JS has been updated with the new libraries, I'm hoping to see
  projects in the community try to adopt it so that we can make Web apps that
  work not only in Beaker and Electron, but in legacy web browsers used by
  people that haven't bought into P2P yet.




  Regarding Datmobile, it's not a primary focus for me at the moment, but I want
  to fix up the Webview support before \[DWeb Camp
  2019](https://blog.archive.org/2019/03/24/coming-this-summer-the-first-dweb-camp/)
  in July so that people can author content on their phones and share it on the
  mesh network.




  I'd also like to improve the documentation for using the Dat CLI, as well as
  improving the usability of \`dat store\`.
date: October 2019
---

