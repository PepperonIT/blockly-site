# Installation of NodeJS
Generally speaking, NodeJS have binaries for all popular operating systems and installation wizards for them. If you want to install via command line, it is assumed that you know how to use your operating systems packet manager and that you have [curl](https://curl.se/) installed if you want to install via NodeSource PPA.

Binaries for installing NodeJS can be found [here](https://nodejs.org/en/download/).

## Linux/Debian

A tutorial for the installation of NodeJS can be found [here](https://phoenixnap.com/kb/debian-install-nodejs).

### Check if installed
Before trying to install, check if you have NodeJS (with npm) already installed by running these commands:
```
node -v
```
and 
```
npm -v
```
We expect both commands to output a version number, important is that NodeJS is version 16.13 or newer for the system to run properly. If NodeJS is already installed it should look like this:
```
user@user:~$ node -v
v16.13.0
user@user:~$ npm -v
8.1.0
```

### Uninstall
Uninstall command, use to uninstall before reinstalling newer version if needed. 
```
sudo apt-get remove nodejs
```
Stackoverflow answers on how to investigate if this command does not work.
[link](https://stackoverflow.com/questions/5650169/uninstall-node-js-using-linux-command-line)

### Install
To install NodeJS (and npm), run the following:
```
sudo apt update
sudo apt upgrade
sudo apt install nodejs npm -y
```

Then verify the installation by redoing the "Check if installed" steps in this md-file.



## Windows
### Check if installed
Before trying to install, check if you have NodeJS (with npm) already installed by opening CMD and running
```
node -v
```
and 
```
npm -v
```
We expect both commands to output a version number, important is that NodeJS is version 16.13 or newer if we don't want to upgrade. See image below for example output.

![expected node version output](https://user-images.githubusercontent.com/24481978/200522808-b5833232-6ce5-4a75-806a-74037d3cc316.png)

### Uninstall
If the version of NodeJS is to old, you can upgrade the version by going to your _Control panel_ -> _Programs_ -> _Uninstall a program_ and then find "Node.js" in the list. Right-click and press uninstall, follow the uninistall wizard until finished. Test that you have uninstalled node by running
```
node -v
```
and 
```
npm -v
```
again, now the output should be something along "'node' is not recognized as an internal or external command, operable program or batch file".

### Install
Go to the [NodeJS download page](https://nodejs.org/en/download/) and download the version of NodeJS that you want, recommended to use version 16.13 or later. Follow the installation wizard and a successful install will result in both NodeJS and NPM (Node Packet Manager) being installed.