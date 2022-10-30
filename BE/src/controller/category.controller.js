const categoryService = require("../service/categoryService");

const create = async (req, res) => {
  try {
    categoryService.create(req, res);
  } catch (e) {
    console.log(e);
  }
};
const getAll = async (req, res) => {
  try {
    categoryService.getAll(req, res);
  } catch (e) {
    console.log(e);
  }
};

const getOne = async (req, res) => {
  try {
    categoryService.getOne(req, res);
  } catch (e) {
    console.log(e);
  }
};

const update = async (req, res) => {
  try {
    categoryService.update(req, res);
  } catch (e) {
    console.log(e);
  }
};

const deletes = async (req, res) => {
  try {
    categoryService.deletes(req, res);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  deletes
};
