const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:true,
        minlength:4,
        maxlength:25,
        unique:true
    },
    contra:{
        type: String,
        required:true,
        minlength:8,
        maxlength:20
    },
    foto:{ 
        type:String,
    },
    telefono:{
        type:Number,

    },
    redes:{
        type:String,
        maxlength:90

    }
});

const Usuario = mongoose.model("Usuario",UsuarioSchema);
module.exports = Usuario;