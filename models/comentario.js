import { DataTypes } from "sequelize";
import sequelize from "../database";

const comentario = sequelize.define(
    "comentario",
    // modelo de los atributos y definicion de los mismos 

    id = {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text = {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tablaName:"comentarios",
    }

);

comentario.sync({force: false}).then(()=>{
    console.log("Tabla de comentarios creado");
});

module.exports = comentario;