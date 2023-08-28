import usuario from "./usuario.js";
import post from "./post.js";
import comentario from "./comentario.js";
import app from "../app.js";
import sequelize from "../database.js";
import dotenv from "dotenv";
dotenv.config()
const port = process.env.PORT;

usuario.hasMany(post,{foreignKey:"userid", as: "posts"});
post.belongsTo(usuario, {foreignKey:"userid",as: "usuarios"});

usuario.hasMany(comentario,{foreignKey:"usuarioid", as: "comentarios"});
comentario.belongsTo(usuario,{foreignKey:"usuarioid", as: "usuarios"});

post.hasMany(comentario,{foreignKey:"postid",as: "comentarios"});
comentario.belongsTo(post,{foreignKey:"postid",as: "posts"});


sequelize.sync({ force: false }).then(() => {
    console.log('Tablas sincronizadas');
    app.listen(port, () => {
        console.log(`sevidor en http://localhost:${port}`);
    });
}).catch(error => {
    console.error('Error al sincronizar tablas:', error);
});
