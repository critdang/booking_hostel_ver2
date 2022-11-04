const express = require('express');
const categoryController = require('../controller/category.controller');

const router = express.Router();
router.post('/', categoryController.create);
router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getOne);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.deletes);

module.exports = router;
