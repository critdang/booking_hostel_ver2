const express = require('express');

const controller = require('../controller/room.controller');
const validate = require('../validate/validate');
const { upload } = require('../utils/cloudinary/uploadImg');
const auth = require('../utils/middleware/auth');

const router = express.Router();
// router.post('/', auth.protectingRoutes, auth.checkRole('admin'), upload.array('images'), validate.handleRoomValidate, controller.createRoom);
router.post('/', upload.array('images'), validate.handleRoomValidate, controller.createRoom);
router.get('/', controller.getRooms);
router.get('/search', controller.searchRooms);
router.get('/:id', controller.getRoom);
// router.put('/:id', auth.protectingRoutes, auth.checkRole('admin'), controller.updateRoom);
router.put('/:id', controller.updateRoom);
// router.delete('/:id', auth.protectingRoutes, auth.checkRole('admin'), controller.deleteRoom);
router.delete('/:id', controller.deleteRoom);
router.post('/default_image/:imgId', auth.protectingRoutes, auth.checkRole('admin'), controller.defaultImage);
router.delete('/:roomId/:imgId', auth.protectingRoutes, auth.checkRole('admin'), controller.deleteImage);

module.exports = router;
