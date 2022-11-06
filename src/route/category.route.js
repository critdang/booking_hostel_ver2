const express = require('express');
const categoryController = require('../controller/category.controller');
const { upload } = require("../utils/uploadImg");

const router = express.Router();
router.post('/', upload.single('thumbnail'), categoryController.createCategory);
router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getOne);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.deletes);

module.exports = router;
