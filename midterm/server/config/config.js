var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: { name: 'midterm' },
        port: 3300,
        db: 'mongodb://127.0.0.1/helpMe-dev'
    },

    test: {
        root: rootPath,
        app: { name: 'midterm' },
        port: 4000,
        db: 'mongodb://127.0.0.1/helpMe-test'
    },

    production: {
        root: rootPath,
        app: { name: 'midterm' },
        port: 80,
        db: 'mongodb://127.0.0.1/helpMe'
    }
};

module.exports = config[env];
