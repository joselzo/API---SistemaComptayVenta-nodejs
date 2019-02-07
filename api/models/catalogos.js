const sequelize = require ('/post/connection')
const Sequelize = require('sequelize');

const catalogos = sequelize.define('catalogos', {
    nombre: {
        type: Sequelize.STRING,
        allowNull:false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull:true
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull:true
    },
    padre_id: {
        type: Sequelize.INTEGER,
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
    activo:Sequelize.BOOLEAN,
    
    tiposcatalogos_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: 'tiposcatalogos', 
        referencesKey: 'id'
    }
},
{
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    schema: 'catalogos'
});

module.exports = catalogos;