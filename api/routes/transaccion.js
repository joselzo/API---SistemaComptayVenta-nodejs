const express = require('express');
const router = express.Router();
const transaccionController = require('../controllers/transaccion');

router.get('/',transaccionController.transaccion_get_all);
router.get('/findbyid/:idus',transaccionController.transaccion_get_by_id);
router.get('/findbyidusuario/:idus',transaccionController.transaccion_get_by_id_usuario);
router.post('/',transaccionController.transaccion_post);
router.patch('/:idus',transaccionController.transaccion_patch);
router.patch('/desactivar/:idus',transaccionController.transaccion_desactivar);


module.exports =   router;
