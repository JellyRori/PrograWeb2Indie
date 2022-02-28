const Juego = require("../models/JuegoSchema");

exports.juego_create = async (req,res) =>{
    const{body} = req;

    const newJuego = new Juego(body);

    await newJuego.save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});
    res.send(newJuego);

}

exports.juego_getById = async (req,res) =>{
    const{id} = req.params;

    const data = await Juego.findById(id).populate('_usuario', 'nombre');

    res.send(data);
}

exports.juego_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const juegodb = await Juego.findById(id);

    if(juegodb){
        const data = await Juego.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.juego_delete=async(req,res)=>{
    const {id} = req.params;

    await Juego.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};