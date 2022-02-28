const Empleo = require("../models/EmpleoSchema");

exports.Empleo_create = async (req,res) =>{
    const{body} = req;

    const newEmpleo = new Empleo(body);

    await newEmpleo.save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});
    res.send(newEmpleo);

}

exports.Empleo_getById = async (req,res) =>{
    const{id} = req.params;

    const data = await Empleo.findById(id).populate('_usuario', 'nombre');

    res.send(data);
}

exports.Empleo_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const empleodb = await Empleo.findById(id);

    if(empleodb){
        const data = await Empleo.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.Empleo_delete = async(req,res)=>{
    const {id} = req.params;

    await Empleo.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};