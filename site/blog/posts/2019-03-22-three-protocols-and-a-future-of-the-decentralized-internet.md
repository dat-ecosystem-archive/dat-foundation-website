---
title: Three protocols and a future of the decentralized internet
excerpt: >-
  Hi, I'm Darius Kazemi and I'm Code for Science & Society's \[Mozilla
  Fellow](https://blog.mozilla.org/blog/2018/08/21/mozilla-announces-25-new-fellows-in-openness-science-and-tech-policy/).
  I'm halfway through my fellowship and we thought now would be a good time for
  me to share some of the things that I've been researching, building, and
  planning.
content: >-
  I knew coming into this fellowship that I wanted my work to be about the
  decentralized web as a whole, and not just Dat. CS&S was totally receptive to
  that and so I've been spending time learning about Dat, but also about
  \[Secure ScuttleButt](https://www.scuttlebutt.nz/) and
  \[ActivityPub](https://activitypub.rocks/).




  If what we broadly want is for power to be redistributed from the hands of
  large centralized corporate interests and back into the hands of individual
  people and small groups, then we already have the technical protocols to do
  this. No one protocol will enable this shift in power; each protocol has its
  strengths and weaknesses. What is needed is software that utilizes these
  protocols for their strengths, which is to say what is needed is developers
  and designers who are willing to act as bridges between the communities of
  practice surrounding the protocols.




  \## Complementary protocols, working together




  I recently attended ScuttleCamp outside of Wellington, New Zealand. A bunch of
  Secure ScuttleButt community members met up in order to talk about what works
  and what doesn't with SSB, and where the community would like it to go in the
  future. It was a great event that I would estimate consisted of equal parts
  core SSB project team, active users of SSB, and interested outsiders (like
  me). It was in "unconference" format, so the attendees came up with the
  schedule on the fly. I was pleasantly surprised to see two Dat sessions pop
  up, including one on "Bridging Dat and SSB". There seemed to be a lot of
  understanding from the SSB team and even users that SSB has its strengths and
  weaknesses, and it would make sense to use multiple decentralized/distributed
  protocols to provide great, useful, people-powered software.




  In addition to working with and meeting people from the Dat and SSB community,
  I've been \[developing](https://github.com/dariusk/express-activitypub)
  \[software](https://github.com/dariusk/rss-to-activitypub/) that uses
  ActivityPub. ActivityPub is yet another protocol that tries to reduce our
  reliance on tech giants to do the kind of things we want to do with the
  internet. I \[wrote an introduction to ActivityPub for the Mozilla Hacks
  blog](https://hacks.mozilla.org/2018/11/decentralizing-social-interactions-with-activitypub/)
  that might be a helpful read.




  In the course of learning about these three protocols and being inspired by
  conversations with the people that use them, I've come to see them as
  fulfilling different, complementary roles.




  I'll try and sketch them out here \_extremely\_ briefly and broadly, and
  conclude with my thoughts on how we can design better software by bridging
  these technologies. (I know there are more technologies out there than these
  three, but these are the three that I know best.)




  \### Dat




  If you're reading this blog, chances are you already know about Dat. Dat was
  invented to allow researchers to share very large data sets with each other.
  It's a protocol that powers software like \[Beaker
  Browser](https://beakerbrowser.com/), a web browser that lets you create and
  publish your own websites without needing a web hosting service.




  My basic bullet points:




  \* Peer to peer protocol, can share data via your laptop or phone without
  connecting to some company's server, no out-of-the-box web browser support


  \* All your content is its own hidden island until its URL is sent to someone
  else; that person can share the URL or even post it somewhere public and now
  your island is on the map


  \* Good for sharing large files, your friends can consent to re-sharing them
  if they want


  \* Sends blobs of unstructured data around (you can add your own structure)


  \* Discovering new stuff requires manually sharing links




  \### Secure ScuttleButt




  Secure ScuttleButt (SSB) was invented, at least in part, to remove
  distinctions between frontend and backend software, enabling the "backend" to
  be carried around by a user, who then owns their own data. SSB is a protocol
  that, like Dat, powers \[a bunch of different decentralized
  applications](https://www.scuttlebutt.nz/applications). Chief among them is
  \[Patchwork](https://www.scuttlebutt.nz/getting-started), which is a kind of
  decentralized forum software that lets people have and follow conversations
  about different topics. SSB is also used for things like \[decentralized
  chess](https://github.com/Happy0/ssb-chess-mithril/blob/master/README.md) and
  \[decentralized GitHub-style code
  collaboration](https://github.com/noffle/git-ssb-intro).




  My basic bullet points:




  \* Peer to peer protocol, can share data via your laptop or phone without
  connecting to some company's server, no out-of-the-box web browser support


  \* Automatic publication of content to your friends


  \* Bad for sharing large files; among other things you don't want to force all
  your friends to store all your large files


  \* Sends blobs of unstructured data around (you can add your own structure)


  \* Discovering new stuff is somewhat automatic; once you are initially
  connected to a network then you can find friends-of-friends and keep
  connecting to more people




  \### ActivityPub




  ActivityPub was designed to solve the problem of "walled gardens" on the
  internet by providing a common language for websites and apps to speak to each
  other. Quoting \[my previous writing on the
  topic](https://hacks.mozilla.org/2018/11/decentralizing-social-interactions-with-activitypub/),
  ActivityPub is a protocol that "enables a decentralized social web, where a
  network of servers interact with each other on behalf of individual
  users/clients, very much like email operates at a macro level." It enables
  Twitter-style services like \[Mastodon](https://joinmastodon.org) to talk to
  Instagram-style services like \[PixelFed](https://pixelfed.social/) and
  YouTube-style services like \[PeerTube](https://joinpeertube.org/en/). (Brief
  nerd note: I am referring to the server-to-server portion of the protocol
  here.)




  My basic bullet points:




  \* Web protocol, so it works in all desktop and mobile web browsers without
  special software


  \* Not peer to peer, relies on special network nodes (servers) and an expert
  class of systems administrators to operate


  \* Since content is "federated" (replicated) between known servers, large
  files can fill up server hard drives pretty fast


  \* Designed around sending highly structured data


  \* Discovering new stuff can be pretty easy, it's not too different from
  existing centralized services that way




  \## What this means




  I've started thinking of these three protocols as each solving certain
  problems in the universe of software design, and when we understand where the
  protocols fit into the design space, we can start to think of solutions to
  seemingly intractable problems.




  \* Dat is great for sharing big files (or bundles of small files).




  \* Secure ScuttleButt is great for spreading messages organically between
  connected networks of people or computers.




  \* ActivityPub is great for coordinating messages between networks of
  always-on servers that are actively maintained by specialist systems
  administrators. 




  Looking at the software this way gives us a framework to design complex
  decentralized services.




  For example: how can we have a Google Drive style system where a bunch of
  people can just connect to each other's computers and share files that way,
  removing the giant tech company in the middle? Maybe we serve the files over
  Dat, we have a small network of always-on Dat pinning servers that coordinate
  with each other over ActivityPub to share file serving responsibilities, and
  perhaps discovery of what files my friends have been posting happens over
  Secure ScuttleButt. Maybe every pinning server is also a SSB pub, and
  \_these\_ coordinate over ActivityPub so there is robust delivery of social
  data to every user too. That's a very rough example and of course there are
  lots of problems that would need to be solved but it gives us a starting point
  for thinking about how to make this thing happen.




  \## Conclusion




  All of this points to two major recommendations that I can make.




  First, that software developers should not be afraid to mix, match, and layer
  protocols. There is no rule that says you can't do this, yet I've noticed
  people picking one protocol and sticking to it out of some kind of loyalty.
  When really, as a developer, your loyalty should be to your values of an open,
  decentralized internet, whatever those are. If we view these protocols as
  tools in a toolbox rather than monolithic solutions or ecosystems, we can
  build decentralized software that rivals and surpasses in utility anything the
  big centralized tech giants have to offer.




  Second, communities that build and support these protocols need to keep their
  specific strengths and weaknesses in mind. Instead of trying to make a
  "kitchen sink" protocol that solves a wide variety of problems, we should
  acknowledge the limitations of our protocols (and our own resources) and
  instead support and foster interoperability and collaboration between our
  communities.




  The internet has always been built on a bunch of different technologies
  filling in the gaps for each other. For example, while web browsers mainly use
  the TCP protocol for loading web pages, they switch to using UDP when it's
  convenient for things like video chat. Decentralized web protocols should be
  no exception to this pattern. The only way we're going to make the internet
  better is by working together to help each other.




  \_Thanks to Joe Hand and \[noffle](http://eight45.net/) for feedback, and to
  \[Zach Mandeville](https://coolguy.website/) and \[Sam
  Muirhead](https://www.cameralibre.cc/) for getting me thinking about this in
  the first place.\_
authors:
  - Darius Kazemi
date: '2019-03-22'
template: blog
---

