const mongoose = require('mongoose');


const KickSchema = new mongoose.Schema({
    cantidad: {
        type: Number,
        
    },
    progreso:{
        type: Number,
         
    },
    _juego:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Juego"
    }

});

const Kick= mongoose.model("Kick",KickSchema);
module.exports = Kick;