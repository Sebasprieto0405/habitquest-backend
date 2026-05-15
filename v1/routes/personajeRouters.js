const express = require("express");
const router=express.Router();
const personajeController = require("../../controllers/personajeController")

router
    .get("/",personajeController.getAllPersonajes)
    .get("/filtro",personajeController.getPersonajesFiltro)
    .post("/",personajeController.crearPersonaje)
    .delete("/:id",personajeController.eliminarPersonaje)






module.exports = router;