const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = require("./app");

const mongoose = require("mongoose");
const seedCategorias = require("./seed");

dotenv.config();


app.listen(process.env.PORT, function(){
  console.log("CONECTADO AL PUERTO: " + process.env.PORT);
});


const connection = mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.BBDD_NAME
});

connection
.then(async function(){
    console.log("CONECTADO A LA BBDD");
    await seedCategorias();
})
.catch(function(err){
    console.log("ERROR EN LA CONEXIÓN: " + err);
});

