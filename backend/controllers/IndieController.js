const Usuario = require("../models/IndieSchema");

exports.usuario_getall = async(req,res) =>{
    const data = await Usuario.find();

    res.send(data);
}

exports.indie_create = async(req,res)=>{
    const {body} = req;

    //validacion de informacion

    let newIndie = new Usuario(body);
    
    await newIndie
    .save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});

    res.send(newIndie);
};

exports.indie_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const indiedb = await Usuario.findById(id);

    if(indiedb){
        const data = await Usuario.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.indie_delete=async(req,res)=>{
    const {id} = req.params;

    await Usuario.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};