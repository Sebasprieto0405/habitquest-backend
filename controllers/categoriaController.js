const categoriaService = require("../services/categoriaService");

const getAllCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    res.status(200).json({ message: "OK", data: categorias });
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo categorías", error: error.message });
  }
};

const addHabito = async (req, res) => {
  const { catId } = req.params;
  const habito = req.body;
  try {
    const categoria = await categoriaService.addHabito(catId, habito);
    res.status(201).json({ message: "Hábito creado", data: categoria });
  } catch (error) {
    res.status(500).json({ message: "Error creando hábito", error: error.message });
  }
};

const updateHabito = async (req, res) => {
  const { catId, habitoId } = req.params;
  const data = req.body;
  try {
    const categoria = await categoriaService.updateHabito(catId, habitoId, data);
    res.status(200).json({ message: "Hábito actualizado", data: categoria });
  } catch (error) {
    res.status(500).json({ message: "Error actualizando hábito", error: error.message });
  }
};

const deleteHabito = async (req, res) => {
  const { catId, habitoId } = req.params;
  try {
    const categoria = await categoriaService.deleteHabito(catId, habitoId);
    res.status(200).json({ message: "Hábito eliminado", data: categoria });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando hábito", error: error.message });
  }
};

const getHabitosFiltro = async (req, res) => {
  try {
    const habitos = await categoriaService.getHabitosFiltro(req.query);
    res.status(200).json({ message: "OK", data: habitos });
  } catch (error) {
    res.status(500).json({ message: "Error filtrando hábitos", error: error.message });
  }
};

const updateCategoria = async (req, res) => {
  const { catId } = req.params;
  const data = req.body;
  try {
    const categoria = await categoriaService.updateCategoria(catId, data);
    res.status(200).json({ message: "Categoría actualizada", data: categoria });
  } catch (error) {
    res.status(500).json({ message: "Error actualizando categoría", error: error.message });
  }
};

module.exports = { getAllCategorias, addHabito, updateHabito, deleteHabito, getHabitosFiltro, updateCategoria };
