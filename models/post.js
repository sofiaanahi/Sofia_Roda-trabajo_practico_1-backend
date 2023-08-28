import { DataTypes } from "sequelize";
import sequelize from "../database";



const post = sequelize.define(
    "post",
    // modelo de los atributos y definicion de los mismos

    id = {
        type: DataTypes.INTEGER,
        primaryKey : true ,
        autoIncrement: true,
    },
    titulo ={
        type:DataTypes.STRING,
        allownull: false,
    },
    contenido = {
        type: DataTypes.TEXT("long"),
        allownull: false,
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tablaName: "posts",
    }
);

post.sync({force: false}).then(()=>{
    console.log('tabla de post creada');
});

export default post;