# Blockly app for Pepper programming
A webpage with an Blockly editor made for programming Pepper.

# tools / installation
The critical tools and frameworks for this system are Node.js, React.js and Blockly. 

> [Node.js (with npm)](docs/tools/node.md)

Is required to run Blockly in an smooth and interactive way, recommended runtime environment when developing a Blockly app.

> [Blockly](docs/tools/blockly.md) (will be installed automatically via `npm i`)

Open source and easy to setup blockprogramming interface. Most popular and therefore might be familiar for the users as well.

> [React.js](docs/tools/react.md) (will be installed automatically via `npm i`)

Gives more options in the future. for instance, the abiality to convert to a mobile app with less work then an entire rewrite of the system.

> [Axios](docs/tools/axios.md) (will be installed automatically via `npm i`)

Some kind of HTTP handling is required and Axios had a simplistic design which is enough for the kind of HTTP messages we will send to the Block server.

# Usage
In order to start your own development setup and use the program on your own PC, you must:
- Install Node.js (version 16.13 or newer recommended).
- Install NPM (version 8.1.0 or newer recommended).
- Clone this repo.
- Run `npm i` in the root folder of the cloned repo.
- If there is a critical depency error, run `npm audit fix --force` 
- Run `npm start` to run the app in development mode.
  
More information about how to run the app in different modes and build it for production can be found [here](docs/react-info.md)

This program is used to program Pepper via a Blockly website, Blockly is a blockprogramming interface which enables people who don't know syntax to create their own programs.

## Examples
Image of the blockprogramming interface:

![image](https://user-images.githubusercontent.com/24481978/200537017-eb156b43-8c34-4370-9a22-4e8583965c51.png)

Image of the toolbox menu with the available blocks:

![image](https://user-images.githubusercontent.com/24481978/200537118-970e4d87-7911-4423-b8c1-0326305739c4.png)

Example program which make Pepper say "Hej!" and shake her head 10 times:

![image](https://user-images.githubusercontent.com/24481978/200537401-4ab11872-0308-4e46-a1f2-47f7ecaaef12.png)

# License
[License](https://www.apache.org/licenses/LICENSE-2.0)
