# ![Serverless Project Link app](https://raw.githubusercontent.com/fxbox/app/master/app/img/icons/32.png "Project Link app") Serverless Project Link app

[![License](https://img.shields.io/badge/license-MPL2-blue.svg)](https://raw.githubusercontent.com/fxbox/app/master/LICENSE)

> A serverless app for [Project Link](https://wiki.mozilla.org/Project_Link)

## Warning: Still under development

## Rationale

Mozilla offers [a centrally hosted app](https://github.com/fxbox/app) to
interact with a Project Link box. Its advantage is that it has a web interface
which you can access using any browser.

Its disadvantages, as with any Software-as-a-Service application, are that some
user data is leaked to the cloud when you use it, and if Mozilla decides to stop
hosting this central service, all Project Link boxes around the world will
instantly become inaccessible through this app.

Admittedly, many things we do with our laptops and phones (like DNS queries and
unencrypted emails) leak a lot more specific user data to the cloud, and if
Mozilla stops hosting their Project Link app, you could take its source code and
ask a tech-savvy friend to host it for you.

Still, I think it's good if an alternative, serverless client app exists, which
is this one.

## Support

Currently, only Android is supported.

## Prerequisites

Assuming you have git and [nvm](http://nvm.sh/) installed, clone this repo:

```bash
$ git clone https://github.com/michielbdejong/serverless-link-client
$ cd serverless-link-client
```

And then run:

```bash
$ nvm install v4.2.2
$ nvm use v4.2.2
$ npm install -g gulp
$ npm install
$ npm install -g cordova
```

## How to build?

```bash
$ gulp build
$ gulp cordova-setup
$ gulp cordova-android
```

Make sure you have either an Android device connected over the Android Debugging Bridge, or have the Android emulator installed.

If the Android emulator starts but the app doesn't open, you can hit ^C and run cd dist/cordova ; cordova emulate android again. Make sure you unlock the lockscreen.

You can use Chrome's dev tools -> more tools -> inspect devices to debug the Android emulator.

For local development of the SecureHTTP plugin, you can do:

```bash
$ cd dist/cordova/
$ cordova plugin remove com.synconset.cordovaHTTP
$ cordova plugin add /path/to/local/SecureHTTP
$ cordova run android
```
