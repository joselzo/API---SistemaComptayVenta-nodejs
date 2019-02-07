const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarios = require('../models/usuarios');

exports.usuarios_signup = (req,res,next)=>{

    usuarios
    .findAll({
    where: {
    email: req.body.email
    }
    })
    .then( usuariosh =>{
        if(usuariosh.length >= 1){
            return res.status(409).json({
                message:'Mail exist'
            });   
        }else{
            bcrypt.hash(req.body.password,10 ,(err,hash) => {
                if (err){
                    return res.status(500).json({
                        error:err
                    });
                }else{
                    usuarios.create(
                        {
                            nombre:req.body.nombre,
                            telefono:req.body.telefono,
                            email:req.body.email,
                            password:hash,
                            estado_id:req.body.estado_id,
                            usuariocreacion_id:req.body.usuariocreacion_id,
                            activo:1
                        }
                    ) .then(result =>{
                        console.log(result);
                        res.status(201).json({
                           message:'usuarios created' 
                        });
                    })
                    .catch(err =>{
                        console.log(err)
                        res.status(500).json({
                            error:err
                        });
                    })

                    
                }
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });

}
exports.usuarios_login = (req,res,next)=>{
    usuarios.findAll({
        where: {
        email: req.body.email,
        activo: true
        }
        })
    .then(usuarios =>{
        if(usuarios.length < 1){
            return res.status(401).json({
                message:'Auth fail'
            });   
        }
        bcrypt.compare(req.body.password,usuarios[0].password,(err,result)=>{
                
            if(err){
                return res.status(401).json({
                    message:'Auth fail'
                });
            }
            if(result){
                console.log(usuarios[0].email);
                console.log(usuarios[0].id);
                const token=jwt.sign({
                    email:usuarios[0].email,
                    nombre:usuarios[0].nombre,
                    telefono:usuarios[0].telefono,
                    email:usuarios[0].email,
                    activo:usuarios[0].activo,
                    usuariosId:usuarios[0].id
                },
                process.env.JWT_KEY,
                {
                    expiresIn:"5h"
                });
                return res.status(200).json({
                    message:'Auth succesful',
                    token:token
                });
            }
            res.status(401).json({
                message:'Auth fail'
            })
        });
        
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
        }); 
}
exports.usuarios_desactivar=(req,res,next)=>{
    const idg = req.params.idus;
    usuarios
    .update(
        {
            activo:0
        },
        {where: {id:idg}}
      )
      .then( doc =>{
        console.log(doc)
        res.status(200).json({
            message:'usuarios desactivado'
        });
    })
    .catch(
        err=> {console.log(err)
        res.status(500).json({error: err});
    });
   
}