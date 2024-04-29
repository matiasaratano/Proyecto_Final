import { Router } from "express";
import ListaReservaController from '../controllers/ListaReservaController.js'

const listaReservaRoutes = Router()
const listaReservaController = new ListaReservaController


//CRUD ROLES

listaReservaRoutes.post("", listaReservaController.createListaReserva)
listaReservaRoutes.get("", listaReservaController.getAllListaReserva)
listaReservaRoutes.get("/:id", listaReservaController.getListaReservaById)
listaReservaRoutes.put("/:id", listaReservaController.updateListaReserva)
listaReservaRoutes.delete("", listaReservaController.deleteListaReserva)

export default listaReservaRoutes