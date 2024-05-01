import { Router } from "express";
import ListaEsperaController from '../controllers/ListaEsperaController.js'

const ListaEsperaRoutes = Router()
const ListaEsperaController = new ListaEsperaController


//CRUD ROLES

ListaEsperaRoutes.post("", ListaEsperaController.createListaEspera)
ListaEsperaRoutes.get("", ListaEsperaController.getAllListaEspera)
ListaEsperaRoutes.get("/:id", ListaEsperaController.getListaEsperaById)
ListaEsperaRoutes.put("/:id", ListaEsperaController.updateListaEspera)
ListaEsperaRoutes.delete("", ListaEsperaController.deleteListaEspera)

export default ListaEsperaRoutes