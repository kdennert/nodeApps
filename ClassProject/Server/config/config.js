var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: { name: 'ClassProject' },
        port: 5000,
        db: 'mongodb://127.0.0.1/helpMe-dev',
        secret: "supercalafragilistic",
        uploads: './public/uploadedFiles'

    },

    test: {
        root: rootPath,
        app: { name: 'ClassProject' },
        port: 4000,
        db: 'mongodb://127.0.0.1/helpMe-test',
        secret: "supercalafragilistic",
        uploads: './public/uploadedFiles'

    },

    production: {
        root: rootPath,
        app: { name: 'ClassProject' },
        port: 80,
        db: 'mongodb://127.0.0.1/helpMe',
        secret: "supercalafragilistic",
        uploads: './public/uploadedFiles'

    }
};

module.exports = config[env];
