import post from "../models/post.js";

const ctrl = {};

ctrl.renderPost = (req, res) => {
    res.render("listado-post");
}

ctrl.renderNuevoPost = (req, res) => {
    res.render("nuevo-post");
}

ctrl.renderEditarPost = (req, res) => {
    const {id} = req.params;
    res.render("editar-post");
}

//CRUD

ctrl.obtenerPosts = async (req, res) => {
    try{
        const posts = await post.findAll ({
            where:{
                estado:true
            }
        });
        return res.json(posts);
    }catch (error) {
        console.log("Error al obtener los datos", error);
        return res.status(500).json({message:"Hubo un problema"});
    }
}


ctrl.obtenerPost = async (req, res) => {
    try{
        const {id} = req.params;
        const post = await post.findByPk(id);
        return res.json(post);
    }catch (error) {
        console.log('Error en el controlador', error );
        return res.status(401).send({message:"el id no existe"});
    }
}

ctrl.crearPost = async (req,res) => {
    const {
        titulo,
        contenido
    }= req.body;
    
    try {
        const nuevoPost = new post({
            titulo,
            contenido
        });
        await nuevoPost.save();
        return res.status(201).json({message:"post creado con éxito"})
    }catch (error) {
        console.log("Error al crear el post",error);
        return res.status(500).json({message:"Error al crear un nuevo post"});
    }
}

ctrl.actualizarPost =  async (req ,res)=>{
    try {
        const {id} = req.params;
        const post = await post.findByPk(id);
        await post.update(req.body)
        return res.json({
            message:"Post actualizada exitosamente"
        });
    }catch (error){
        console.log ("Error al actualizar el Post ", error );
        return res.status(500).json({message:"Error al actualizar el post"})
    }
}


ctrl.eliminarPost = async (req, res) => {
    const {id} = req.params;
    try {
        const post = await post.findByPk(id);
        await post.update({estado:false});
        return res.json({message:"El post se elimino correctamente"});
    }catch(error) {
        console.log ("Error al eliminar el post", error );
        return res.status(500).json({message:"Error al elminar el post"});
    }
}

export default ctrl