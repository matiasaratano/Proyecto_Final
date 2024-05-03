import { Router } from "express";
import UserXListaController from '../controllers/UserXListaController.js'


const userXListaRoutes = Router()
const userXListaController = new UserXListaController

//CRUD ROLES
userXListaRoutes.post("", userXListaController.createUserXLista)
userXListaRoutes.get("", userXListaController.getAllUserXLista)
userXListaRoutes.delete("/:id", userXListaController.deleteUserXLista)


export default userXListaRoutes