import User from '../../models/User.js';
import ListaEspera from '../../models/ListaEspera.js';

class UserXListaService {
    constructor() {}

    async createUserXLista(userData) {
        try {
            const newUser = await User.create(userData);
            return { success: true, data: newUser };
        } catch (error) {
            throw new Error('Error al crear usuario en la lista de espera: ' + error.message);
        }
    }

    async getAllUserXLista() {
        try {
            const allUsers = await User.findAll({ include: ListaEspera });
            return { success: true, data: allUsers };
        } catch (error) {
            throw new Error('Error al obtener todos los usuarios en la lista de espera: ' + error.message);
        }
    }





    async deleteUserXLista(userId) {
        try {
            const deletedRowCount = await User.destroy({ where: { id: userId } });
            if (deletedRowCount === 0) {
                throw new Error('El usuario no fue encontrado');
            }
            return { success: true, message: 'Usuario eliminado correctamente de la lista de espera' };
        } catch (error) {
            throw new Error('Error al eliminar usuario de la lista de espera: ' + error.message);
        }
    }
}

export default UserXListaService;
