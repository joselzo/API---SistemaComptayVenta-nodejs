const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentarios');

router.get('/findbyid/:idco',comentariosController.comentarios_get_by_id);
router.get('/findbyidtransaccion/:idco',comentariosController.comentarios_get_by_id_transaccion);
router.post('/',comentariosController.comentarios_post);
router.patch('/:idco',comentariosController.comentarios_patch);
router.patch('/desactivar/:idco',comentariosController.comentarios_desactivar);

module.exports =   router;
