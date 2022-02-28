const mongoose = require('mongoose');

const JuegoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:true,
        minlength:4,
        maxlength:40,
        unique:true
    },
    demo:{
        type: String,
        required:true,
        
    },
    valoracion:{
        type:Boolean
    },
    Foto:{
        type:String,
    },
    Fecha:{
        type:Date,
    },
    Categoria:{
        type: String,
    },
    _usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }

});

const Juego= mongoose.model("Juego",JuegoSchema);
module.exports = Juego;