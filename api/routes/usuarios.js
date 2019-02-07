const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios');

router.post('/signup',usuariosController.usuarios_signup);
router.post('/login',usuariosController.usuarios_login);
router.delete('/:idus',usuariosController.usuarios_desactivar);


module.exports = router;