#This file is a debug build for running app directly on your phone. Phone must be plugged in!
export PATH="$PATH:/Users/stefaniecohen/Library/Android/bin/gradle-6.7.1/bin"
export ANDROID_SDK_ROOT=/Users/stefaniecohen/Library/Android/sdk
rm -rf dist #deletes entire dist folder to clean out old files
npm run build #build app which puts updated files into new dist folder
rm -rf cordova/www/* #deletes contents of www folder to clean out old files
cp -R dist/ cordova/www/ #copies files recursively from dist folder to www folder
cd cordova #change directory to cordova
cordova run android #build and run!
