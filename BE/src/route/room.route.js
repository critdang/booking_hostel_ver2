const express = require('express');

const roomController = require('../controller/room.controller');
const validate = require('../validate/validate');

const router = express.Router();
router.post('/', validate.handleRoomValidate, roomController.create);
router.get('/', roomController.getAll);
router.get('/:fieldname/:value', roomController.getOne);
router.put('/:fieldname/:value', roomController.update);
router.delete('/:fieldname/:value', roomController.deletes);

module.exports = router;
