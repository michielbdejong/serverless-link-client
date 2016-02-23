# ![Foxbox Client](https://raw.githubusercontent.com/fxbox/app/master/app/img/icons/32.png "Foxbox Client") Foxbox Client

> A client for Foxbox

## How to build?

```bash
$ npm install
$ gulp
```

Then point your browser to [http://localhost:8000](http://localhost:8000/).

Note: The site is built in the `dist/app` folder.

## Building for Cordova

Run `npm install -g cordova` to install Cordova, and make sure you have the Android
emulator installed. Then, to build this app as a Cordova app, run:

```bash
BABELIFY=./node_modules/fxos-build/node_modules/gulp-6to5/node_modules/.bin/6to5
$BABELIFY app/components/fxos-mvc/dist/mvc.js > ./tmp
mv ./tmp app/components/fxos-mvc/dist/mvc.js
gulp build
cd dist
cordova create cordova
# rm -r cordova/www/*
# cp -r app/* cordova/www/
cd cordova
cordova plugin add https://github.com/michielbdejong/SecureHTTP.git
cordova platform add android
cordova build android
cordova emulate android
```

If the Android emulator starts but the app doesn't open, try running
`cordova emulate android` again, in a separate terminal window.
You can use Chrome's dev tools -> more tools -> inspect devices
to debug the Android emulator.
