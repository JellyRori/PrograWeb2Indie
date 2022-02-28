const Kick = require("../models/KickSchema");

exports.kick_create = async (req,res) =>{
    const{body} = req;

    const newkick = new Kick(body);

    await newkick.save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});
    res.send(newkick);

}

exports.kick_getById = async (req,res) =>{
    const{id} = req.params;

    const data = await Kick.findById(id).populate('_juego', 'nombre');

    res.send(data);
}

exports.kick_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const kickdb = await Kick.findById(id);

    if(kickdb){
        const data = await Kick.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.kick_delete = async(req,res)=>{
    const {id} = req.params;

    await Kick.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};