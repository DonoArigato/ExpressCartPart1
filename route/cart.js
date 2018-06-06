"use strict";

const express = require("express");

const cartRouter = express.Router();
const cart = [{
    product: "Ice Cream",
    quanity: 3,
    price: 4,
    id: 0
  },
  {
    product: "Spinach",
    quanity: 2,
    price: 3,
    id: 1
  },
  {
    product: "Waffle Mix",
    quanity: 1,
    price: 2,
    id: 2
  },
  {
    product: "Ground Turkey",
    quanity: 2,
    price: 6,
    id: 3
  }

];
let idCount = 4;

cartRouter.get("/cart", (req, res) => {
  res.send(cart);
  console.log("GET WORKING");
});

cartRouter.post("/cart", (req, res) => {
  cart.push({

    product: req.body.product,
    quanity: req.body.quanity,
    price: req.body.price,
    id: idCount++
  });
    console.log("POST WORKING");
    res.send(cart);
});

cartRouter.delete("/cart/:id", (req, res) => {
  for (let item of cart) {
    if (item.id == req.params.id) {
      cart.splice(cart.indexOf(item), 1);
    }
  }
  console.log("DELETE WORKING");
  res.send(cart);
});

cartRouter.put("/cart/:id", (req, res) => {
  for (let item of cart) {
    if (item.id == req.params.id) {
      cart.splice(cart.indexOf(item), 1, {
        product: req.body.product,
        quanity: req.body.quanity,
        price: req.body.price,
        id: item.id
      });
    }
  }
  console.log("PUT WORKING");
  res.send(cart);
});
module.exports = cartRouter;