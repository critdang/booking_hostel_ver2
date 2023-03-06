const express = require('express');
const controller = require('../controller/category.controller');
const { upload } = require("../utils/cloudinary/uploadImg");
const validate = require('../validate/validate');
const auth = require('../utils/middleware/auth');

const router = express.Router();
// router.post('/', auth.protectingRoutes, auth.checkRole('admin'), upload.single('thumbnail'), validate.handleCategoryValidate, controller.createCategory);
router.post('/', upload.single('thumbnail'), validate.handleCategoryValidate, controller.createCategory);
router.get('/', controller.getCategories);
router.get('/:id', controller.getCategory);
// router.put('/:id', auth.protectingRoutes, auth.checkRole('admin'), validate.handleCategoryValidate, controller.updateCategory);
router.put('/:id', upload.single('thumbnail'), validate.handleCategoryValidate, controller.updateCategory);
// router.delete('/:id', auth.protectingRoutes, auth.checkRole('admin'), controller.deleteCategory);
router.delete('/:id', controller.deleteCategory);

module.exports = router;
