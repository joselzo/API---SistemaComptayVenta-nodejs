const comentarios = require('../models/comentarios');
exports.comentarios_get_by_id_transaccion=(req,res,next)=>{
    const idg = req.params.idco;
    comentarios
    .findAll({
    where: {
    transaccion_id: idg,
    activo:true
    }
    })
    .then( docs =>{
        const response ={
            count : docs.length,
            transaccion: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
};

exports.comentarios_get_by_id=(req,res,next)=>{
    const idg = req.params.idco;
    comentarios
    .findAll({
    where: {
    id: idg,
    activo:true
    }
    })
    .then( docs =>{
        const response ={
            count : docs.length,
            transaccion: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
};

exports.comentarios_desactivar=(req,res,next)=>{
    const idg = req.params.idco;
    comentarios
    .update(
        {
            activo:0
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'comentarios desactivado'
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}

exports.comentarios_post = (req,res,next)=>{
    comentarios.create(
        {
            titulo:req.body.titulo,
            texto:req.body.texto,
            estado_id:req.body.estado_id,
            usuariocreacion_id:req.body.usuariocreacion_id, 
            activo:1,
            transaccion_id:req.body.transaccion_id
        }
    )
    .then(result =>{
        console.log(result)
        res.status(201).json({
            message: 'Created comentarios successful',
            createdcomentarios : {
                titulo:result.titulo,
                texto:result.texto,
                estado_id:result.estado_id,
                usuariocreacion_id:result.usuariocreacion_id, 
                activo:1,
                transaccion_id:result.transaccion_id,
                request:{
                    type:'GET',
                    url: '/api/comentarios/findbyid/'+result.id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error1: err});
    });

   
}

exports.comentarios_patch=(req,res,next)=>{
    const idg = req.params.idco;
    comentarios
    .update(
        {
            titulo:req.body.titulo,
            texto:req.body.texto,
            estado_id:req.body.estado_id,
            usuariocreacion_id:req.body.usuariocreacion_id, 
            activo:1,
            transaccion_id:req.body.transaccion_id
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'comentarios updated',
            url:'/api/comentarios/findbyid/'+idg
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}