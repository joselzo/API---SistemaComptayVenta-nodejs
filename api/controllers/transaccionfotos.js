const transaccionfotos = require('../models/transaccionfotos');

exports.transaccionfotos_post = (req,res,next)=>{
    console.log(req.body.texto);
    transaccionfotos.create(
        {
            direccionfisica:req.file.path,
            texto:req.body.texto,
            estado_id:req.body.estado_id,
            transaccion_id:req.body.transaccion_id,
            usuariocreacion_id:req.body.usuariocreacion_id,
            activo:1
        }
    )
    .then(result =>{
        console.log(result)
        res.status(201).json({
            message: 'Created transaccionfotos successful',
            createdProduct : {
                direccionfisica:result.direccionfisica,
                texto:result.texto,
                estado_id:result.estado_id,
                transaccion_id:result.transaccion_id,
                usuariocreacion_id:result.usuariocreacion_id,
                activo:1,
                request:{
                    type:'GET',
                    url: '/api/transaccionfotos/findbyid/'+result.id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}

exports.transaccionfotos_get_by_id_transaccion=(req,res,next)=>{
    const idg = req.params.idtra;
    transaccionfotos
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
   
}

exports.transaccionfotos_get_by_id=(req,res,next)=>{
    const idg = req.params.idtra;
    transaccionfotos
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

exports.transaccionfotos_desactivar=(req,res,next)=>{
    const idg = req.params.idtra;
    transaccionfotos
    .update(
        {
            activo:0
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'transaccionfotos desactivado'
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}

