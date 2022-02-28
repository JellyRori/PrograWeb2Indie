const Historial = require("../models/HistorialSchema");

exports.Historial_create = async (req,res) =>{
    const{body} = req;

    const newHistorial = new Historial(body);

    await newHistorial.save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});
    res.send(newHistorial);

}

exports.Historial_getById = async (req,res) =>{
    const{id} = req.params;

    const data = await Historial.findById(id).populate('_producto', 'nombre descripcion _usuario');

    res.send(data);
}

exports.Historial_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const historialdb = await Historial.findById(id);

    if(historialdb){
        const data = await Historial.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.Historial_delete = async(req,res)=>{
    const {id} = req.params;

    await Historial.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};