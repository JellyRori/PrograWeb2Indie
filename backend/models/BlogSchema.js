const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    nombre: {
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
        type: String,
    },
    _usuario:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    }

});

const Blog= mongoose.model("Blog",BlogSchema);
module.exports = Blog;