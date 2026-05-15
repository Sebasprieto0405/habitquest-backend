const express = require("express");
const router = express.Router();
const categoriaController = require("../../controllers/categoriaController");

router
  .get("/", categoriaController.getAllCategorias)
  .get("/habitos/filtro", categoriaController.getHabitosFiltro)
  .put("/:catId", categoriaController.updateCategoria)
  .post("/:catId/habitos", categoriaController.addHabito)
  .put("/:catId/habitos/:habitoId", categoriaController.updateHabito)
  .delete("/:catId/habitos/:habitoId", categoriaController.deleteHabito);

module.exports = router;
