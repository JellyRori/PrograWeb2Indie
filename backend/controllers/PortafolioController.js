const Portafolio = require("../models/PortafolioSchema");

exports.Portafolio_create = async (req,res) =>{
    const{body} = req;

    const newPortafolio = new Portafolio(body);

    await newPortafolio.save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});
    res.send(newPortafolio);

}

exports.Portafolio_getById = async (req,res) =>{
    const{id} = req.params;

    const data = await Portafolio.findById(id).populate('_usuario', 'nombre');

    res.send(data);
}

exports.Portafolio_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const portafoliodb = await Portafolio.findById(id);

    if(portafoliodb){
        const data = await Portafolio.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.Portafolio_delete = async(req,res)=>{
    const {id} = req.params;

    await Portafolio.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};