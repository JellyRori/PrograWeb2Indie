const Producto = require("../models/ProductoSchema");

exports.Producto_create = async (req,res) =>{
    const{body} = req;

    const newProducto = new Producto(body);

    await newProducto.save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});
    res.send(newProducto);

}

exports.Producto_getById = async (req,res) =>{
    const{id} = req.params;

    const data = await Producto.findById(id).populate('_usuario', 'nombre');

    res.send(data);
}

exports.Producto_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const productodb = await Producto.findById(id);

    if(productodb){
        const data = await Producto.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.Producto_delete = async(req,res)=>{
    const {id} = req.params;

    await Producto.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};