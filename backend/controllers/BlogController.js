const Blog = require("../models/BlogSchema");

exports.Blog_create = async (req,res) =>{
    const{body} = req;

    const newBlog = new Blog(body);

    await newBlog.save()
    .then((newObject)=> console.log("Success!",newObject))
    .catch((err) => {
        console.error("OH NO!", err)
        res.send(err.errors);
});
    res.send(newBlog);

}

exports.Blog_getById = async (req,res) =>{
    const{id} = req.params;

    const data = await Blog.findById(id).populate('_usuario', 'nombre');

    res.send(data);
}

exports.Blog_update = async(req,res) => {
    const { id } = req.params;
    const { body } = req;

    const blogdb = await Blog.findById(id);

    if(blogdb){
        const data = await Blog.findOneAndUpdate({_id: id}, body,{returnOriginal:false});
        res.send({message:"Registro actualizado con exito",data})
    } 
    else {
        res.send({message:"El registro que intentas actualizar no existe"})
    }
};

exports.Blog_delete = async(req,res)=>{
    const {id} = req.params;

    await Blog.deleteOne({_id: id});

    res.send({message:"Registro eliminado"});
};