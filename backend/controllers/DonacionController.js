const Donacion = require("../models/DonacionSchema");

exports.Donacion_create = async (req,res) =>{
    const{body} = req;

    const newDonacion = new Donacion(body);

    await newDonacion.save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});
    res.send(newDonacion);

}

exports.donacion_getById = async (req,res) =>{ 
    const{id} = req.params;

    const data = await Donacion.findById(id).populate('_usuario', 'nombre');

    res.send(data);
}

exports.Donacion_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const donaciondb = await Donacion.findById(id);

    if(donaciondb){
        const data = await Donacion.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.Donacion_delete = async(req,res)=>{
    const {id} = req.params;

    await Donacion.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};