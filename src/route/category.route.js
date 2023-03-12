const express = require('express');
const controller = require('../controller/category.controller');
const { upload } = require("../utils/cloudinary/uploadImg");
const validate = require('../validate/validate');
const auth = require('../utils/middleware/auth');

const router = express.Router();
// route display create new category
router.post('/', auth.protectingRoutes, auth.checkRole('admin'), upload.single('thumbnail'), validate.handleCategoryValidate, controller.createCategory);
// route display category by criteria
router.get('/', controller.getCategories);
// route display all categories
router.get('/:id', controller.getCategory);
// route used for update category
router.put('/:id', auth.protectingRoutes, auth.checkRole('admin'), upload.single('thumbnail'), validate.handleCategoryValidate, controller.updateCategory);
// route used for delete category
router.delete('/:id', auth.protectingRoutes, auth.checkRole('admin'), controller.deleteCategory);

module.exports = router;
