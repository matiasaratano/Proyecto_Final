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

    async getAllUserByIdLista(listaEsperaId) {
        try {
            const usersInLista = await User.findAll({ include: [{ model: ListaEspera, where: { id: listaEsperaId } }] });
            return { success: true, data: usersInLista };
        } catch (error) {
            throw new Error('Error al obtener usuarios por ID de lista de espera: ' + error.message);
        }
    }

    async updateUserXLista(userId, updatedData) {
        try {
            const [updatedRowsCount] = await User.update(updatedData, { where: { id: userId } });
            if (updatedRowsCount === 0) {
                throw new Error('El usuario no fue encontrado');
            }
            const updatedUser = await User.findByPk(userId);
            return { success: true, data: updatedUser };
        } catch (error) {
            throw new Error('Error al actualizar usuario en la lista de espera: ' + error.message);
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
