const sequelize = require ('/post/connection')
const Sequelize = require('sequelize');
const tiposcatalogos = sequelize.define('tiposcatalogos', {
    nombre: {
        type: Sequelize.STRING,
        allowNull:false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull:false
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull:true
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
    schema: 'catalogos'
});


module.exports = tiposcatalogos;