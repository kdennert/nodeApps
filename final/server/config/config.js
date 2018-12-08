var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: { name: 'final' },
        port: 5000,
        db: 'mongodb://127.0.0.1/final-dev',
        secret: "supercalafragilistic"

    },

    test: {
        root: rootPath,
        app: { name: 'final' },
        port: 4000,
        db: 'mongodb://127.0.0.1/final-test',
        secret: "supercalafragilistic"

    },

    production: {
        root: rootPath,
        app: { name: 'final' },
        port: 80,
        db: 'mongodb://127.0.0.1/final',
        secret: "supercalafragilistic"

    }
};

module.exports = config[env];
