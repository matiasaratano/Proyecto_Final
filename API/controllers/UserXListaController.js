import UserXListaService from '../services/UserXListaService/UserXListaService.js';
import User from '../models/User.js';


const userXListaService = new UserXListaService();

class UserXListaController {
    constructor() {}

    async createUserXLista(req, res) {
        try {
            const result = await userXListaService.createUserXLista(req.body);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }

    async getAllUserXLista(req, res) {
        try {
            const result = await userXListaService.getAllUserXLista();
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }

    async getAllUserByIdLista(req, res) {
        try {
            const result = await userXListaService.getAllUserByIdLista(req.params.id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }

    async updateUserXLista(req, res) {
        try {
            const result = await userXListaService.updateUserXLista(req.params.id, req.body);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }

    async deleteUserXLista(req, res) {
        try {
            const result = await userXListaService.deleteUserXLista(req.params.id);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send({ success: false, message: error.message });
        }
    }
}

export default UserXListaController;
