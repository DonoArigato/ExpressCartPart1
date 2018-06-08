"use strict";

const express = require("express");
const pg = require("pg");
const pool = require("../pg-connection-pool")
const cartRouter = express.Router();



cartRouter.get("/cart", (req, res) => {
  pool.query('SELECT * FROM shoppingCart')
    .then(result => {
      res.send(result.rows)
    })
    .catch(error => {
      res.send(error)
    })
  console.log("GET WORKING");
});

cartRouter.post("/cart", (req, res) => {
  let sql = "INSERT INTO shoppingCart (product, price, quantity)" +
  "values($1::text, $2::int, $3::int);"
  let values = [req.body.product, req.body.price, req.body.quantity];
  pool.query(sql, values)
    .then(result =>{
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(error => {
      res.send(error);
    })

});


cartRouter.delete("/cart/:id", (req, res) => { 
  pool.query("DELETE FROM shoppingCart WHERE id=$1::int",[req.params.id]).then(() => { 
    pool.query("SELECT * FROM shoppingCart ORDER BY id").then((result) => { 
      res.send(result.rows);
      console.log("DELETE WORKING");
      
  });
});

});

cartRouter.put("/cart/:id", (req, res) => {
 pool.query("UPDATE shoppingCart SET product=$1::text,price=$2::int,quantity=$3::int WHERE id=$4::int",
 [req.body.product,req.body.price,req.body.quantity,req.params.id]).then(()=> {
      pool.query("SELECT * FROM shoppingCart ORDER BY id").then((result)=> {
        res.send(result.rows);
      });
    });
  });
     
    
  console.log("PUT WORKING");
  

module.exports = cartRouter;

