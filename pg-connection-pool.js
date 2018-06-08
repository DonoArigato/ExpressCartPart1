"use strict";

"use strict";
const pg = require("pg");

const pool = new pg.Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    // DONT FORGET TO CHANGE YOUR NAME
    database: "ExpressShopDB",
    ssl: false
});

module.exports = pool;