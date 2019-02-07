const comentariosfotos = require('../models/comentariosfotos');

exports.comentariosfotos_post = (req,res,next)=>{
    console.log(req.body.texto);
    comentariosfotos.create(
        {
            direccionfisica:req.file.path,
            texto:req.body.texto,
            estado_id:req.body.estado_id,
            comentario_id:req.body.comentario_id,
            usuariocreacion_id:req.body.usuariocreacion_id,
            activo:1
        }
    )
    .then(result =>{
        console.log(result)
        res.status(201).json({
            message: 'Created comentariosfotos successful',
            createdProduct : {
                direccionfisica:result.direccionfisica,
                texto:result.texto,
                estado_id:result.estado_id,
                comentario_id:result.comentario_id,
                usuariocreacion_id:result.usuariocreacion_id,
                activo:1,
                request:{
                    type:'GET',
                    url: '/api/comentariosfotos/findbyid/'+result.id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}

exports.comentariosfotos_get_by_id_comentario=(req,res,next)=>{
    const idg = req.params.idco;
    comentariosfotos
    .findAll({
    where: {
    comentario_id: idg,
    activo:true
    }
    })
    .then( docs =>{
        const response ={
            count : docs.length,
            comentario_id: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
}

exports.comentariosfotos_get_by_id=(req,res,next)=>{
    const idg = req.params.idco;
    comentariosfotos
    .findAll({
    where: {
    id: idg
    }
    })
    .then( docs =>{
        const response ={
            count : docs.length,
            comentario: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
}

exports.comentariosfotos_desactivar=(req,res,next)=>{
    const idg = req.params.idco;
    comentariosfotos
    .update(
        {
            activo:0
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'comentariosfotos desactivado'
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}

