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
$ nvm install 0.11.4
$ nvm use 0.11.4
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

Run `npm install -g cordova` to install Cordova, and make sure you have the Android
emulator installed. Then, to build this app as a Cordova app, run:

```bash
gulp build
cd dist
cordova create cordova
rm -r cordova/www/*
cp -r app/* cordova/www/
rm cordova/www/cordova.js
cd cordova
cordova plugin add https://github.com/michielbdejong/SecureHTTP.git
cordova platform add android
cordova build android
cordova emulate android
```

If the Android emulator starts but the app doesn't open, you can hit `^C` and
run `cordova emulate android` again.

You can use Chrome's dev tools -> more tools -> inspect devices
to debug the Android emulator, and for instance run:
```js
cordovaHTTP.acceptHss(true, function() {
  console.log('success!');
  cordovaHTTP.get('https://PxwGLFxy1x0hxgIVZ7cKFN0eE9kcFjmxCQ1kftXs6aw.michielbdejong.com:12346/', {
  }, { }, function(response) {
    console.log(response.hssReport);
    console.log(response.status);
  }, function(response) {
    console.log(response.hssReport);
    console.error(response.error);
  });
}, function(e) {
  console.log('error :(', e);
});

cordovaHTTP.get('https://PxwGLFxy1x0hxgIVZ7cKFN0eE9kcFjmxCQ1kftXs6aw.michielbdejong.com:12346/', {
}, { }, function(response) {
  console.log(response.hssReport);
  console.log(response.status);
}, function(response) {
  console.log(response.hssReport);
  console.error(response.error);
});

cordovaHTTP.acceptHss(true, function() {
  console.log('success!');
}, function(e) {
  console.log('error :(', e);
});

cordovaHTTP.acceptAllCerts(true, function() {
  console.log('success!');
}, function(e) {
  console.log('error :(', e);
});
```
To update for instance the SecureHTTP plugin from a local repo checkout
(`/Users/Michiel/repos/SecureHTTP` in my case), you can do:

```bash
cd dist/cordova/
cordova plugin remove com.synconset.cordovaHTTP ; cordova plugin add /Users/Michiel/repos/SecureHTTP ; cordova emulate android
```
