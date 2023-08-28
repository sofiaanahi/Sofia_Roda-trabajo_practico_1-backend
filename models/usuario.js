

import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const usuario = sequelize.define(
    "usuario",{

    id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    nombre_user : {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email : {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    contraseña : {
        type:DataTypes.STRING,
        allowNull: false,
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
        tableName: "usuarios"
    }
); 

usuario.sync({force:false}).then(()=>{
    console.log("tabla de usuario creado");
});


export default usuario;