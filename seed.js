const mongoose = require("mongoose");
require("./models/CategoriaSchema.js");
const Categoria = mongoose.model("Categoria");

const seedData = [
  {
    id: "vitalidad", titulo: "Vitalidad", fondo: "#F5D070", nivelDetalle: "Lv 2", progreso: 0.6,
    habitos: [
      { id: "skincare",     nombre: "SkinCare",       hecho: false, racha: 7,  diasDesdeInicio: 22, completadoHoy: 1, metaHoy: 2 },
      { id: "agua",         nombre: "2L agua",         hecho: true,  racha: 14, diasDesdeInicio: 30, completadoHoy: 1, metaHoy: 1 },
      { id: "sueno",        nombre: "8hrs de sueño",   hecho: false, racha: 3,  diasDesdeInicio: 10, completadoHoy: 0, metaHoy: 8 },
      { id: "estiramiento", nombre: "Estiramiento",    hecho: true,  racha: 21, diasDesdeInicio: 45, completadoHoy: 1, metaHoy: 1 },
      { id: "fumar",        nombre: "Dejar de fumar",  hecho: false, racha: 0,  diasDesdeInicio: 5,  completadoHoy: 0, metaHoy: 1 },
    ],
  },
  {
    id: "vinculo", titulo: "Vinculo", fondo: "#BCCF80", nivelDetalle: "Lv 2", progreso: 0.9,
    habitos: [
      { id: "duolingo",   nombre: "Duolingo",           hecho: false, racha: 5,  diasDesdeInicio: 15, completadoHoy: 1, metaHoy: 2 },
      { id: "asistencia", nombre: "Asistencia a clase", hecho: true,  racha: 10, diasDesdeInicio: 30, completadoHoy: 1, metaHoy: 1 },
      { id: "leer",       nombre: "Leer 20 paginas",    hecho: false, racha: 2,  diasDesdeInicio: 8,  completadoHoy: 0, metaHoy: 20 },
      { id: "estudiar",   nombre: "Estudiar",           hecho: true,  racha: 7,  diasDesdeInicio: 20, completadoHoy: 1, metaHoy: 1 },
    ],
  },
  {
    id: "mente", titulo: "Mente", fondo: "#F7BBDD", nivelDetalle: "Lv 2", progreso: 0.9,
    habitos: [
      { id: "duolingo",   nombre: "Duolingo",           hecho: false, racha: 5,  diasDesdeInicio: 15, completadoHoy: 1, metaHoy: 2 },
      { id: "asistencia", nombre: "Asistencia a clase", hecho: true,  racha: 10, diasDesdeInicio: 30, completadoHoy: 1, metaHoy: 1 },
      { id: "leer",       nombre: "Leer 20 paginas",    hecho: false, racha: 2,  diasDesdeInicio: 8,  completadoHoy: 0, metaHoy: 20 },
      { id: "estudiar",   nombre: "Estudiar",           hecho: true,  racha: 7,  diasDesdeInicio: 20, completadoHoy: 1, metaHoy: 1 },
    ],
  },
  {
    id: "cuerpo", titulo: "Cuerpo", fondo: "#b9ccec", nivelDetalle: "Lv 2", progreso: 0.4,
    habitos: [
      { id: "gym",      nombre: "Gym",      hecho: false, racha: 4, diasDesdeInicio: 12, completadoHoy: 0, metaHoy: 1 },
      { id: "caminata", nombre: "Caminata", hecho: true,  racha: 9, diasDesdeInicio: 25, completadoHoy: 1, metaHoy: 1 },
      { id: "trotar",   nombre: "Trotar",   hecho: false, racha: 1, diasDesdeInicio: 6,  completadoHoy: 0, metaHoy: 1 },
    ],
  },
];

module.exports = async function seedCategorias() {
  const count = await Categoria.countDocuments();
  if (count > 0) return;
  await Categoria.insertMany(seedData);
  console.log("Seed de categorías completado");
};
