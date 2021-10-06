# bank-app-demo-api

Bank App Demo API is a lightweight mock server which runs Express.JS / Node.JS to allow a simple database query to a MongoDB cloud database.

## Installation

Clone the project to your machine. Open the folder in your terminal and run the Node command 'npm install'. 

```bash
npm install
```

Once the packages are done installing, run 'npm start'. 

```bash
npm start
```

The Express server continually runs via the nodemon library. If you would like to end the program, close your terminal or run 'killall -9 node' from elsewhere.

```bash
killall -9 node
```

## Usage

This mock server allows a user to request account information from a MongoDB cloud database, via the endpoint '/accounts/read'. It is meant to be run in tandem with the project [bank-app-demo-ui](https://github.com/S78901/bank-app-demo-ui).

When using the mock server to access the accounts for the demo UI, please initialize the mock server first (or the UI will not have any data to load).

## License
[MIT](https://choosealicense.com/licenses/mit/)