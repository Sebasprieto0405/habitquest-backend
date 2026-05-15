const mongoose = require("mongoose");
require("../models/CategoriaSchema.js");
const Categoria = mongoose.model("Categoria");

const getAllCategorias = async () => Categoria.find().lean();

const addHabito = async (catId, habito) => {
  return Categoria.findOneAndUpdate(
    { id: catId },
    { $push: { habitos: habito } },
    { new: true, lean: true }
  );
};

const updateHabito = async (catId, habitoId, data) => {
  const setFields = {};
  for (const [key, val] of Object.entries(data)) {
    setFields[`habitos.$.${key}`] = val;
  }
  return Categoria.findOneAndUpdate(
    { id: catId, "habitos.id": habitoId },
    { $set: setFields },
    { new: true, lean: true }
  );
};

const deleteHabito = async (catId, habitoId) => {
  return Categoria.findOneAndUpdate(
    { id: catId },
    { $pull: { habitos: { id: habitoId } } },
    { new: true, lean: true }
  );
};

const getHabitosFiltro = async (queryParams) => {
  const categorias = await Categoria.find().lean();
  let habitos = categorias.flatMap(c =>
    c.habitos.map(h => ({ ...h, espirituTitulo: c.titulo, espirituId: c.id }))
  );

  if (queryParams.nombre) {
    const regex = new RegExp(queryParams.nombre, "i");
    habitos = habitos.filter(h => regex.test(h.nombre));
  }
  if (queryParams.espiritu) {
    const regex = new RegExp(queryParams.espiritu, "i");
    habitos = habitos.filter(h => regex.test(h.espirituTitulo));
  }
  if (queryParams.rachaMin) {
    habitos = habitos.filter(h => h.racha >= Number(queryParams.rachaMin));
  }
  if (queryParams.rachaMax) {
    habitos = habitos.filter(h => h.racha <= Number(queryParams.rachaMax));
  }

  return habitos;
};

const updateCategoria = async (catId, data) => {
  const setFields = {};
  for (const [key, val] of Object.entries(data)) {
    setFields[key] = val;
  }
  return Categoria.findOneAndUpdate(
    { id: catId },
    { $set: setFields },
    { new: true, lean: true }
  );
};

module.exports = { getAllCategorias, addHabito, updateHabito, deleteHabito, getHabitosFiltro, updateCategoria };
