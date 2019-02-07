const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../../util/path');
const catalogosController = require('../controllers/catalogos');

router.get('/index',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'/views','catalogosIndex.html'))
});
router.get('/',catalogosController.catalogos_get_all);
router.get('/findbynombre/:nombreca',catalogosController.catalogos_get_by_name);
router.get('/findbyid/:idca',catalogosController.catalogos_get_by_id);
router.post('/',catalogosController.catalogos_post);
router.delete('/:idca',catalogosController.catalogos_delete_by_id);
router.patch('/:idca',catalogosController.catalogos_patch);
router.patch('/desactivar/:idca',catalogosController.catalogos_desactivar);

module.exports =   router;
