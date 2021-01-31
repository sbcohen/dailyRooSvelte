#this file is the release build script for the terminal. It does stuff so you don't have to.
export PATH="$PATH:/Users/stefaniecohen/Library/Android/bin/gradle-6.7.1/bin"
export ANDROID_SDK_ROOT=/Users/stefaniecohen/Library/Android/sdk
rm -rf dist #deletes entire dist folder to clean out old files
npm run build #build app which puts updated files into new dist folder
rm -rf cordova/www/* #deletes contents of www folder to clean out old files
cp -R dist/ cordova/www/ #copies files recursively from dist folder to www folder
cd cordova #change directory to cordova

#keytool -genkey -v -keystore daily-roo.keystore -alias daily_roo -keyalg RSA -keysize 2048 -validity 10000
#keystore password: Nick+Stef+Steakhouse

cordova build android --release -- --keystore=daily-roo.keystore --storePassword=Nick+Stef+Steakhouse --alias=daily_roo --password=Nick+Stef+Steakhouse #signed build delivered (build and run)
open platforms/android/app/build/outputs/apk/release #opens folder where file is built