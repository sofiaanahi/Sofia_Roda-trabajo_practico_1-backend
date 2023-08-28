import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const post = sequelize.define(
    "post",{
    id : {
        type: DataTypes.INTEGER,
        primaryKey : true ,
        autoIncrement: true,
    },
    titulo:{
        type:DataTypes.STRING,
        allownull: false,
    },
    contenido:{
        type: DataTypes.TEXT("long"),
        allownull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      }},
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