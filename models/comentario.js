import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const comentario = sequelize.define(
    "comentario", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: DataTypes.TEXT,
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
        tablaName:"comentarios",
    }

  );

comentario.sync({force: false}).then(()=>{
    console.log("Tabla de comentarios creado");
});

export default comentario;