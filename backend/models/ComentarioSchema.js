const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({

    contenido: {
        type: String,
        required:true,
        maxlength:90
       
    },
    fecha:{
        type: Date,
        
        
    },
    _usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    },
    _juego:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Juego"
    }   

});

const Comentario= mongoose.model("Comentario",ComentarioSchema);
module.exports = Comentario;