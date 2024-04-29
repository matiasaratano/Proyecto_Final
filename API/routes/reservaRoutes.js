import { Router } from "express";
import ReservaController from '../controllers/ReservaController.js'


const reservaRoutes = Router()
const reservaController = new ReservaController()

//CRUD
reservaRoutes.post("", reservaController.createReserva)
reservaRoutes.get("", reservaController.getCantReservas)
reservaRoutes.get("/:id", reservaController.getReservaById)
reservaRoutes.get("/user/:id", reservaController.getAllReservasByUser)
reservaRoutes.put("/:id", reservaController.updateReserva)
reservaRoutes.delete("/:id", reservaController.deleteReserva)

export default reservaRoutes