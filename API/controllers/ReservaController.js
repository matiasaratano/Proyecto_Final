import {Reserva} from '../models/index.js'
import { Sequelize } from 'sequelize';
import Formateador from '../services/Formateador/index.js';

const formateador = new Formateador

class ReservaController {
    constructor() { }

    createReserva = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }



    // Devuelve La cantidad de Reservas por dia si existe alguna reserva
    getCantReservas = async (req,res) => {
        try {
            const reservas = await Reserva.findAll({ attributes: [ [Sequelize.literal('DATE_FORMAT(fecha, "%Y-%m-%d")'), 'fecha'], 
            // Formato de fecha "dd/mm/yyyy" 
            [Sequelize.literal('COUNT(*)'), 'cant'] 
            // Contar el número de reservas 
          ],
             group: ['fecha'] 
             // Agrupar por fecha 
          })
            res.status(200).send({ success: true, message: reservas });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }


    getReservaById = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }



    getAllReservasByUser = async (req,res) => {
        try {
            const { id } = req.params;
            const reservasTotales = await Reserva.findAll({ attributes: [ [Sequelize.literal('DATE_FORMAT(fecha, "%Y-%m-%d")'), 'fecha'], 
            // Formato de fecha "dd/mm/yyyy" 
            [Sequelize.literal('COUNT(*)'), 'cant'] 
            // Contar el número de reservas 
          ],
             group: ['fecha'] 
             // Agrupar por fecha 
          })
            const fechas = formateador.crearFechas()
            const reservas =  await Reserva.findAll({
                where: { UserId: id },
            })

            const resultado = formateador.formatearFechas(fechas,reservas,reservasTotales)


            res.status(200).send({ success: true, message: resultado });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }



    updateReserva = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }



    deleteReserva = async (req,res) => {
        try {
            res.status(200).send({ success: true, message: "User" });

        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }

}

export default ReservaController