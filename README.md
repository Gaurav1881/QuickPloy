# QuickPloy

## Setup Instructions
for full instructions read here: https://reactnative.dev/docs/getting-started

### Setup on Windows with Android Emulator
1) install node, python2, JDK with a package install of your choice
2) install Android Studio and it will come with the latest version on android however we want Android Pie (Version 28).
in the SDK Manager install Android Pie, make sure to install the version that does not have Google Play, (may have to click more images tab)
3) create a virtual device and select Android Pie to run on it 
4) make sure your enviromental paths are set for "ANDROID_SDK_ROOT" and/or "ANDROID_HOME". (The SDK path can be found at the top of SDK manager
settings in android studio, usually in user/<name>/AppData/Local/Android/Sdk)
5) git clone this repository 
6) run: $ react-native run-android
