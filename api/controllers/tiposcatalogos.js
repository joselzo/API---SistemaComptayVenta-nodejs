const tiposcatalogos = require('../models/tiposcatalogos');

exports.tiposcatalogos_get_all=(req,res,next)=>{
    tiposcatalogos
    .findAll()
    .then( docs =>{
        const response ={
            count : docs.length,
            tiposcatalogos: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
}

exports.tiposcatalogos_get_by_name=(req,res,next)=>{
    const nombreg = req.params.nombretipo;
    tiposcatalogos
    .findAll({
    where: {
    nombre: nombreg,
    activo: true
    }
    })
    .then( docs =>{
        const response ={
            count : docs.length,
            tiposcatalogos: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
}

exports.tiposcatalogos_get_by_id=(req,res,next)=>{
    const idg = req.params.idtipo;
    tiposcatalogos
    .findAll({
    where: {
    id: idg
    }
    })
    .then( docs =>{
        const response ={
            count : docs.length,
            tiposcatalogos: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
}

exports.tiposcatalogos_post = (req,res,next)=>{
    tiposcatalogos.create(
        {
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            comentario:req.body.comentario,
            estado_id:req.body.estado_id,
            usuariocreacion_id:req.body.usuariocreacion_id,
            activo:1
        }
    )
    .then(result =>{
        console.log(result)
        res.status(201).json({
            message: 'Created product successful',
            createdProduct : {
                nombre:result.nombre,
                descripcion:result.descripcion,
                comentario:result.comentario,
                estado_id:result.estado_id,
                usuariocreacion_id:result.usuariocreacion_id,
                fechacreacion:result.fechacreacion,
                activo:1,
                request:{
                    type:'GET',
                    url: '/api/tiposcatalogos/findbyid/'+result.id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error1: err});
    });

   
}

exports.tiposcatalogos_delete_by_id=(req,res,next)=>{
    const idg = req.params.idtipo;
    tiposcatalogos
    .destroy({
    where: {
    id: idg
    }
    })
    .then( doc =>{
        res.status(200).json({
            message:'Product deleted'
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
        });
   
}

exports.tiposcatalogos_patch=(req,res,next)=>{
    const idg = req.params.idtipo;
    tiposcatalogos
    .update(
        {
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            comentario:req.body.comentario,
            estado_id:req.body.estado_id,
            usuariocreacion_id:req.body.usuariocreacion_id,
            fechacreacion:req.body.fechacreacion,
            activo:1
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'tiposcatalogos updated',
            url:'/api/tiposcatalogos/findbyid/'+idg
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}

exports.tiposcatalogos_desactivar=(req,res,next)=>{
    const idg = req.params.idtipo;
    tiposcatalogos
    .update(
        {
            activo:0
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'tiposcatalogos desactivado'
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}