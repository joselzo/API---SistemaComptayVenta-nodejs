const sequelize = require ('/post/connection')
const Sequelize = require('sequelize');
const usuarios = sequelize.define('usuarios', {
    nombre: {
        type: Sequelize.STRING,
        allowNull:false
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull:true
    },
    email: { 
        type: Sequelize.STRING, 
        allowNull:false,
        //isEmail: true
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
    },
    password: {  
        type: Sequelize.STRING,   
        allowNull:false, 
    },
    estado_id: {
        type: Sequelize.INTEGER,
        allowNull:true
    },
    usuariocreacion_id: {
        type: Sequelize.INTEGER,
        allowNull:true
    },

    fechacreacion: { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
     },
    activo:Sequelize.BOOLEAN
},
{
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    schema: 'seguridad'
});

module.exports = usuarios;