import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

//se crea la conexión a la base de datos
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT,
    }
);


export {sequelize, DataTypes};