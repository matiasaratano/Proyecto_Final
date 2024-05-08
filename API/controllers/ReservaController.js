import {Reserva} from '../models/index.js'
import { Sequelize } from 'sequelize';
import Formateador from '../services/Formateador/index.js';

const formateador = new Formateador

class ReservaController {
    constructor() { }

    createReserva = async (req, res) => {
        try {
            const { fecha, vianda, userId } = req.body;
            
            // Verificamso la disponibilidad de asientos en la oficina
            const reservasExistente = await Reserva.count();
            if (reservasExistente >= 24) {
                return res.status(400).send({ success: false, message: 'No hay asientos disponibles para realizar la reserva.' });
            }

            // Creamos reserva si hay espacio
            const reserva = await Reserva.create({
                fecha,
                vianda,
                UserId: userId
            });

            // Actualizamos disponibilidad de asientos
            const asientosDisponibles = 24 - reservasExistente - 1; // Restamos 1 por la reserva actual
            console.log(`Quedan ${asientosDisponibles} asientos disponibles.`);

            // Se notifica el estado del cierre de la ejecucion
            res.status(200).send({ success: true, message: 'Reserva realizada satisfactoriamente.' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Error al crear la reserva.' });
        }
    }



    // Devuelve La cantidad de Reservas por dia si existe alguna reserva
    getCantReservas = async (req,res) => {
        try {
            const reservas = await Reserva.findAll({ attributes: [ [Sequelize.literal('DATE_FORMAT(fecha, "%Y-%m-%d")'), 'fecha'], 
            // Formato de fecha "yyyy-mm-dd" 
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
            // Formato de fecha "yyyy-mm-dd" 
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



    deleteReserva = async (req, res) => {
        try {
            const { reservaId } = req.params; // Obtenemos el ID de la reserva de los parámetros de la solicitud
            
            // Verificamos si la reserva existe
            const reserva = await Reserva.findByPk(reservaId);
            if (!reserva) {
                return res.status(404).send({ success: false, message: 'Reserva no encontrada.' });
            }
    
            // Eliminamos la reserva
            await reserva.destroy();
    
            // Enviamos una respuesta de éxito
            res.status(200).send({ success: true, message: 'Reserva eliminada correctamente.' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Error al eliminar la reserva.' });
        }
    }
}

export default ReservaController