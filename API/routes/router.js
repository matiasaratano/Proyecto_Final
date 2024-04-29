import { Router } from "express";
import userRoutes from "./userRoutes.js";
import reservaRoutes from "./reservaRoutes.js";
import listaReservaRoutes from "./listaReservaRoutes.js";
import userXListaRoutes from "./userXListaRoutes.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/reserva", reservaRoutes);
router.use("/listaReserva", listaReservaRoutes);
router.use("/userXLista", userXListaRoutes);

export default router