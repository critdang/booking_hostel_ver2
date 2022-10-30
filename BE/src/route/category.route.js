const express = require('express');
const categoryController = require('../controller/category.controller');

const router = express.Router();
router.post('/', categoryController.create);
router.get('/', categoryController.getAll);
router.get('/:fieldname/:value', categoryController.getOne);
router.put('/:fieldname/:value', categoryController.update);
router.delete('/:fieldname/:value', categoryController.deletes);

module.exports = router;
