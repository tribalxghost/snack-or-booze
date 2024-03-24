/** Database setup for jobly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

if (process.env.NODE_ENV === "production") {
    client = new Client({
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "Christopher#0160",
      database: `${DB_URI}`,
      ssl: {
        rejectUnauthorized: false
      }
    });
  } else {
    client = new Client({
      host: "localhost",
      user: "postgres",
      port: 5432,
      password: "Christopher#0160",
      database: `${DB_URI}`,
    });
  }
client.connect();

module.exports = client;
