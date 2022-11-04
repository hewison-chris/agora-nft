const cassandra = require("cassandra-driver");

const client = new cassandra.Client({
    credentials: { username: process.env.CASSANDRA_USERNAME, password: process.env.CASSANDRA_PASSWORD },
    contactPoints: [process.env.CASSANDRA_HOST],
    keyspace: 'store'
});

// Exit on unhandledRejection
process.on('unhandledRejection', (reason) => { throw reason; });

module.exports = client;