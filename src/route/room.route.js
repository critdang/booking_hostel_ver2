const express = require('express');

const roomController = require('../controller/room.controller');
const validate = require('../validate/validate');
const { upload } = require('../utils/uploadImg');

const router = express.Router();
router.post('/', upload.array('images'), validate.handleRoomValidate, roomController.create);
router.get('/', roomController.getAll);
router.get('/:id', roomController.getOne);
router.put('/:id', roomController.update);
router.delete('/:id', roomController.deletes);
router.post('/default_image/:imgId', roomController.defaultImage);

module.exports = router;
