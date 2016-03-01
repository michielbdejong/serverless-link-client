# ![Foxbox Client](https://raw.githubusercontent.com/fxbox/app/master/app/img/icons/32.png "Foxbox Client") Foxbox Client

> A client for Foxbox

## Prerequisites

Assuming you have git and [nvm](http://nvm.sh/) installed, clone this repo:

```bash
git clone https://github.com/fxbox/app
cd app
```

And then run:

```bash
$ nvm install v4.2.2
$ nvm use v4.2.2
$ npm install -g gulp
```

## How to build?

```bash
$ npm install
$ git checkout -- gulpfile.js
$ gulp
```

Then point your browser to [http://localhost:8000](http://localhost:8000/).

Note: The site is built in the `dist/app` folder.

## Building for Cordova

Run `npm install -g cordova` to install Cordova, and make sure you have either
an Android device connected over the Android Derbugging Bridge, or have the
Android emulator installed. Then, to build this app as a Cordova app, run:

```bash
gulp cordova-setup
gulp cordova-android
```

If the Android emulator starts but the app doesn't open, you can hit `^C` and
run `cordova emulate android` again.

You can use Chrome's dev tools -> more tools -> inspect devices
to debug the Android emulator.

To update for instance the SecureHTTP plugin from a local repo checkout
(`/Users/Michiel/repos/SecureHTTP` in my case), you can do:

```bash
cd dist/cordova/
cordova plugin remove com.synconset.cordovaHTTP
cordova plugin add /Users/Michiel/repos/SecureHTTP
cordova run android
```
