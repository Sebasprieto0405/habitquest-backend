const mongoose = require("mongoose");

const habitoSchema = new mongoose.Schema({
  id:              { type: String, required: true },
  nombre:          { type: String, required: true },
  hecho:           { type: Boolean, default: false },
  racha:           { type: Number, default: 0 },
  diasDesdeInicio: { type: Number, default: 0 },
  completadoHoy:   { type: Number, default: 0 },
  metaHoy:         { type: Number, required: true },
}, { _id: false });

const categoriaSchema = new mongoose.Schema({
  id:          { type: String, required: true, unique: true },
  titulo:      { type: String, required: true },
  fondo:       { type: String },
  nivelDetalle:{ type: String },
  progreso:    { type: Number, default: 0 },
  habitos:     [habitoSchema],
}, { collection: "categorias" });

module.exports = mongoose.model("Categoria", categoriaSchema);
