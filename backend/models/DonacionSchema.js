const mongoose = require('mongoose');

const DonacionSchema = new mongoose.Schema({
    cantidad: {
        type: Number,
        required:true,
       
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

const Donacion= mongoose.model("Donacion",DonacionSchema);
module.exports = Donacion;