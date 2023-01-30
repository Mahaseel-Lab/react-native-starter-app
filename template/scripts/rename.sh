#!/bin/bash

set -e

APP_NAME="newtest"
ANDROID_PACAKGE_NAME="com.test.newtest"
BASE_ANDROID_PACAKGE_NAME="com.starter.test"
BASE_ANDROID_PACAKGE_DIR="com/starter/test"
BASE_FOLDER="com/starter"

# Change App Name
sed -i -e "s/displayName\": \"starter\"/displayName\": \"$APP_NAME\"/" app.json
sed -i -e "s/name\": \"starter\"/name\": \"$APP_NAME\"/" app.json
sed -i -e "s/name\": \"starter\"/name\": \"$APP_NAME\"/" package.json
sed -i -e "s/app_name\">starter</app_name\">$APP_NAME</" android/app/src/main/res/values/strings.xml
sed -i -e "s/rootProject.name = 'starter'/rootProject.name = '$APP_NAME'/" android/settings.gradle
sed -i -e "s/namespace \"com.starter.test\"/namespace \"$ANDROID_PACAKGE_NAME\"/" android/app/build.gradle
sed -i -e "s/applicationId \"com.starter.test\"/applicationId \"$ANDROID_PACAKGE_NAME\"/" android/app/build.gradle


IFS='.' read -ra DIRARR <<< "$ANDROID_PACAKGE_NAME"
NEW_MAIN_DIR=$(IFS='/'; echo "${DIRARR[*]}")

echo "android/app/src/main/java/$NEW_MAIN_DIR"
mkdir -p "android/app/src/main/java/$NEW_MAIN_DIR"
mv "./android/app/src/main/java/$BASE_ANDROID_PACAKGE_DIR/MainActivity.java" "./android/app/src/main/java/$NEW_MAIN_DIR/MainActivity.java"
mv "./android/app/src/main/java/$BASE_ANDROID_PACAKGE_DIR/MainApplication.java" "./android/app/src/main/java/$NEW_MAIN_DIR/MainApplication.java"
sed -i -e "s/$BASE_ANDROID_PACAKGE_NAME/$ANDROID_PACAKGE_NAME/" "android/app/src/main/java/$NEW_MAIN_DIR/MainActivity.java"
sed -i -e "s/$BASE_ANDROID_PACAKGE_NAME/$ANDROID_PACAKGE_NAME/" "android/app/src/main/java/$NEW_MAIN_DIR/MainApplication.java"
rm -r "android/app/src/main/java/$BASE_FOLDER"
