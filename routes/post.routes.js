import { Router } from "express";

const postRouter = Router();

import ctrl from "../controllers/post.controllers.js";

postRouter.get("/listasPost", ctrl.obtenerPosts);

postRouter.get("/api/id:", ctrl.obtenerPost);
postRouter.post("/creaPost", ctrl.crearPost);

postRouter.put("/actualizarPost/id:", ctrl.actualizarPost);

postRouter.delete("/eliminarPost/:id", ctrl.eliminarPost);

export default postRouter;