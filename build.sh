#!/bin/sh

quasar build -m cordova -T android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore reunion.keystore ./src-cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk  reunion_alias
rm ./Reunion.apk
$ANDROID_SDK_ROOT/build-tools/28.0.3/zipalign -v 4 ./src-cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./Reunion.apk
