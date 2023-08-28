import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { sequelize }  from "./database.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// middleware

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// conexión a la base de datos 

sequelize
.authenticate()
.then(() => console.log("Conexión a la base de datos EXITOSA"))
.catch((error) => console.log("Error al conectar a la base de datos", error));

// rutas

//app.use(require("./routes"));

// manejo de ruta no encontrada (404)

app.use((req, res, next) => {
    return res.status(404).render("404");
});

// inicio del servidor

app.listen(port, () => {
    console.log(`sevidor en http://localhost:${port}`);
});