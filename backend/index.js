const bodyParser=require("body-parser");

const express=require("express");
const app = express();
const port = 5000;
require('./models/connection')

/** requires de las rutas */
const indie_router = require('./routes/IndieRoutes');
const juego_router = require('./routes/JuegoRoutes');
const kick_router = require('./routes/KickRoutes');
const donacion_router = require('./routes/DonacionRoutes');
const comentario_router = require('./routes/ComentarioRoutes');
const empleo_router = require('./routes/EmpleoRoutes');
const portafolio_router = require('./routes/PortafolioRoutes');
const blog_router = require('./routes/BlogRoutes');
const producto_router = require('./routes/ProductoRoutes');
const historial_router = require('./routes/HistorialRoutes');









app.use(bodyParser.json());

app.use('/api', indie_router);
app.use('/api', juego_router);  
app.use('/api', kick_router);  
app.use('/api', donacion_router);  
app.use('/api', comentario_router);  
app.use('/api', empleo_router);  
app.use('/api', portafolio_router); 
app.use('/api', blog_router); 
app.use('/api', producto_router); 
app.use('/api', historial_router);  










// app.get("/api/holamundo", async(req,res) =>{
//     res.send("esta es mi primer rest api");
// })
 app.listen(port,()=>{
     console.log("La aplicacion esta escuchando al puerto" + port);
 })