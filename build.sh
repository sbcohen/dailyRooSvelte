rm -rf dist #deletes entire dist folder to clean out old files
npm run build #build app which puts updated files into new dist folder
rm -rf cordova/www/* #deletes contents of www folder to clean out old files
cp -R dist/ cordova/www/ #copies files recursively from dist folder to www folder
cd cordova #change directory to cordova
cordova run android #build and run!
