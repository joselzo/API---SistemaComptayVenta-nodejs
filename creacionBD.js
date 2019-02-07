//CREACION DE BD
const sequelize = require ('/post/connection')
const Sequelize = require('sequelize');
    //CREAR SQUEMAS
    sequelize.createSchema('catalogos').then(() => {});
    sequelize.createSchema('seguridad').then(() => {});
    sequelize.createSchema('procesos').then(() => {});
        //Catalogos
        const tiposcatalogos = sequelize.define('tiposcatalogos', {
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
            activo:Sequelize.BOOLEAN
        },
        {
            timestamps: false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
            schema: 'catalogos'
        });
        catalogos.belongsTo(tiposcatalogos, {as: 'tiposcatalogos'});
        //Catalogos end
        
        //Usuarios 
        const roles = sequelize.define('roles', {
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
            password: {  type: Sequelize.STRING,   allowNull:false, },
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

        const rolesusuario = sequelize.define('rolesusuario', {
            usuariocreacion_id: {
                type: Sequelize.INTEGER,
                allowNull:true
            },
            estado_id: {
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
        rolesusuario.belongsTo(usuarios, {as: 'usuario'});
        rolesusuario.belongsTo(roles, {as: 'roles'});
        //Usuarios end
        //transaccion
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
            activo:Sequelize.BOOLEAN
        },
        {
            timestamps: false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
            schema: 'procesos'
        });
        transaccion.belongsTo(usuarios, {as: 'usuario'});
        transaccion.belongsTo(catalogos, {as: 'tipotransaccion'});
        transaccion.belongsTo(catalogos, {as: 'estadoproducto'});
        transaccion.belongsTo(catalogos, {as: 'tipoproducto'});
        transaccion.belongsTo(catalogos, {as: 'ocasion'});
        transaccion.belongsTo(catalogos, {as: 'talla'});
        transaccion.belongsTo(catalogos, {as: 'color'});

        const comentarios = sequelize.define('comentarios', {
            titulo: {
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
            activo:Sequelize.BOOLEAN
        },
        {
            timestamps: false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
            schema: 'procesos'
        });
        comentarios.belongsTo(transaccion, {as: 'transaccion'});

     
        const comentariosfotos = sequelize.define('comentariosfotos', {
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
            activo:Sequelize.BOOLEAN
        },
        {
            timestamps: false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
            schema: 'procesos'
        });
        comentariosfotos.belongsTo(comentarios, {as: 'comentario'});

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
            activo:Sequelize.BOOLEAN
        },
        {
            timestamps: false,
            paranoid: true,
            underscored: true,
            freezeTableName: true,
            schema: 'procesos'
        });
        transaccionfotos.belongsTo(transaccion, {as: 'transaccion'});
        //transaccion end

        exports.Crear  = (req,res,next)=>
        {sequelize
            .sync()
            .then()
        };

//CREACION DE BD END