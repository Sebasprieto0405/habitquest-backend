const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const personajeRouter = require("./v1/routes/personajeRouters");
const categoriaRouter = require("./v1/routes/categoriaRouters");


dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1/personajes", personajeRouter);
app.use("/api/v1/categorias", categoriaRouter);

module.exports = app;