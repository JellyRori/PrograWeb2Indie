const mongoose = require('mongoose');

const PortafolioSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        maxlength:80,
       
    },
    imagen:{
        type: String,
        required:true,
        
    },
    fecha:{
        type: Date,
        
    },
    _usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }

});

const Portafolio = mongoose.model("Portafolio",PortafolioSchema);
module.exports = Portafolio;