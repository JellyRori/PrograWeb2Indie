const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({

    nombre:{
     type:String,
     required:true,
     minlength:4,
     maxlength:40,
    
    },
   
    articulo: {
        type: String,
        required:true,
        minlength:4,
        maxlength:40,
      
    },
    descripcion:{
        type: String,
        required:true,
        
    },
    imagen:{
        type:String
    },
    _usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }

});

const Producto= mongoose.model("Producto",ProductoSchema);
module.exports = Producto;