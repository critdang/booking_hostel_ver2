const express = require('express');
const controller = require('../controller/category.controller');
const { upload } = require("../utils/uploadImg");
const validate = require('../validate/validate');

const router = express.Router();
router.post('/', upload.single('thumbnail'), validate.handleCategoryValidate, controller.createCategory);
router.get('/', controller.getCategories);
router.get('/:id', controller.getCategory);
router.put('/:id', validate.handleCategoryValidate, controller.updateCategory);
router.delete('/:id', controller.deleteCategory);

module.exports = router;
