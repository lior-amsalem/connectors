## Database Connectors

> Nodejs unify database connectors

[![npm package](https://badge.fury.io/js/%40lior-a%2Fconnectors.svg)](https://www.npmjs.com/package/connectors)
[![issues](https://img.shields.io/github/issues/lior-a/connectors.svg)](https://github.com/lior-a/connectors/issues)
[![pull requests](https://img.shields.io/github/issues-pr/lior-a/connectors.svg)](https://github.com/lior-a/connectors/pulls)
[![bitHound Overall Score](https://www.bithound.io/github/lior-a/connectors/badges/score.svg)](https://www.bithound.io/github/lior-a/connectors)
[![bitHound Code](https://www.bithound.io/github/lior-a/connectors/badges/code.svg)](https://www.bithound.io/github/lior-a/connectors)

# How to

```
npm install connectors
```
```
// define array of connection info
let database = [
    {
        connector_name: 'mongoose',
        host: '127.0.0.1',
        port: '27017',
        db_name: 'db_test'
    }
];

// require somewhere globally during application start/setup/init
require('connectors').init(database);

/// and use like that in your model:
const {mongoose} = require('connectors');
```

# Settings Configuration Example
```
const settings = [
    {
        connector_name: 'mongoose',
        host: 'localhost',
        port: '',
        db_name: ''
    },
    {
        connector_name: 'mysql',
        host: 'localhost',
        port: '',
        db_name: ''
    }
];
```

TODO:
1. support multi connection ot the same db