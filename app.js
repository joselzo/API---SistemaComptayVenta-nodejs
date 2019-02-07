const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const tiposcatalogosRoutes = require('./api/routes/tiposcatalogos');
const catalogosRoutes = require('./api/routes/catalogos');
const usuariosRoutes = require('./api/routes/usuarios');
const transaccionRoutes = require('./api/routes/transaccion');
const transaccionfotosRoutes = require('./api/routes/transaccionfotos');
const comentariosfotosRoutes = require('./api/routes/comentariosfotos');
const comentariosRoutes = require('./api/routes/comentarios');
const rootDir = require('./util/path');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//DECLAREACION DE RUTAS
app.use('/api/tiposcatalogos',tiposcatalogosRoutes);
app.use('/api/catalogos',catalogosRoutes);
app.use('/api/usuarios',usuariosRoutes);
app.use('/api/transaccion',transaccionRoutes);
app.use('/api/transaccionfotos',transaccionfotosRoutes);
app.use('/api/comentarios',comentariosRoutes);
app.use('/api/comentariosfotos',comentariosfotosRoutes);

//CARPETA DE IMAGENES PUBLICA
app.use('/archivos',express.static('archivos'));

//CREACION TABLAS BD --- NO DESCOMENTAR
//const creacionBD = require('./creacionBD');
//creacionBD.Crear();
//CREACION TABLAS BD --- NO DESCOMENTAR END


//PAGINA DE INICIO
app.set('view engine','pug')
app.get('/', function (req, res) {
    res.render('index', { 
        title: 'MerakiDevs API', 
        message: 'Welcome!' })
  })
//DESACTIVAR CORS
app.use((res,req,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    if(req.method === 'OPTIONS'){
        res.headers('Access-Control-Allow-Methods','*');
        return res.status(200).json({});
    }
    next();
});
//MANEHA LOS ERRORES 404
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
});
//MANEJA LOS OTROS TIPOS DE ERRORES
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message
        }
    });
});


module.exports = app;