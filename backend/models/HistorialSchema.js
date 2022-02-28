const mongoose = require('mongoose');

const HistorialSchema = new mongoose.Schema({

    
    _producto:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Producto"
    },
    _usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }

});

const Historial= mongoose.model("Historial",HistorialSchema);
module.exports = Historial;