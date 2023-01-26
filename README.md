# Blockly app for Pepper programming
A webpage with an Blockly editor made for programming Pepper.

# tools / installation
The critical tools and frameworks for this system are Node.js, React.js and Blockly. 

> [Node.js (with npm)](docs/tools/node.md)

Is required to run Blockly in an smooth and interactive way, recommended runtime environment when developing a Blockly app.

> [Blockly](https://developers.google.com/blockly) (will be installed automatically via `npm i`)

Open source and easy to setup blockprogramming interface. Most popular and therefore might be familiar for the users as well.

> [React.js](https://reactjs.org/) (will be installed automatically via `npm i`)

Gives more options in the future. for instance, the abiality to convert to a mobile app with less work then an entire rewrite of the system.

> [Axios](https://axios-http.com/docs/intro) (will be installed automatically via `npm i`)

Some kind of HTTP handling is required and Axios had a simplistic design which is enough for the kind of HTTP messages we will send to the Block server.

> [Universal-cookie](https://www.npmjs.com/package/universal-cookie) (will be installed automatically via `npm i`)

The website uses cookies to store user preferences and settings.

# Usage
## Prerequisites
Create a file called `.env` in the root directory of the project. It should contain these attributes:

```
REACT_APP_SERVER_IP="[Your local ip address]"
REACT_APP_SERVER_PORT=5000
REACT_APP_ADMIN_NICKNAME="[Your chosen admin username]"
REACT_APP_ADMIN_PW="[Your chosen admin password]"
```

If you are running the server on another port than 5000, change `REACT_APP_SERVER_PORT` accordingly.

### Development mode
In order to start your own development setup and use the program on your own PC, you must:
- Install Node.js (version 16.13 or newer recommended).
- Install NPM (version 8.1.0 or newer recommended).
- Clone this repo.
- Run `npm i` in the root folder of the cloned repo, it is named `blockly-site` as default.
- Run `npm start` in the same folder to run the app in development mode.

### Production mode
If you have chosen another port than 3000 for the website (3000 is standard in react) you have to change the port in the docker-compose.yml file to be able to connect to the docker container. After that, make sure that the `Dockerfile` exposes the same ports as you have chosen, 3000 is the default.

To run the website in docker you can use the following command:

```sh
docker compose up --build
```

or if you don't want to use compose, you will need to build the docker image first. To build the docker image you can use the following command:

```sh
docker build . -t blockly-site \
    --build-arg REACT_APP_SERVER_IP="[Your local ip address]" \
    --build-arg REACT_APP_SERVER_PORT=5000 \
    --build-arg REACT_APP_ADMIN_NICKNAME="[Your chosen admin username]" \
    --build-arg REACT_APP_ADMIN_PW="[Your chosen admin password]"
```

Remember to change the arguments to match your setup. Then you can run the docker image with the following command:

```
docker run -p 3000:3000 -d blockly-site
```

More information about how to run the app in different modes and build it for production can be found [here](docs/react-info.md)

This software is used to program Pepper via a Blockly website, Blockly is a graphical programming interface which enables people who don't know text-based syntax to create their own programs.

## Examples
Image of the programming interface:

![image](https://user-images.githubusercontent.com/24481978/200537017-eb156b43-8c34-4370-9a22-4e8583965c51.png)

Image of the toolbox menu with the available blocks:

![image](https://user-images.githubusercontent.com/24481978/200537118-970e4d87-7911-4423-b8c1-0326305739c4.png)

Example program which make Pepper say "Hej!" and shake her head 10 times:

![image](https://user-images.githubusercontent.com/24481978/200537401-4ab11872-0308-4e46-a1f2-47f7ecaaef12.png)

# License
[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
