const mongoose = require('mongoose');

const EmpleoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:true,
        minlength:4,
        maxlength:80,
        unique:true
    },
    ubicacion:{
        type: String,
        required:true,
        maxlength:100
        
    },
    tipo:{
        type: String,
        maxlength: 50
    },
    descripcion:{
        type:String,
    },
    requisitos:{
        type:String,
    },
    redes:{
        type: String,
    },
    aplicacion:{
        type: String,
    },
    _usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }

});

const Empleo = mongoose.model("Empleo",EmpleoSchema);
module.exports = Empleo;