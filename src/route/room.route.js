const express = require('express');

const roomController = require('../controller/room.controller');
const validate = require('../validate/validate');

const router = express.Router();
router.post('/', validate.handleRoomValidate, roomController.create);
router.get('/', roomController.getAll);
router.get('/:id', roomController.getOne);
router.put('/:id', roomController.update);
router.delete('/:id', roomController.deletes);

module.exports = router;
