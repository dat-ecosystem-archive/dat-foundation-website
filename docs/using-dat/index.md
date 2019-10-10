## Command Line

Share, download, and backup files with the command line! Automatically sync changes to datasets. Never worry about manually transferring files again.

Have questions or need some guidance?
You can chat with us on [Gitter][gitter-chat]!

### Getting Started

Dat's unique design works wherever you store your data. You can create a new dat from any folder on your computer.

A dat is some files from your computer and a `.dat` folder. Each dat has a unique `dat://` link. With your dat link, other users can download your files and live sync any updates.

#### Sharing Data

You can start sharing your files with a single command. Unlike `git`, you do not have to initialize a repository first, `dat share` will do that for you:

```
dat share <dir>
```

Use `dat share` to create a dat and sync your files from your computer to other users. Dat scans your files inside `<dir>`, creating metadata in `<dir>/.dat`. Dat stores the public link, version history, and file information inside the dat folder.

![animation demonstrating the "dat share" command](assets/cli-share.gif)

#### Downloading Data

```
dat clone dat://<link> <download-dir>
```

Use `dat clone` to download files from a remote computer sharing files with Dat. This will download the files from `dat://<link>` to your `<download-dir>`. The download exits after it completes but you can continue to update the files later after the clone is done. Use `dat pull` to update new files or `dat sync` to live sync changes.

![animation demonstrating the "dat clone" command](assets/cli-clone.gif)

Try out `dat clone` with the link above to read more about the protocol!

#### Other Useful Commands

A few other highlights. Run `dat help` to see the full usage guide.

* `dat create` - Create an empty dat and `dat.json` file.
* `dat doctor` - Dat network doctor! The doctor tries to connect to a public peer. The doctor also creates a key to test direct connections.
* `dat log ~/data/dat-folder/` or `dat log dat://<key>` - view the history and metadata information for a dat.

#### Quick Demos

To get started using Dat, you can try downloading a dat and then sharing a dat of your own.

#### Download Demo

We made a demo folder just for this exercise. Inside the demo folder is a `dat.json` file and a gif. We shared these files via Dat and now you can download them with our dat key!

Similar to git, you can download somebody's dat by running `dat clone <link>`. You can also specify the directory:

```
❯ dat clone dat://778f8d955175c92e4ced5e4f5563f69bfec0c86cc6f670352c457943666fe639 ~/Downloads/dat-demo
dat v13.5.0
Created new dat in /Users/joe/Downloads/dat-demo/.dat
Cloning: 2 files (1.4 MB)

2 connections | Download 614 KB/s Upload 0 B/s

dat sync complete.
Version 4
```

This will download our demo files to the `~/Downloads/dat-demo` folder. These files are being shared by a server over Dat (to ensure high availability) but you may connect to any number of users also hosting the content.

#### Sharing Demo

Dat can share files from your computer to anywhere. If you have a friend going through this demo with you, try sharing to them! If not we'll see what we can do.

Find a folder on your computer to share. Inside the folder can be anything, Dat can handle all sorts of files (Dat works with really big folders too!).

First, you can create a new dat inside that folder. Using the `dat create` command also walks us through making a `dat.json` file:

```
❯ dat create
Welcome to dat program!
You can turn any folder on your computer into a Dat.
A Dat is a folder with some magic.
```

This will create a new (empty) dat. Dat will print a link, share this link to give others access to view your files.

Once we have our dat, run `dat share` to scan your files and sync them to the network. Share the link with your friend to instantly start downloading files.

#### Bonus HTTP Demo

Dat makes it really easy to share live files on a HTTP server. This is a cool demo because we can also see how version history works! Serve dat files on HTTP with the `--http` option. For example, `dat sync --http`, serves your files to a HTTP website with live reloading and version history! This even works for dats you're downloading (add the `--sparse` option to only download files you select via HTTP). The default HTTP port is 8080.

*Hint: Use `localhost:8080/?version=10` to view a specific version.*

Get started using Dat today with the `share` and `clone` commands or read below for more details.

### Usage

The first time you run a command, a `.dat` folder is created to store the dat metadata.
Once a dat is created, you can run all the commands inside that folder, similar to git.

Dat keeps secret keys in the `~/.dat/secret_keys` folder. These are required to write to any dats you create.

#### Creating a dat & dat.json

```
dat create [<dir>]
```

The create command prompts you to make a `dat.json` file and creates a new dat. Import the files with sync or share.

Optionally bypass Title and Description prompt:

```sh
dat create --title "MY BITS" --description "are ready to synchronize! 😎"
```

Optionally bypass `dat.json` creation:

```sh
dat create --yes
dat create -y
```

### Sharing

The quickest way to get started sharing files is to `share`:

```
❯ dat share
dat://3e830227b4b2be197679ff1b573cc85e689f202c0884eb8bdb0e1fcecbd93119
Sharing dat: 24 files (383 MB)

0 connections | Download 0 B/s Upload 0 B/s

Importing 528 files to Archive (165 MB/s)
[=-----------------------------------------] 3%
ADD: data/expn_cd.csv (403 MB / 920 MB)
```

#### Syncing to Network

```
dat sync [<dir>] [--no-import] [--no-watch]
```

Start sharing your dat archive over the network.
Sync will import new or updated files since you last ran `create` or `sync`.
Sync watches files for changes and imports updated files.

* Use `--no-import` to not import any new or updated files.
* Use `--no-watch` to not watch directory for changes. `--import` must be true for `--watch` to work.

#### Ignoring Files

By default, Dat will ignore any files in a `.datignore` file, similar to git. Each file should be separated by a newline. Dat also ignores all hidden folders and files.

Dat uses [dat-ignore] to decide if a file should be ignored. Supports pattern wildcards (`/*.png`) and directory-wildcards (`/**/cache`).

#### Selecting Files

By default, Dat will download all files. If you want to only download a subset, you can create a `.datdownload` file which downloads only the files and folders specified. Each should be separated by a newline.


### Downloading

Start downloading by running the `clone` command. This creates a folder, downloads the content and metadata, and a `.dat` folder inside. Once you started the download, you can resume using `clone` or the other download commands.

```
dat clone <link> [<dir>] [--temp]
```

Clone a remote dat archive to a local folder.
This will create a folder with the key name if no folder is specified.

#### Downloading via `dat.json` key

You can use a `dat.json` file to clone also. This is useful when combining Dat and git, for example. To clone a dat you can specify the path to a folder containing a `dat.json`:

```
git clone git@github.com:joehand/dat-clone-sparse-test.git
dat clone ./dat-clone-sparse-test
```

This will download the dat specified in the `dat.json` file.

#### Updating Downloaded Archives

Once a dat is clone, you can run either `dat pull` or `dat sync` in the folder to update the archive.

```
dat pull [<dir>]
```

Update a cloned dat archive with the latest files and exit.

```
dat sync [<dir>]
```

Download latest files and keep connection open to continue updating as remote source is updated.

### Shortcut commands

* `dat <link> <dir>` will run `dat clone` for new dats or resume the existing dat in `<dir>`
* `dat <dir>` is the same as running `dat sync <dir>`

### Key Management & Moving dats

`dat keys` provides a few commands to help you move or backup your dats.

Writing to a dat requires the secret key, stored in the `~/.dat` folder. You can export and import these keys between dats. First, clone your dat to the new location:

* (original) `dat share`
* (duplicate) `dat clone <link>`

Then transfer the secret key:

* (original) `dat keys export` - copy the secret key printed out.
* (duplicate) `dat keys import` - this will prompt you for the secret key, paste it in here.

## Building with Dat

In this guide, we will show how to develop applications with the Dat ecosystem. The Dat ecosystem is very modular making it easy to develop custom applications using Dat.

Dat comes with a built in javascript API we use in Dat Desktop and dat command line. For custom applications, or more control, you can also use the core Dat modules separately.

Use Dat in your JS Application:

1. `require('dat')`: use the [high-level Dat JS API](https://github.com/datproject/dat-node).
2. Build your own!

This tutorial will cover the second option and get you familiar with the core Dat modules.

### The Dat Core Modules

This tutorial will follow the steps for sharing and downloading files using Dat. In practice, we implement these in [dat-node](https://github.com/datproject/dat-node), a high-level module for using Dat that provides easy access to the core Dat modules.

For any Dat application, there are two essential modules you will start with:

1. [hyperdrive](https://npmjs.org/hyperdrive) for file synchronization and versioning
2. [hyperdiscovery](https://npmjs.org/hyperdiscovery) helps discover and connect to peers over local networks and the internet

The [Dat CLI](https://npmjs.org/dat) module itself combines these modules and wraps them in a command-line API. We also use the [dat-storage](https://github.com/datproject/dat-storage) module to handle file and key storage. These modules can be swapped out for a similarly compatible module, such as switching storage for [random-access-memory](https://github.com/mafintosh/random-access-memory).

### Getting Started

You will need node and npm installed to build with Dat. [Read more](https://github.com/datproject/dat/blob/master/CONTRIBUTING.md#development-workflow) about our development work flow to learn how we manage our module dependencies during development.

### Download a File

Our first module will download files from a Dat read key entered by the user.

```bash
mkdir module-1 && cd module-1
npm init
npm install --save hyperdrive random-access-memory hyperdiscovery
touch index.js
```

For this example, we will use random-access-memory for our database (keeping the metadata in memory rather than on the file system). In your `index.js` file, require the main modules and set them up:

```js
var ram = require('random-access-memory')
var hyperdrive = require('hyperdrive')
var discovery = require('hyperdiscovery')

var readKey = process.argv[2] // user inputs the dat read key
var key =  readKey.replace('dat://', '') // extract the key

var archive = hyperdrive(ram, key)
archive.ready(function () {
  discovery(archive)
})
```

Notice, the user will input the read key for the second argument. The easiest way to get a file from a hyperdrive archive is to make a read stream. `archive.readFile` accepts the index number of filename for the first argument. To display the file, we can create a file stream and pipe it to `process.stdout`.

```js
// Make sure your archive has a dat.json file!
var stream = archive.readFile('dat.json', 'utf-8', function (err, data) {
  if (err) throw err
  console.log(data)
})
```

Now, you can run the module! To download the `dat.json` file from an archive:

```
node index.js dat://<readKey>
```

You should see the `dat.json` file.

#### Bonus: Display any file in the Dat

With a few more lines of code, the user can enter a file to display from the Dat.

Challenge: create a module that will allow the user to input a Dat read key and a filename: `node bonus.js <dat-readKey> <filename>`. The module will print out that file from the readKey, as we did above:

```js
var stream = archive.readFile(fileName)
```

Once you are finished, see if you can view this file by running:

```bash
node bonus.js 395e3467bb5b2fa083ee8a4a17a706c5574b740b5e1be6efd65754d4ab7328c2 readme.md
```

### Download all files to computer

This module will build on the last module. Instead of displaying a single file, we will download all of the files from a Dat into a local directory.

To download the files to the file system, we are going to use [mirror-folder](https://github.com/mafintosh/mirror-folder). [Read more](/using-fs) about how mirror-folder works with hyperdrive.

In practice, you should use [dat-storage](https://github.com/datproject/dat-storage) to do this as it'll be more efficient and keep the metadata on disk.

Setup will be the same as before (make sure you install `mirror-folder`). The first part of the module will look the same.

```js
var path = require('path')
var ram = require('random-access-memory')
var hyperdrive = require('hyperdrive')
var discovery = require('hyperdiscovery')
var mirror = require('mirror-folder')
var mkdirp = require('mkdirp')

var readKey = process.argv[2] // user inputs the dat readKey
var key = readKey.replace('dat://', '') // extract the key
var dir = path.join(process.cwd(), 'dat-download') // make a download folder
mkdirp.sync(dir)

var archive = hyperdrive(ram, key)
archive.ready(function () {
  discovery(archive)

  var progress = mirror({name: '/', fs: archive}, dir, function (err) {
    console.log('done downloading!')
  })
  progress.on('put', function (src) {
    console.log(src.name, 'downloaded')
  })
})
```

You should be able to run the module and see all our docs files in the `download` folder:

```bash
node index.js dat://<readKey>
```


### Troubleshooting

We've provided some troubleshooting tips based on issues users have seen.
Please [open an issue][new-issue] or ask us in our [chat room][gitter-chat] if you need help troubleshooting and it is not covered here.

If you have trouble sharing/downloading in a directory with a `.dat` folder, try deleting it and running the command again.

#### Check Your Dat Version

Knowing the version is really helpful if you run into any bugs, and will help us troubleshoot your issue.

Check your Dat version:

```
dat -v
```

You should see the Dat semantic version printed, e.g. `13.1.2`.

### Installation Issues

#### Node & npm

To use the Dat command line tool you will need to have [node and npm installed][install-node-npm].
Make sure those are installed correctly before installing Dat.
You can check the version of each:

```
node -v
npm -v
```

#### Global Install

The `-g` option installs Dat globally, allowing you to run it as a command.
Make sure you installed with that option.

* If you receive an `EACCES` error, read [this guide][fixing-npm-permissions] on fixing npm permissions.
* If you receive an `EACCES` error, you may also install Dat with sudo: `sudo npm install -g dat`.
* Have other installation issues? Let us know, you can [open an issue][new-issue] or ask us in our [chat room][gitter-chat].

### Debugging Output

If you are having trouble with a specific command, run with the debug environment variable set to `dat` (and optionally also `dat-node`).
This will help us debug any issues:

```
DEBUG=dat,dat-node dat clone dat://<link> dir
```

### Networking Issues

Networking capabilities vary widely with each computer, network, and configuration.
Whenever you run Dat there are several steps to share or download files with peers:

1. Discovering Peers
2. Connecting to Peers
3. Sending & Receiving Data

With successful use, Dat will show `Connected to 1 peer` after connection.
If you never see a peer connected, your network may be restricting discovery or connection.
Please try using the `dat --doctor` command (see below) between the two computers not connecting. This will help troubleshoot the networks.

* Dat may [have issues][dat#503] connecting if you are using iptables.

#### Dat Doctor

We've included a tool to identify network issues with Dat, the Dat doctor.
The Dat doctor will run two tests:

1. Attempt to connect to a public server running a Dat peer.
2. Attempt a direct connection between two peers. You will need to run the command on both the computers you are trying to share data between.

Start the doctor by running:

```
dat doctor
```

For direct connection tests, the doctor will print out a command to run on the other computer, `dat doctor <64-character-string>`.
The doctor will run through the key steps in the process of sharing data between computers to help identify the issue.

---

### JS API

You can use Dat in your javascript application:

```js
var Dat = require('dat')

Dat('/data', function (err, dat) {
  // use dat
})
```

**[Read more][dat-node] about the JS usage provided via `dat-node`.**


[Dat Project]: https://datproject.org
[Code for Science & Society]: https://codeforscience.org
[Dat white paper]: https://github.com/datproject/docs/blob/master/papers/dat-paper.pdf
[Dat Desktop]: https://docs.datproject.org/install#desktop-application
[Beaker Browser]: https://beakerbrowser.com
[registry server]: https://github.com/datproject/datbase
[Knight Foundation grant]: https://blog.datproject.org/2016/02/01/announcing-publicbits-org/
[dat-node]: https://github.com/datproject/dat-node
[dat-ignore]: https://github.com/joehand/dat-ignore
[new-issue]: https://github.com/datproject/dat/issues/new
[dat#503]: https://github.com/datproject/dat/issues/503
[install-node]: https://nodejs.org/en/download/
[install-node-npm]: https://docs.npmjs.com/getting-started/installing-node
[fixing-npm-permissions]: https://docs.npmjs.com/getting-started/fixing-npm-permissions
[guidelines on contributing]: https://github.com/datproject/dat/blob/master/CONTRIBUTING.md
[development workflow]: https://github.com/datproject/dat/blob/master/CONTRIBUTING.md#development-workflow
[travis-badge]: https://travis-ci.org/datproject/dat.svg?branch=master
[travis-build]: https://travis-ci.org/datproject/dat
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/github/datproject/dat?branch=master&svg=true
[appveyor-build]: https://ci.appveyor.com/project/joehand/dat/branch/master
[npm-badge]: https://img.shields.io/npm/v/dat.svg
[npm-package]: https://npmjs.org/package/dat
[irc-badge]: https://img.shields.io/badge/irc%20channel-%23dat%20on%20freenode-blue.svg
[irc-channel]: https://webchat.freenode.net/?channels=dat
[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
[gitter-chat]: https://gitter.im/datproject/discussions

## Sharing files over HTTP

The Dat command line comes with a built in HTTP server. This is a cool demo because we can also see how version history works! The `--http` option works for files you are sharing *or* downloading.

(If you don't have dat command line installed, run `npm install -g dat`, or [see more info](getting-started-installation.md).)

### Serve over HTTP

Serve dat files on http by adding the `--http` option. For example, you can sync an existing dat:

```
❯ dat sync --http
dat://778f8d955175c92e4ced5e4f5563f69bfec0c86cc6f670352c457943666fe639
Sharing dat: 2 files (1.4 MB)
Serving files over http at http://localhost:8080

2 connections | Download 0 B/s Upload 0 B/s
```

Now visit `http://localhost:8080` to see the files in your browser! The default http port is 8080. You should see a directory listing:

<img src="/assets/cli-http.png" alt="Dat HTTP viewer"/>

If your dat has an `index.html` page, that will be shown instead.

You can combine Dat's http support with our server tools to create a live updating website or place to share files publicly.

### Built-in Versioning

As you may know, Dat automatically versions all files. The HTTP display is an easy way to view version history:

**Use `localhost:8080/?version=2` to view a specific version.**

### Live reloading

The Dat http viewer also comes with live reloading. If it detects a new version it will automatically reload with the new directory listing or page (as long as you aren't viewing a specific version in the url).

### Sparse Downloading

Dat supports *sparse*, or partial downloads, of datasets. This is really useful if you only want a single file from a large dat. Unfortunately, we haven't quite built a user interface for this into our applications. So you can hack around it!

This will allow you to download a single file from a larger dat, without downloading metadata or any other files.

First, start downloading our demo dat, make sure you include both the flags (`--http`, `--sparse`).

```
❯ dat dat://778f8d955175c92e4ced5e4f5563f69bfec0c86cc6f670352c457943666fe639 ./demo --http --sparse
Cloning: 2 files (1.4 MB)
Serving files over http at http://localhost:8080

3 connections | Download 0 B/s Upload 0 B/s
```

The `--sparse` option tells Dat to only download files you specifically request. See how it works:

1. Check out your `./demo` folder, it should be empty.
2. Open the Dat in your browser.
3. Click on a file to download.
4. It should be in your folder now!

Pretty cool! You can use this hack to download only specific files or even older versions of files (if they've been saved somewhere).

## Browser Dat 

**We've just released a NEW!! version of [dat-js](https://github.com/datproject/dat-js). Take a look and let us know how you use it!**

Dat is written in JavaScript, so naturally, it can work entirely in the browser! The great part about this is that as more peers connect to each other in their client, the site assets will be shared between users rather hitting any server.

This approach is similar to that used in Feross' [Web Torrent](http://webtorrent.io). The difference is that Dats can be rendered live and read dynamically, whereas BitTorrent links are static. The original owner of a Dat can update the files in the directory and all peers will receive the updates automatically.

### Connecting to non-browser peers

dat-js primarily uses WebRTC, so it prioritizes connections to other browser peers that are also using WebRTC. All other Dat applications use non-WebRTC protocols ([see this FAQ for more info](getting-started-faq.md)). Non-browser clients can connect dats peer-to-peer via webrtc modules, such as [electron-webrtc](https://github.com/mappum/electron-webrtc), or use proxies via websockets, http, or other client-server protocols.

In order for the dat-js library to connect to clients that aren't in the browser, we recommend using [dat-gateway](https://github.com/garbados/dat-gateway/). Deploy your own gateway if you expect a lot of traffic to your application.

A gateway works by having the client open a [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) to the gateway, and have the gateway reach out to the rest of the dat network in order to fetch data from peers and send it down the websocket connection to dat-js. The gateway acts as a fallback and only gets used after dat-js has tried to connect to WebRTC peers first. This reduces gateway bandwidth constraints and keeps most of the traffic peer to peer.

There is an example gateway deployed at [gateway.mauve.moe](https://gateway.mauve.moe/).

OK, now for the goods.

### Install

Embed the following script [dat.min.js](https://bundle.run/dat-js@8) on the page:
```html
<script type="text/javascript" src="dat.min.js"></script>
```

You can also use [packd](https://bundle.run/) to have it generate the bundle on the fly:

```html
<script type="text/javascript" src="https://bundle.run/dat-js@8"></script>
```

This provides a `datJS` prototype on the `window` object.

```js
var Dat = window.datJS 
```

### Browserify

Or use Node.js in the browser with [browserify](https://github.com/browserify/browserify), which lets you use node.js style require() to organize your browser code using npm.

```
npm install dat-js
```

Then use `dat-js` like this:

```js
var Dat = require('dat-js')
```

And build a bundle with browserify, assuming your file is called `index.js` like this:

```
browserify ./index.js > bundle.js
```

Then include a script tag pointing at your `bundle.js`:

```
<script type="text/javascript" src="bundle.js"></script>
```


#### Getting data from a remote dat

You can load a Dat archive using it's `read key`. Dat-js will reach out to the P2P network and start loading the metadata into memory. From there you can invoke [hyperdrive](https://www.npmjs.com/package/hyperdrive) methods to read the data.

```js
var Dat = require('dat-js')

var dat = new Dat()
var archive = dat.get('dat://SOME_ARCHIVE_URL')

archive.readFile('hello.txt', function (err, data) {
  console.log(data)
})

var readStream = archive.createReadStream('hello.txt')
readStream.on('data', console.log)
```

#### Persisting a created dat and loading it from storage

By default, when you create a new Dat archive with Dat-js, it will be erased after you refresh the page. In order to keep it around for the next time the user loads the page, you need to make sure to enable the `persist` flag, and save a copy of the `url` read key to someplace like [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

```js
var Dat = require('dat-js')

var dat = new Dat()

var archive = dat.create({
  // Set this flag so that the data is persisted to the browser rather than memory
  persist: true
})

archive.writeFile('/example.txt', 'Hello World!', () => {
  // Save it for later
  localStorage.setItem('My_Repo', archive.url)
})

// OR as a stream:
var ws = archive.createWriteStream()
ws.write('Hello World!')
ws.end()

// Next time your app loads

var archive = dat.get(localStorage.getItem('My_Repo'), {
  persist: true
})

archive.readFile('/example.txt', 'utf-8', (err, data) => {
  console.log(`It's still there: ${data}`)
})
```

### API

#### `var dat = new Dat([options])`

Creates a new dat object. The options passed here will be default for any dats created using the `add` method.

 * `options`: any options you can pass to [mafintosh/hyperdrive](https://github.com/mafintosh/hyperdrive). These options will become default for all dats. It also gets passed as options into [discovery-swarm-web](https://github.com/RangerMauve/discovery-swarm-web). In addition it has the following:
  * `persist`: Whether the data should persist locally or load in memory. Default: `false` (memory only). This uses [random-access-web](https://github.com/RangerMauve/random-access-web) for persistence to choose the best storage layer for the current browser.
  * `db`: Pass in the [random-access-storage](https://github.com/random-access-storage/random-access-storage) instance to use. (overrides the `persist` option)
  * `id`: The ID to use when replicating hyperdrives

### `dat.get(url, [options])`

Adds a new dat with the given url. Joins the appropriate swarm for that url and begins to upload and download data. If the dat was already added, it will return the existing instance. One gotcha is that dat-js doesn't support DNS resolution yet. As such you'll need to use the actual archive key for loading websites. `dat-js` adds a `url` field to the archive, which contains the [read key](https://docs.datproject.org/docs/concepts#distributed-network), but you can see the rest of the APIs available in the [hyperdrive](https://www.npmjs.com/package/hyperdrive) docs.

 * `url`: Either a `dat://` url or just the public key in string form.
 * `options`: These options will override any options given in the Dat constructor.

### `dat.create([options])`

Creates a new dat, wait for it to be `ready` before trying to access the url. Make sure to save the archive `url` somewhere and enable `persist: true` so you can access it again later!

* `options`: These options will override any options given in the Dat constructor.

### `dat.has(url)`

Returns whether a given url has been loaded already.

### Properties

#### `dat.archives`

Array of dat archives that are currently loaded

### Events

#### `archive`

Fired every time a new archive is loaded.

#### `close`

Fired when dat is finished closing, including swarm and database.


### Downloading everything or only what you need

You might be asking 'Is it possible to index into a subset of a dat dataset?' Most datasets are too large for browsers, and we probably only want a subset of them.

You can do this by using `sparse` mode, which makes it only download content that the peer asks for. This is actually enabled by default and you can opt-into downloading the entire archive by passing `{sparse: false}` when you create the dat:

```js
var Dat = require('dat-js')

var dat= Dat()
var fullArchive = dat.get(url, {sparse: false})

// etc.
```

<!--

// TODO: Gonna leave this out for now and work on it last, there might still be changes for how signaling and peer discovery works.

### Under the hood

Let's look under the hood of `dat-js` to see how a simple lower-level implementation can be built to create a browser-based dat.

Here's the most simple example using the underlying modules directly:

```js
var webrtc = require('webrtc-swarm')
var signalhub = require('signalhub')
var hyperdrive = require('hyperdrive')
var memdb = require('memdb')
var pump = require('pump')

var DEFAULT_SIGNALHUBS = 'https://signalhub.mafintosh.com'

var archive = hyperdrive()
var link = archive.discoveryKey.toString('hex')

var swarm = webrtc(signalhub(link, DEFAULT_SIGNALHUBS))
swarm.on('peer', function (conn) {
  var peer = archive.replicate({
    upload: true,
    download: true
  })
  pump(conn, peer, conn)
})
```

That's it. Now you are serving a dat-compatible hyperdrive from the browser. In another browser tab, you can connect to the swarm and download the data by using the same code as above. Just make sure to reference the archive you created before by using `archive.key` as the first argument:

-->

### Storage API for metadata and content

Hyperdrive is the underlying database that runs dat.

Hyperdrive will save the metadata (small) and the content (potentially large) separately. You can control where both of these are saved and how they are retrieved. These tweaks have huge impact on performance, stability, and user experience, so it's important to understand the tradeoffs.

There are a million different ways to store and retrieve data in the browser, and all have their pros and cons depending on the use case. We've compiled a variety of examples here to try to make it as clear as possible.

You can pass in the specific implementation with the `db` parameter when initializing dat-js. By default, dat-js uses [random-access-memory](https://www.npmjs.com/package/random-access-memory) which is fast, but gets cleared when you refresh the page.

There are many different ways to piece modules together to create the storage infrastructure for a hyperdrive -- here are some tested examples:

### Writing large files from the filesystem to the browser

File writes are limited to the available memory on the machine. Files are buffered (read: copied) *into memory* while being written to the hyperdrive instance. This isn't ideal, but works as long as file sizes stay below system RAM limits.

To fix this problem, you can use [random-access-file-reader](https://github.com/mafintosh/random-access-file-reader) to read the files directly from the filesystem instead of buffering them into memory.

### Writing files to IndexedDB in the browser

[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) is a low-level key-value database that's supported by all the major browsers. It can be used to persist data for your dat archives across page refreshes and tabs using the [random-access-idb](https://www.npmjs.com/package/random-access-idb) module.

You can decide to have dat archives persist to memory by default and only load certain ones through idb:

```js
var storage = require('random-access-idb')('dats')
var Dat = require('dat-js')

var dat = new Dat()

var persistedRepo = dat.get(url, {
  db: storage
})
```

### Get in touch!

Come over to our community channels and ask a question. It's probably a good one and we should cover it in the documentation. Thanks for trying it out, and PRs always welcome!

[![#dat IRC channel on freenode](https://img.shields.io/badge/irc%20channel-%23dat%20on%20freenode-blue.svg)](http://webchat.freenode.net/?channels=dat)
[![datproject/discussions](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/datproject/discussions?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Dats on a Server

Since Dat is a distributed (peer-to-peer) data sharing tool, a computer must be actively sharing a dat for it to be available. If you're sharing files over Dat, you might want to set up a dedicated server that re-hosts your dat. This means that it'll still be available even after you turn off your personal computer.

Running Dat on a server can also be used for live backups. As long as you are connected to your server and syncing changes, your server can backup all of your content history - allowing you to view old content later.

### Short instructions

We have built a tool into the Dat CLI called `dat store` which enables you to set up a server to keep your Dats online. The tool also enables you to interact with servers that adhere to the [HTTP Pinning Service API](https://www.datprotocol.com/deps/0003-http-pinning-service-api/).

```
npm install -g dat dat-store
dat store install-service
dat store dat://64375abb733a62fa301b1f124427e825d292a6d3ba25a26c9d4303a7987bec65
```

### Detailed Instructions

### Node Version

If you don't have Node installed please follow the installation instructions for your platform [here](https://nodejs.org/en/download/package-manager/).

Check your node version, you should have version 6.10.3, but the latest stable release is preferred.

```
$ node -v
```

### Install The CLI

Then, go to your server (using `ssh username@hostname.com`) and install `dat` and the `dat-store` extension:

```
npm install -g dat dat-store
```

### Start A Dat Store

Once the CLI is installed, you can run a Dat Store which will be used for to keep a list of Dats online. By default, it will run on http://localhost:3472

```
dat store run-service
```

By default, it will store the data for Dats inside `~/.dat/store-data/`.
This can be overridden with the `--storage-location` flag.

```
dat store run-service --storage-location /example/location
```

### Add Dats

You can interact with the store using the CLI.

```
dat store dat://64375abb733a62fa301b1f124427e825d292a6d3ba25a26c9d4303a7987bec65
dat store add dat://datproject.org
```

You can list all the Dats that are in the store:

```
dat store list
```

You can also remove Dats from the store

```
dat store remove dat://datproject.org
```

### Run It Forever

You can install the Store to run as a service on the current machine.
This is handled by the [os-service](https://www.npmjs.com/package/os-service) module which supports Linux, Mac, and Windows.

```
dat store install-service
```

The service will be called `dat-store` and can be managed by your operating system as you would any other service. To start and stop the service, you'll need to look into the specific commands for your operating system. For example, on Linux with Systemd you can use `sudo systemctl stop dat-store` to stop the service and `sudo systemctl start dat-store` to start it up again.

You can uninstall the service when you no longer need it.

```
dat store uninstall-service
```

### Remote Stores

You can configure the CLI to connect to a store that's running on another machine.
To handle multiple stores at once, you can specify a name for the remote store.

```
dat store set-provider SOME_NAME_HERE http://192.168.1.1:3472
```

This can be used to share a Store between members of a community or company.
The provider URL and session token are stored in `~/.dat/store.json` and are used for any dats.

It's strongly advised to layer some sort of authentication and HTTPS on top of the service if you want it to be accessible over the internet.

If you want a more advanced Store that has authentication built in, check out [Homebase](https://github.com/beakerbrowser/homebase/)

### Public Stores

Members of the Dat community have created [Hashbase](https://hashbase.io/) which is public Dat store that anybody can use.

To set it up with the CLI, you'll need to [create an account].

Then you'll need to point the CLI at Hashbase.

```
dat store set-provider hashbase https://hashbase.io
```

And finally, you'll need to log into Hashbase from the CLI

```
dat store login hashbase YOU_USERNAME_HERE
```

Now you'll be able to add your Dats to hashbase and have it keep them online.

```
dat store add hashbase dat://SOME_KEY_HERE
```

### Automatically Track A Folder

The CLI supports a special case for local stores where you can pass it a folder and have it automatically watch for changes and update the Dat in addition to keeping the content online. This can be combined with a remote store to make sure any changes you do to a local folder get synced to the rest of the network and are kept online even if you're offline.

```
# Set up the local store to run as a service
dat store install-service

# Turn a folder with your files into a Dat
dat create ./my-website

# Add your Dat to the local store so it will watch for changes
dat add ./my-website

# Add the key for your Dat to Hashbase to keep it online if your computer is off
dat add hashbase ./my-website

# Add a file to your Dat, it should automatically be added to the history
echo Hello World! > ./my-website/index.html
```
## Troubleshooting Dat

We've provided some troubleshooting tips based on issues users have seen. Please [open an issue](https://github.com/datproject/dat/issues/new) or ask us in our [chat room](https://gitter.im/datproject/discussions) if you need help troubleshooting and it is not covered here.

### Check Your Version

Knowing the version is really helpful if you run into any bugs, and will help us troubleshoot your issue.

**In the Command Line:**

```
dat -v
```

You should see the Dat semantic version printed, e.g. `13.1.2`.

### Networking Issues

All Dat transfers happen directly between computers. Dat has various methods for connecting computers but because networking capabilities vary widely we may have issues connecting. Whenever you run a Dat there are several steps to share or download files with peers:

1. Discovering other sources
2. Connecting to sources
3. Sending & Receiving Data

With successful use, Dat will show network counts after connection. If you never see a connection, your network may be restricting discovery or connection. Please try using the dat doctor (see below) between the two computers not connecting. This will help troubleshoot the networks.

### Dat Doctor

We've included a tool to identify network issues with Dat, the Dat doctor. The Dat doctor will run two tests:

1. Attempt to connect to a public server running Dat.
2. Attempt a direct connection between two computers. You will need to run the command on both the computers you are trying to share data between.

**In Dat Desktop:**

Our desktop Dat doctor is still in progress, currently you can only test connections to our public server (#1).

1. View > Toggle Developer Tools
2. Help > Doctor

You should see the doctor information printed in the console.

**In the Command Line:**

Start the doctor by running:

```
dat doctor
```

For direct connection tests, the doctor will print out a command to run on the other computer, `dat doctor <64-character-string>`. The doctor will run through the key steps in the process of sharing data between computers to help identify the issue.

### Known Networking Issues

* Dat may [have issues](https://github.com/datproject/dat/issues/503) connecting if you are using iptables.

### Installation Troubleshooting

To use the Dat command line tool you will need to have [node and npm installed](https://docs.npmjs.com/getting-started/installing-node). Make sure those are installed correctly before installing Dat. Dat only supports Node versions 4 and above.

```
node -v
```

#### Global Install

The `-g` option installs Dat globally allowing you to run it as a command. Make sure you installed with that option.

* If you receive an `EACCES` error, read [this guide](https://docs.npmjs.com/getting-started/fixing-npm-permissions) on fixing npm permissions.
* If you receive an `EACCES` error, you may also install dat with sudo: `sudo npm install -g dat`.
* Have other installation issues? Let us know, you can [open an issue](https://github.com/datproject/dat/issues/new) or ask us in our [chat room](https://gitter.im/datproject/discussions).

### Command Line Debugging

If you are having trouble with a specific command, run with the debug environment variable set to `dat` (and optionally also `dat-node`). This will help us debug any issues:

```
DEBUG=dat,dat-node dat clone dat://<readKey> dir
```


