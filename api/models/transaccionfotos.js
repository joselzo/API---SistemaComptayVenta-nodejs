const sequelize = require ('/post/connection')
const Sequelize = require('sequelize');
const transaccionfotos = sequelize.define('transaccionfotos', {
    direccionfisica: {
        type: Sequelize.STRING,
        allowNull:false
    },
    texto: {
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
    transaccion_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: 'transaccion', 
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

module.exports = transaccionfotos;