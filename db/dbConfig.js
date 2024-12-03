const pgp = require("pg-promise");
require("dotenv").config();

const {PG_HOST, PG_USER, PG_PORT, PG_DATABASE} = process.env;

// const PG_HOST = process.env.PG_HOST

const cn = {
    host: PG_HOST,
    user: PG_USER,
    port: PG_PORT,
    database: PG_DATABASE
}
// the connection object connects our server to the database so that it can request and receive the data the client is requesting

const db = pgp(cn);

module.exports = db;

