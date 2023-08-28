

import { DataTypes } from "sequelize";
import sequelize from "../database";

const usuario = sequelize.define(
    "usuario",

    id = {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    nombre_user = {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email = {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    contraseña = {
        type:DataTypes.STRING,
        allowNull: false,
    },
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


Modele.exports = usuario;