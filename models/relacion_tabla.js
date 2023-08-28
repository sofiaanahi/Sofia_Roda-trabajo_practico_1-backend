import usuario from "./usuario";
import post from "./post";
import comentario from "./comentario";

usuario.hasMany(post,{onDelete:"CASCADE"});
post.belongsTo(usuario);

usuario.hasMany(comentario,{onDelete: "CASCADE"});
comentario.belongsTo(usuario);

post.hasMany(comentario,{onDelete:"CASCADE"});
comentario.belongsTo(post);



