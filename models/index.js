const mongoose = require('mongoose'),
    dbConfig = require('../config/env.json').db;

const host = dbConfig.host || "localhost",
    port = dbConfig.port || 27017,
    user = dbConfig.user || "dev-user",
    password = dbConfig.password || "12345",
    dbName = dbConfig.name || "shortly-dev";

mongoose.Promise = global.Promise;

var lastStatusConnected = true;

const connect = () => {
    mongoose.connect(dbURL, {
        auth: {
            username: username,
            password: password
        },
        useNewUrlParser: true,
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: Number.MAX_VALUE,
        config: {
            autoIndex: false
        }
    }).catch(e => dbError(e.name, e.message))
}
const dbError = (errorName, errorMessage) => {
    if (lastStatusConnected) {
        console.log(errorName + ': ' + errorMessage);
        lastStatusConnected = false;
    }
    if (mongoose.connection.readyState == 0)
        setTimeout(() => connect(), config.retryTimeout);
}

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to Mongo');
    lastStatusConnected = true;
})
db.on('reconnected', () => {
    console.log('Reconnected to Mongo');
    lastStatusConnected = true;
})

connect();

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection disconnected through app termination');
    });
});

module.exports = db;




module.exports = {
    urlShortcodeMapping: require('./urlShortcodeMapping')
};