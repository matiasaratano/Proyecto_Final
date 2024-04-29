class UserXListaController {
    constructor() { }

    createUserXLista = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }
    getAllUserXLista = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }
    getAllUserByIdLista = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }
    updateUserXLista = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }
    deleteUserXLista = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }

}

export default UserXListaController