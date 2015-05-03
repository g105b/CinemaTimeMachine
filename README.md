# Cinema Time Machine

## What is this?

This is The Superteam's entry to [Hack24 2015](h24-web). We're making an interactive story of cinema to celebrate Broadway Cinema's 25 year anniversary.

We decided to approach this project by developing a visual installation, intended to be displayed in public areas wihtin the cinema, while adding SMS interactivity via Esendex APIs for that extra bit of texty goodness. 

In its default state the installation displays images from the last quarter century of cinema mixed in with scanned covers from Broadway programmes published since 1990. The images are shown in a lovely grid. Every 30 seconds a film fact is dsplayed as a prompt to encourage viewers to text the name of their favourite film and a short message. The submitted films titles are shown full screen along with the film's poster which is pulled from the Open Movie Database using their API.

What makes this project awesome is that even without interactivity, it provides an interesting visual backdrop that can remind people of how great the last 25 years of film culture has been. But! When you allow people to share their favourite films with the room, well... then you have something truly magical.

## This is pretty good, but what else would we do in t'future?

For version 2 we'd like to add interesting facts about the films people share such as revenue generated, critics ratings and so on. Perhaps allow people to submit names of film stars too because, why not eh?

## Who made it?

<a target="_blank" href="http://twitter.com/clarkcx"><img src="https://pbs.twimg.com/profile_images/581455432830550016/7AKXlqoE.jpg" width=128 /></a>
<a target="_blank" href="http://twitter.com/littlehelli"><img src="https://pbs.twimg.com/profile_images/594251815409033217/l3weUs9d.jpg" width=128 /></a>
<a target="_blank" href="http://twitter.com/g105b"><img src="https://pbs.twimg.com/profile_images/542405561887649792/phT0XVks.jpeg" width=128 /></a>

## The concept

The brief was to celebrate Broadway's 25 years of cinema, and produce something sharable. The concept is to create an intereactive film documenting cinema through the individual years. Additional culture references such as music, video games, fashion and world events will be included to give context to the films and years. The film could be projected into the cafe bar and other areas of the Broadway cinema and online. The film will allow use of specific hastags so people can interact with the screen by texting and tweeting in their stories relating to what they see on the screen. In addition to the film, there will be a well-populated Twitter stream that people can follow.

[h24-web]: http://www.hack24.co.uk/

## Installing for local development

### System requirements

+ PHP, version 5.5 or higher.
+ Node, version 0.10 or higher.
+ Node Package Manager (NPM)
+ NPM package Bower, version 1.4.1 or higher.
+ NPM package bower-installer, version 1.2.0 or higher.

Node and NPM can be installed without root permissions, and multiple versions managed using [Node Version Manager (NVM)][nvm-website].

### Installation process

1. Download project source code either using git (`git clone http://github.com:BrightFlair/www.brightflair.com`), Github for Mac/Windows, or as a zip/tarball download (http://github.com/BrightFlair/www.brightflair.com/tarball/master or http://github.com/BrightFlair/www.brightflair.com/zipfile/master).
2. Navigate to the project's directory (the git repository, or the extracted archive directory) and [Get Composer][get-composer] using `php -r "readfile('https://getcomposer.org/installer');" | php`.
3. Install all server-side dependencies using `./composer.phar install`.
4. Install `bower` and `bower-installer` Node packages (`npm install -g bower bower-installer`).
5. Install all client-side dependencies by running `bower-installer`.
6. Serve the project at [http://localhost:8080](http://localhost:8080) running `./vendor/bin/serve`, et voila!

## Web log(s)

### 12:00 - 13:00: Ideas generation

Because we like to live life very much 'on the edge' we had not formed a clear plan for the day in advance of arrival. This being the case we took the first hour to brainstorm, mind map, and generally come up with something un-rubbish to work on. We thought of potential projects based around a few of the briefs before settling on a hack that would answer both the Esendex and Broadway briefs simultaneously.

### 13:00 - 14:00: Planning

We thought it would be a good idea to look at the tech requirements early on so signed up for an Esendex developer account and had a quick play with the API which was, as promised, very simple to use. Hoorary! I also drew a happy tree on a postit note as I wasn't really sure what I was meant to be doing. Greg installed things from 'the internet'.

### 14:00 - 15:00: Lunch

Healthy-yet-nice food was provided in the Mezzanine bar. There were chicken things, greek salad, samosas and olives. Also there were nice fruit flavoured drinks available in plastic cups.

### 15:00 - 16:00: Getting down to business

Greg installed more things from 'the internet'. Packages and so forth. Helen told me (Pete) to do something useful so I started documenting our process which you are now reading here. Greg is currently (15:24) making a auto-updating loop which will instanltly display any SMS sent to our virtual mobile number on screen. This is surprisingly exciting to everyone in the team.

Next we met with the Mathew Trivett from Broadway to see if they had any visual materials from the past which we could integrate into our project to provide context. He mentioned some old photos including one of Quentin Tarantino when he came to the Broadway for the unofficial UK premier of Pulp Fiction. (But he wasn't totes sure where it was.)

### 16:00 - 17:00: Back to Superteam HQ

We decided to return to Derby so that we could work on computers with real-sized screens. We continued to brainstorm ideas and sketch out wireframes while on the shuddery bus.

### 17:00 - 21:30: First visualisations

We used this time to pull together images and start getting things working onscreen. We discussed ideas for possible features but tried to keep everything MVP for fear of 'shooting for the stars only to get stuck in the treetops'. If that's not a real expression I suggest that it become one.

### 21:30 - 06:30: Recouperation

We decided to allow ourselves the briefest of nine hour breaks to have a beer and a sleep. It's important to not go mad while hacking.

### 06:30 - 09:30: Refinement of prototype and content generation

Back at the Derby office we continued work by writing code, finding more required imagery and getting text content sorted. This thing was really starting to take shape now!
