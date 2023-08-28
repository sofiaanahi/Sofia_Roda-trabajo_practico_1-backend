import { Router } from "express";

const router = Router();

import ctrl from "../controllers/comentario.controllers.js";

router.get("/listaComentario", ctrl.obtenerComentarios);


router.get("/obtenerComentario/:id", ctrl.obtenerComentario);
router.post("/creaComentario", ctrl.crearComentario);

export default router;