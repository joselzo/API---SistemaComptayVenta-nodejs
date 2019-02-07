const express = require('express');
const router = express.Router();
const tiposcatalogosController = require('../controllers/tiposcatalogos');

router.get('/',tiposcatalogosController.tiposcatalogos_get_all);
router.get('/findbynombre/:nombretipo',tiposcatalogosController.tiposcatalogos_get_by_name);
router.get('/findbyid/:idtipo',tiposcatalogosController.tiposcatalogos_get_by_id);
router.post('/',tiposcatalogosController.tiposcatalogos_post);
router.delete('/:idtipo',tiposcatalogosController.tiposcatalogos_delete_by_id);
router.patch('/:idtipo',tiposcatalogosController.tiposcatalogos_patch);
router.patch('/desactivar/:idtipo',tiposcatalogosController.tiposcatalogos_desactivar);

module.exports =   router;
