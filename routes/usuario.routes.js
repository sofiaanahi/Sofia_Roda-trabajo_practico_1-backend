import { Router } from "express";

const usuarioRouter = Router();

import ctrl from "../controllers/usuario.controllers.js";

usuarioRouter.get("/listasUsuarios",ctrl.obtenerUsuarios);


usuarioRouter.get("/api/:id",ctrl.obtenerUsuario);
usuarioRouter.post("/creaUsuario",ctrl.crearUsuario);

export default usuarioRouter;