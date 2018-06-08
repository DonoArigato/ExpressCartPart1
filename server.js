"use strict";

const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
const cart = require("./route/cart");


app.use(bodyParser.json());
app.use("/portal",cart);
app.use(express.static(__dirname+ "/public"));


let port = 5000;

app.listen(port,() => {
    console.log(`Server listening on ${port}.`);
});




