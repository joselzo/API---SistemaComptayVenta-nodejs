const transaccion = require('../models/transaccion');

exports.transaccion_get_by_id_usuario=(req,res,next)=>{
    const idg = req.params.idus;
    transaccion
    .findAll({
    where: {
        usuario_id: idg
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
}

exports.transaccion_get_by_id = (req,res,next)=>{
    const idg = req.params.idus;
    transaccion
    .findAll({
    where: {
        id: idg
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
}

exports.transaccion_get_all=(req,res,next)=>{
    transaccion
    .findAll()
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
   
}

exports.transaccion_post = (req,res,next)=>{
    transaccion.create(
        {
            titulo:req.body.titulo,
            descripcion:req.body.descripcion,
            comentario:req.body.comentario,
            estado_id:req.body.estado_id,
            usuariocreacion_id:req.body.usuariocreacion_id, 
            activo:1,

            usuario_id:req.body.usuario_id,
            tipotransaccion_id:req.body.tipotransaccion_id, 
            estadoproducto_id:req.body.estadoproducto_id, 
            tipoproducto_id:req.body.tipoproducto_id, 
            ocasion_id:req.body.ocasion_id, 
            talla_id:req.body.talla_id, 
            color_id:req.body.color_id
        }
    )
    .then(result =>{
        console.log(result)
        res.status(201).json({
            message: 'Created transaccion successful',
            createdtransaccion : {
                titulo:result.titulo,
                descripcion:result.descripcion,
                comentario:result.comentario,
                estado_id:result.estado_id,
                usuariocreacion_id:result.usuariocreacion_id, 
                activo:1,
    
                usuario_id:result.usuario_id,
                tipotransaccion_id:result.tipotransaccion_id, 
                estadoproducto_id:result.estadoproducto_id, 
                tipoproducto_id:result.tipoproducto_id, 
                ocasion_id:result.ocasion_id, 
                talla_id:result.talla_id, 
                color_id:result.color_id,
                request:{
                    type:'GET',
                    url: '/api/transaccion/findbyid/'+result.id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error1: err});
    });

   
}

exports.transaccion_desactivar=(req,res,next)=>{
    const idg = req.params.idus;
    transaccion
    .update(
        {
            activo:0
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'transaccion desactivado'
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}

exports.transaccion_patch=(req,res,next)=>{
    const idg = req.params.idus;
    transaccion
    .update(
        {
            titulo:req.body.titulo,
            descripcion:req.body.descripcion,
            comentario:req.body.comentario,
            estado_id:req.body.estado_id,
            usuariocreacion_id:req.body.usuariocreacion_id, 
            activo:1,
            fechacreacion:req.body.fechacreacion,
            usuario_id:req.body.usuario_id,
            tipotransaccion_id:req.body.tipotransaccion_id, 
            estadoproducto_id:req.body.estadoproducto_id, 
            tipoproducto_id:req.body.tipoproducto_id, 
            ocasion_id:req.body.ocasion_id, 
            talla_id:req.body.talla_id
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'transaccion updated',
            url:'/api/transaccion/findbyid/'+idg
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}