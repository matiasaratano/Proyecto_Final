import User from '../../models/User.js';

class UserService {
    constructor() { }



    async createUser(userData){
        try {
            const newUser = await User.create(userData);
            return {success: true, data: newUser};
        }
        catch (error) {
            throw new Error('Error al crear el usuario: ' + error.message);
        }
    };


    async getAllUsers(){
        try {
            const allUsers = await User.findAll({
                attributes: ["userId", "fullName", "userPassword", "email", "role", "bossId"]
            });
            return { success: true, data: allUsers };
        }
        catch (error) {
            throw new Error('Error al traer a todos los usuarios: ' + error.message);
        }
    };



    async getUserById(id) {
        try {
            const UserByid = await User.findByPk(id, {
                attributes: ['userId', 'fullName', 'userPassword', 'email', 'role', "bossId"]
            })
            if (!UserByid) throw new Error("Error al traer el usuario con ese ID")
            return { success: true, data: UserByid };
        }
        catch (error) {
            throw new Error(error.message);
        }
    };



    async updateUser(id, updatedData) {
        try {
            const updatedRowsCount = await User.update(updatedData, { where: { userId: id } })
            if (updatedRowsCount === 0) throw new Error("No se encontró a un usuario con ese ID")
            
            const updatedUser = await User.findByPk(id);
            return { success: true, data: updatedUser };
        }
        catch (error) {
            throw new Error('Error al actualizar el usuario: ' + error.message);
        }
    };




    async deleteUser(id) {
        try {
            const deletedRowCount = await User.destroy({ where: { userId: id } });
            if (deletedRowCount === 0) throw new Error("No se encontró a un usuario con ese ID")
            
            return { success: true, message: "Usuario eliminado exitosamente" };
        }
        catch (error) {
            throw new Error('Error al eliminar el usuario: ' + error.message);
        }
    };


    
    login = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }

}

export default UserService;