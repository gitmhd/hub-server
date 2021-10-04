# Hub-Server

A lightweight server for serving files to a browser.

## Features

`Hub-Server` is depedencies hassle-free, following are some other features.

-  Lightweight only 3KB (core server).
-  Easy to install.
-  Easy to use.
-  High performance.
-  Has CLI option.
-  Speed in resolving requests.
-  Can serve more than 800 type of files.

## Installation

You can install `Hub-Server` easily using the following command:

```
npm install hub-server --save
```

or:

```
npm install -g hub-server --save
```

## Usage

You can use `Hub-Server` through two ways.

### 1) As a module

First, require the module:

```javascript
const HubServer = require("hub-server");
```

Next, make an instance using `new` keyword:

```javascript
let server = new HubServer();
```

Next, use the `serve()` method to pass the port you want to connect through:

```javascript
server.serve(5000);
```

| Method  | Params                          |
| ------- | ------------------------------- |
| serve() | **port:** Accepts number value. |

#### **`assets()` method:**

It's optional, uses to tell `Hub-Server` where should search for the assets.

```javascript
server.assets("public");
```

Here you told `Hub-Server` to search for the assets in the `public` folder.

| Method   | Params                                                             |
| -------- | ------------------------------------------------------------------ |
| assets() | **path**: Accepts a string value that represents a name of folder. |

### 2) As CLI tool

First, make sure you installed `Hub-Server` following the `-g` flag.

Next, open Terminal and go to the directory where your project is located and run the following command.

```
hub-server port=3000
```

| Argument | Value                                                                |
| -------- | -------------------------------------------------------------------- |
| port     | Accepts a number as a value of the port that should connect through. |

#### **`assets` argument:**

It's optional, uses to tell `Hub-Server` where should search for the assets.

```
hub-server port=3000 assets=public
```

Here you told `Hub-Server` to search for the assets in the public folder.

| Argument | Value                                                    |
| -------- | -------------------------------------------------------- |
| assets   | Accepts a string value that represents a name of folder. |

## Support

Thank you for using `Hub-Server`, if you experienced any issue during usage, feel free to describe it [here](https://github.com/gitmhd/hub-server/issues).
