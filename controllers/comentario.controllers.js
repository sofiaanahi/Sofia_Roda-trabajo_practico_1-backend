import comentario from "../models/comentario.js";

const ctrl = {};

ctrl.renderComentario = (req, res) => {
    res.render("listado-comentario");
}

ctrl.renderNuevoComentario = (req, res) => {
    res.render("nuevo-comentario");
}

//CRUD

ctrl.obtenerComentarios = async (req, res) => {
    try {
        const comentarios = await comentario.findAll ({
            where: {
                estado: true
            }
        });
        return res.json(comentarios);
    }catch (error) {
        console.log("Error al obtener los datos", error);
        return res.status(500).json(
            {message:"No se pudo realizar la operación"});
    }
}

ctrl.obtenerComentario = async (req, res) => {
    try {
        const {id} = req.params;
        const comentarioB = await comentario.findByPk(id);
        return res.json(comentarioB);
    }catch (error) {
        console.log('Error en el controlador', error );
        return  res.status(401).send({ message:"El id no existe"});

    }
}

ctrl.crearComentario=async (req,res)=> {
    const {
        text
    } =req.body;

    try {
        const nuevoComentario = new comentario({
            text
        });
        await nuevoComentario.save()
        return res.status(201).json({message:"Comentario creado con éxito"});
    }catch(error){
        console.log("Error al crear el comentario", error);
        return res.status(500).json({message: "Error al crear un nuevo comentario"});
    }
}

export default ctrl;