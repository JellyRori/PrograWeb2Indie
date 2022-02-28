const Comentario = require("../models/ComentarioSchema");

exports.Comentario_create = async (req,res) =>{
    const{body} = req;

    const newComentario = new Comentario(body);

    await newComentario.save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});
    res.send(newComentario);

}

exports.Comentario_getById = async (req,res) =>{ 
    const{id} = req.params;

    const data = await Comentario.findById(id).populate('_juego', 'nombre');


    res.send(data);
}


exports.Comentario_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const comentariodb = await Comentario.findById(id);

    if(comentariodb){
        const data = await Comentario.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.Comentario_delete = async(req,res)=>{
    const {id} = req.params;

    await Comentario.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};
