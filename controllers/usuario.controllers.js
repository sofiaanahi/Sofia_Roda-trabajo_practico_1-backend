import usuario from "../models/usuario.js";

const ctrl = {};

ctrl.renderUsuario = (req, res) => {
    res.render("listado-usuario");
}

ctrl.renderNuevoUsuario = (req, res) => {
    res.render("nuevo-usuario");
}



// CRUD

ctrl.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await usuario.findAll ({
            where: {
                estado: true
            }
        });
        return res.json(usuarios);
    }catch (error) {
        console.log("Error al obtener los datos", error);
        return res.status(500).json(
            {message:"No se pudo realizar la operación"});
    }
}

ctrl.obtenerUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await usuario.findByPk(id);
        return res.json(usuario);
    }catch (error) {
        console.log('Error en el controlador', error );
        return  res.status(401).send({ message:"El id no existe"});

    }
}


ctrl.crearUsuario = async (req, res) => {
    const {
        nombre_user,
        email,
        contraseña
    } = req.body;
    
    try {
        const nuevoUsuario = new usuario({
            nombre_user,
            email,
            contraseña 
        });

        await nuevoUsuario.save();

        return res.status(201).json({ message: "Usuario creado con éxito"});
    } catch(error){
        console.log("Error al crear el Usuario", error);
        return res.status(500).json({message:"Error al crear un nuevo Usuario"});
    }
}

export default ctrl;