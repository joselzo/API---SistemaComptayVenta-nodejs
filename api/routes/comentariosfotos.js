const express = require('express');
const router = express.Router();
const multer = require('multer');
const comentariosfotosController = require('../controllers/comentariosfotos');

const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'archivos/imagenes/comentarios');
    },
    filename:function(req,file,cb){
        cb(null, new Date().toLocaleDateString()+'_'+new Date().getHours()+'_'+new Date().getMinutes()+'_'+new Date().getSeconds()+'_'+file.fieldname + file.originalname); 
    }
});
const fileFilter = (req,file,cb)=>{
    //reject false
    if(file.mimetype === 'image/jpeg'||file.mimetype === 'image/jpg' || file.mimetype ==='image/png'){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
};
const upload = multer({
    storage:storage,
    limits:{
        fileSize:1920*1920*5
    },
    fileFilter   :fileFilter
});

router.post('/',upload.single('direccionfisica'),comentariosfotosController.comentariosfotos_post);
router.get('/findbyidcomentario/:idco',comentariosfotosController.comentariosfotos_get_by_id_comentario);
router.get('/findbyid/:idco',comentariosfotosController.comentariosfotos_get_by_id);
router.patch('/desactivar/:idco',comentariosfotosController.comentariosfotos_desactivar);


module.exports =   router;