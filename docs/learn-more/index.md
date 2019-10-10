## The dat:// protocol

### More About the Dat Protocol

Dat is a protocol for sharing data between computers. By making sure changes in data are transparent, everyone receives only the data they want, and connecting computers directly (rather than using a cloud server), Dat powers communities building next-generation Web.

The *Dat Project* helps shepherd community efforts surrounding the Dat protocol. Find more information about the specifications, Dat Protocol working group, and Dat governance:

* [Dat Protocol Specifications](https://www.datprotocol.com/)
* [How Dat Works](https://datprotocol.github.io/how-dat-works/)
* [Dat Governance](https://github.com/datproject/governance)


## Open Source Ecosystem

We have built and contributed to a variety of modules that support our work on Dat as well as the larger data and code ecosystem. Feel free to go deeper and see the implementations we are using in the [Dat command-line tool](https://github.com/datproject/dat) and the [Dat Desktop](https://github.com/datproject/dat-desktop).

Dat embraces the Unix philosophy: a modular design with composable parts. All of the pieces can be replaced with alternative implementations as long as they implement the abstract API. We believe this creates better end-user software, but more importantly, will create more sustainable and impactful open source tools.

### User Software

* [dat](https://github.com/datproject/dat) - The Dat command line interface.
* [Dat Desktop](https://github.com/datproject/dat-desktop) - Desktop application similar to a torrent client.
* [Beaker](https://beakerbrowser.com) - A web browser for exploring and building Dat websites.

### Specifications

* [How Dat Works](https://datprotocol.github.io/how-dat-works/) - Visual explanation of the Dat protocol.
* [Dat Enhancement Proposals](https://github.com/datprotocol/DEPs) - Contains all specs for the Dat protocol, including drafts.

### Core Modules

These modules form the backbone of Dat software:

* [hypercore](https://github.com/mafintosh/hypercore) - A secure, distributed append-only log.
* [hyperdrive](https://github.com/mafintosh/hyperdrive) - A secure, real time distributed file system (built on hypercore).
* [hyperdiscovery](https://github.com/datproject/hyperdiscovery) - Defaults for networking discovery and connection management.
* [dat-node](https://github.com/datproject/dat-node) - High-level module for building Dat applications on the file system.
* [dat-js](https://github.com/datproject/dat-js) - Using Dat in the browser.

View [more on Github](https://github.com/search?utf8=%E2%9C%93&q=topic%3Adat&type=Repositories).

### Related modules

These modules are community-driven and can be used to implement a variety of distributed web applications with Dat.

* [kappa-db](https://github.com/kappa-db) - Small core database for multiwriter kappa architectures.
* [hypermerge](https://github.com/automerge/hypermerge#readme) - CRDT for merging multiple hypercore feeds.
* [mirror-folder](https://github.com/mafintosh/mirror-folder) - Mirror a folder to another folder, supports hyperdrive and live file watching.

## Dat Terminology

Terms use in the Dat ecosystem.

### dat, Dat archive, archive

A dat, or Dat archive, is a set of files and dat metadata. A dat folder can contain files of any type, which can be synced to other users. A dat has a read key used to share with other people.

When you create a dat with the command line and Node.js API, you're creating a `.dat` folder to hold the metadata and the dat keys (a read and write key).

### Write Key

Write keys are the private part of a key pair. Users that have the write key are able to write updates to a dat.

With the Dat CLI and Desktop application, read keys are stored in a dat folder in your home directory, `~/.dat/secret_keys`. It is important to back these up if you get a new computer.

### Writer

User who can write to a Dat archive. This user has the write key, allowing them to write data. Currently, dats are single-writer.

### Collaborator

User who are granted read access to a Dat archive by the owner. A collaborator can access a Dat archive if the owner or another collaborator sends the Dat link.

In the future, users will be able to grant collaborators write access to the Dat archive, allowing them to modify and create files in the archive.

### Swarm or Network

A group of peers that want or have downloaded data for a Dat archive and are connected to each other over the Distributed Web.

### General Terms

#### Distributed Web

In a Distributed Web (P2P) model, those who are downloading the data also provide bandwidth and storage to share it. Instead of one server, we have many. The more people or organizations that are involved in the Distributed Web, the more redundant, safe, and fast it will become.

Currently, the Web is centralized: if someone controls the hardware or the communication line, then they control all the uses of that website. [Read more here](http://brewster.kahle.org/2015/08/11/locking-the-web-open-a-call-for-a-distributed-web-2/).

#### Peer to Peer (P2P)

A P2P software program searches for other connected computers on a P2P network to locate the desired content. The peers of such networks are end-user computer systems that are interconnected via the Internet.

In Dat, peers only connect if they both have the same Dat link.

#### Store / Storage Provider

Distributed web content needs to have at least one peer in the network which has a copy of the content in order for new peers to be able to download it. Stores or storage providers let users send their Dat read key to their server and they will set up a peer that they guarantee will always be online. [Hashbase](https://hashbase.io/) is a popular storage provider, and you can host your own using [dat-store](https://www.npmjs.com/dat-store) or [Homebase](https://github.com/beakerbrowser/homebase/)

#### Beaker

The [Beaker Browser](https://beakerbrowser.com/) is an experimental p2p browser that can view and publish dats alongside traditional web browsing.

### Technical Terms

#### SLEEP

SLEEP is the the on-disk format that Dat produces and uses. It is a set of 9 files that hold all of the metadata needed to list the contents of a Dat repository and verify the integrity of the data you receive.

The acronym SLEEP is a slumber related pun on REST and stands for Syncable Lightweight Event Emitting Persistence. The Event Emitting part refers to how SLEEP files are append-only in nature, meaning they grow over time and new updates can be subscribed to as a realtime feed of events through the Dat protocol.

Read the full [SLEEP specification](https://github.com/datproject/docs/blob/master/papers/dat-paper.md#3-sleep-specification) in the dat whitepaper.

#### Key

A 32-bit hash that uniquely represents a feed. All hypercore feeds have keys. The metadata key is used as the read key for an archive.

#### Read key

The read key is the key that is used as the Dat link. Messages are signed using the read key, allowing write access to feeds. The owner is the only user with the read key.

#### Discovery Key

The discovery key is a hashed read key. The discovery key is used to find peers on the read key without exposing the original read key to network.

#### Feed

A feed is a term we use interchangeably with the term "append-only log". It’s the lowest level component of Dat. For each Dat, there are two feeds - the metadata and the content.

Feeds are created with hypercore.

#### Metadata Feed

Like an HTTP header, the metadata contains a pointer to the contents of Dat and the file list.

The metadata is a hypercore feed. The first entry in the metadata feed is the key for the content feed.

#### Content Feed

The content feed is a hypercore feed containing the file contents for a Dat archive. The content feed together with a metadata feed make a Dat archive.

#### Version

Internally every dat data-structure is composed of append-only logs or feeds (hypercores). Any time an entry is appended to the log, a new version is created. The version is identified according to the semantics of the data-structure. In the case of single-writer hyperdrive, it's currently being identified by the metadata log's latest message number.

#### Sparse

When you load an archive, by default you only load the parts that are necessary. This is called `sparse` replication and is passed in as a flag when initializing the archive. For situations where you want to download the entire history of an archive, `sparse` is set to `false`.

#### Checkout

Sometimes you want to load content from a Dat archive at a specific point in it's history. For that you need to checkout a given version which will ignore any newer changes and show you want the archive looked that at that version.

#### Hyperdrive

[Hyperdrive](https://github.com/mafintosh/hyperdrive) is peer to peer directories. We built hyperdrive to efficiently share scientific data in real time between research institutions. Hyperdrive handles the distribution of files while encrypting data transfer and ensuring content integrity. Hyperdrive creates append-only logs for file changes allow users to download partial datasets and to create versioned data. Hyperdrive is built on hypercore.

Archives created with hyperdrive are made with two feeds, one for the metadata and one for the content.

#### Hypercore

[Hypercore](https://github.com/mafintosh/hypercore) is a protocol and network for distributing and replicating feeds of binary data. This creates an efficient gossip network where latency is reduced to a minimum. Hypercore is an eventually consistent, highly available, partition tolerant system.

#### Bootstrapping

In order to discover peers in a P2P network, you must first discover some initial peers to connect to. This is know as Bootstrapping and is done by Dat whenever you load into a swarm. The default bootstrap IPs that Dat uses can be found in the [dat-swarm-defaults](https://github.com/datproject/dat-swarm-defaults/blob/master/index.js) module.


## Key Dat Concepts

### In Place Archiving

You can turn any folder on your computer into *a dat*. We call this *in place archiving*. A dat is a regular folder with some magic attached. The magic is a set of metadata files, in a `.dat` folder. Dat uses the metadata to track file history and securely share your files. Your files and the `.dat` folder can be instantly synced to anywhere.

Once you have installed Dat, you can use a single command to live sync your files to friends, backup to an external drive, and publish to a website (so people can download over http too!). The cool part is this all happens at the same time. If you go offline for a bit, no worries. Dat shares the latest files and any saved history once you are back online. These data transfers happen between the computers, forgoing any centralized source.

In place archiving in Dat really means **any place**. Dat seamlessly syncs your files where you want and when you want. Dat's decentralized technology and automatic versioning will improve data availability and data quality without sacrificing ease of use.

### Distributed Network

Dat goes beyond regular archiving through its *distributed network*. When you share data, Dat sends data to many download locations at once, and they can sync the same data with each other! By connecting users directly Dat transfers files faster, especially sharing on a local network. Distributed syncing allows robust global archiving for public data.

The Dat read key controls access to your data. Any data shared in the network is encrypted using your read key. Learn more about Dat's security and privacy below or in [the faqs](getting-started-faq.md). We are also investigating ways to improve [reader privacy](https://blog.datproject.org/2016/12/12/reader-privacy-on-the-p2p-web/) for public data.

### Version History

Dat automatically maintains a built-in version history whenever files are added. Dat uses this history to allow partial downloads of files, for example only getting the latest files. There are two types of versioning performed automatically by Dat. Metadata is stored in a folder called `.dat` in the main folder of a repository, and data is stored as normal files in the main folder.

Dat uses append-only registers to store version history. This means all changes are written to the end of the file, growing over time.

### Metadata Versioning

Dat acts as a one-to-one mirror of the state of a folder and all its contents. When importing files, Dat grabs the filesystem metadata for each file and checks if there is already an entry for this filename. If the file with this metadata matches exactly the newest version of the file metadata stored in Dat, then this file will be skipped (no change).

If the metadata differs or does not exist, then this new metadata entry will be appended as the new 'latest' version for this file in the append-only SLEEP metadata content register.

### Content Versioning

The metadata only tells you if or when a file is changed, not how it changed. In addition to the metadata, Dat tracks changes in the content in a similar manner.

The default storage system used in Dat stores the files as files. This has the advantage of being very straightforward for users to understand, but the downside of not storing old versions of content by default.

In contrast to other version control systems, like Git, Dat only stores the current set of files, not older versions. Git, for example, stores all previous content versions and all previous metadata versions in the `.git` folder. But Dat is designed for larger datasets.

Storing all history on content could easily fill up the users' hard drive. Dat has multiple storage modes based on usage. With Dat's dynamic storage, you can store the content history on a local external hard drive or on a remote server (or both!).

### Dat Privacy

Files shared with Dat are encrypted (using the read key) so *only* users with your unique read key can access your files. The read key acts as a kind of password meaning, generally, you should assume *anyone* with the read key will have access to your files.

The read key allows users to download, and re-share, your files, whether you intended them to have the read key or not (with some hand waiving assumptions about them being able to connect to you, which can be limited, see more in [security & privacy faq](faq#security-and-privacy)).

Make sure you are thoughtful about who you share read keys with and how. Dat ensures read key cannot be intercepted through the Dat network. If you share your read key over other channels, ensure the privacy & security matches or exceeds your data security needs. We try to limit times when Dat displays full read key to avoid accidental sharing.

### dat:// read keys

Dat read keys have some special properties that are helpful to understand.

Traditionally, http links point to a specific server, e.g. datproject.org's server, and/or a specific resource on that server. Unfortunately, links often break or the content changes without notification (this makes it impossible to cite `nytimes.com`, for example, because the link is meaningless without a reference to what content was there at citation time). Dat read keys, on the other hand, never change. You can update data in a dat and use the same link to download the changes.

Here is an example dat read key:

```
dat://ff34725120b2f3c5bd5028e4f61d14a45a22af48a7b12126d5d588becde88a93
```

What is with the weird long string of characters? Let's break it down!

**`dat://` - the protocol**

The first part of the read key is the link protocol, Dat (read about the Dat protocol at [datprotocol.com](http://www.datprotocol.com)). The protocol describes what "language" the read key is in and what type of applications can open it. You do not always need this part with Dat but it is helpful context.

**`ff34725120b2f3c5bd5028e4f61d14a45a22af48a7b12126d5d588becde88a93` - the unique identifier**

The second part of the read key is a 64-character hex strings ([ed25519 public-keys](https://ed25519.cr.yp.to/) to be precise). Each Dat archive gets a public read key to identify it. With the hex string as a read key we can do a few things:

1. Encrypt the data transfer
2. Create a persistent identifier, an ID that never changes, even as file are updated (as opposed to a checksum which is based on the file contents).

**`dat://ff34725120b2f3c5bd5028e4f61d14a45a22af48a7b12126d5d588becde88a93`**

All together, the read keys can be thought of similarly to a web URL, as a place to get content, but with some extra special properties. When you download a dat:

1. You do not have to worry about where the files are stored.
2. You can always get the latest files available.
3. You can view the version history or add version numbers to urls to get a permanent id to a specific version.

[Go here if you'd like to read more about how dat works.](https://datprotocol.github.io/how-dat-works/)

## Understanding Dat Privacy
### Can other users tell what I am downloading? 

Users only connect to other users with the same dat read key. Anyone with a dat read key can see other users that are sharing that read key and their IP addresses.

We are thinking more about how to ensure reader privacy. See [this blog post](https://blog.datproject.org/2016/12/12/reader-privacy-on-the-p2p-web/) for more discussion.

### Is data shared over Dat encrypted?

Yes, data shared over Dat is encrypted in transit using the read key (Dat read key). When you share a Dat, you must share the read key with another user so they can download it. We use that key on both ends to encrypt the data so both users can read the data but we can ensure the data is not transferred over the internet without encryption.

### Is it possible to discover read keys via man-in-the-middle?

One of the key elements of Dat privacy is that the read key is never used in any discovery network. The read key is hashed, creating the discovery key. Whenever peers attempt to connect to each other, they use the discovery key.

Data is encrypted using the read key, so it is important that this key stays secure.

### Can anyone download my data? What if I don't share the key with anyone?

Only someone with the read key can download data for Dat. It is the responsibility of the user that the Dat read key is only shared with people who should access the data. The key is never sent over the network via Dat. We do not track keys centrally. It is almost impossible for keys to overlap (and thus to guess keys).

### How can I create stronger privacy protections for my data?

As long as the read key isn't shared outside of your team, the content will be secure (though the IP addresses and discovery key may become known). You can take a few steps further to improve privacy (generally at the cost of ease of use):

1. Disable bittorrent DHT discovery (using only DNS discovery), use `--no-dht` flag in CLI.
2. Whitelist IP addresses
3. Run your own discovery servers
4. Encrypt contents before adding to dat (content is automatically encrypted in transit but this would also require decrypting after arrival).

Only some of these options can be done in the current command line tool. Feel free to PR options to make these easier to configure!

### How does Dat make sure I download the correct content?

Dat uses the concept of a [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) to make sure content is not tampered with. When content is added to a Dat we  cryptographically fingerprint it and add it to the tree. On download, we can use the tree to make sure the content has not changed and the parent hashes match.

### How does Dat help to improve transparency?

Dat uses an append-only to track changes over time. An append-only log shows all of the changes for a given Dat since it was shared. We use this for version control but it can also bolster transparency for a dataset. Any changes to a dataset will be tracked and you can see what changed and when.

### Privacy and Security Versus Bittorrent

As a peer to peer network, Dat faces similar privacy risks as Bittorrent. When you download a dataset, your IP address is exposed to the users sharing that dataset. This may lead to honeypot servers collecting IP addresses, as we've seen in Bittorrent. However, with dataset sharing we can create a web of trust model where specific institutions are trusted as primary sources for datasets, diminishing the sharing of IP addresses. [Read more](https://blog.datproject.org/2016/12/12/reader-privacy-on-the-p2p-web/) about reader privacy in the p2p web.
