const sequelize = require ('/post/connection')
const Sequelize = require('sequelize');
const transaccion = sequelize.define('transaccion', {
    titulo: {
        type: Sequelize.STRING,
        allowNull:false
    },
    descripcion: {
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
    activo:Sequelize.BOOLEAN,

    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: 'usuarios', 
        referencesKey: 'id'
    },
    tipotransaccion_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: 'catalogos', 
        referencesKey: 'id'
    },
    estadoproducto_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: 'catalogos', 
        referencesKey: 'id'
    },
    tipoproducto_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: 'catalogos', 
        referencesKey: 'id'
    },
    ocasion_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: 'catalogos', 
        referencesKey: 'id'
    },
    talla_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: 'catalogos', 
        referencesKey: 'id'
    },
    color_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: 'catalogos', 
        referencesKey: 'id'
    }
},
{
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    schema: 'procesos'
});

module.exports = transaccion;