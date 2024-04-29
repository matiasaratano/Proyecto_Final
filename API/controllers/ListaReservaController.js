class ListaReservaController {
    constructor() { }

    createListaReserva = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }


    getAllListaReserva = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }



    getListaReservaById = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }



    updateListaReserva = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }

    
    deleteListaReserva = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }

}

export default ListaReservaController