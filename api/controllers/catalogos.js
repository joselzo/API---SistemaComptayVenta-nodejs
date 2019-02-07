const catalogos = require('../models/catalogos');

exports.catalogos_get_all=(req,res,next)=>{
    catalogos
    .findAll()
    .then( docs =>{
        const response ={
            count : docs.length,
            catalogos: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
}

exports.catalogos_get_by_name=(req,res,next)=>{
    const nombreg = req.params.nombreca;
    catalogos
    .findAll({
    where: {
    nombre: nombreg,
    activo: true
    }
    })
    .then( docs =>{
        const response ={
            count : docs.length,
            catalogos: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
}

exports.catalogos_get_by_id=(req,res,next)=>{
    const idg = req.params.idca;
    catalogos
    .findAll({
    where: {
    id: idg
    }
    })
    .then( docs =>{
        const response ={
            count : docs.length,
            catalogos: docs
        };
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
   
}

exports.catalogos_post = (req,res,next)=>{
    catalogos.create(
        {
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            comentario:req.body.comentario,
            padre_id:req.body.padre_id,
            estado_id:req.body.estado_id,
            usuariocreacion_id:req.body.usuariocreacion_id, 
            activo:1,
            tiposcatalogos_id:req.body.tiposcatalogos_id
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
                padre_id:result.padre_id,
                estado_id:result.estado_id,
                usuariocreacion_id:result.usuariocreacion_id,
                fechacreacion:result.fechacreacion,
                tiposcatalogos_id:result.tiposcatalogos_id,
                activo:1,
                request:{
                    type:'GET',
                    url: '/api/catalogos/findbyid/'+result.id
                }
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error1: err});
    });

   
}

exports.catalogos_delete_by_id=(req,res,next)=>{
    const idg = req.params.idca;
    catalogos
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

exports.catalogos_patch=(req,res,next)=>{
    const idg = req.params.idca;
    catalogos
    .update(
        {
            nombre:req.body.nombre,
            descripcion:req.body.descripcion,
            comentario:req.body.comentario,
            padre_id:req.body.padre_id,
            estado_id:req.body.estado_id,
            usuariocreacion_id:req.body.usuariocreacion_id,
            fechacreacion:req.body.fechacreacion,
            activo:1,
            tiposcatalogos_id:req.body.tiposcatalogos_id,
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'catalogos updated',
            url:'/api/catalogos/findbyid/'+idg
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}

exports.catalogos_desactivar=(req,res,next)=>{
    const idg = req.params.idca;
    catalogos
    .update(
        {
            activo:0
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'catalogos desactivado'
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}