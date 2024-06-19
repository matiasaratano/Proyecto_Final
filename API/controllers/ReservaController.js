import {Reserva, User, UserXLista} from '../models/index.js'
import { Sequelize } from 'sequelize';
import { Op } from 'sequelize';
import Formateador from '../services/Formateador/index.js';


const formateador = new Formateador

class ReservaController {
    constructor() { }

    createReserva = async (req, res) => {
        try {
            const { fecha, userId } = req.body;
            
            // Verificamso la disponibilidad de asientos en la oficina
            const reservasExistente = await Reserva.count({where:{fecha:fecha}});
            if (reservasExistente >= 24) {
                return res.status(400).send({ success: false, message: 'No hay asientos disponibles para realizar la reserva.' });
            }

            // Creamos reserva si hay espacio
            const reserva = await Reserva.create({
                fecha:fecha,
                vianda: false,
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
    createReservas = async (req, res) => {
        try {
            const { fechas, userId } = req.body;
            const fechasNoRealizadas = []
            const reservasRealizadas = []

            for(let i = 0 ; i< fechas.length; i++){
            // Verificamso la disponibilidad de asientos en la oficina , sino se agrega a una lista de fechas que no se pudieron realizar por falta de espacio
            const reservasExistente = await Reserva.count({where:{fecha:fechas[i]}});
            if (reservasExistente >= 24) {
                fechasNoRealizadas.push(fechas[i])
            }else{

            // Creamos reserva si hay espacio
            const reserva = await Reserva.create({
                fecha:fechas[i],
                vianda: false,
                UserId: userId
            });
            //Agregamos fecha a lista de reservas realizadas Correctamente
            reservasRealizadas.push(reserva)
        }
        }
            // Se notifica el estado del cierre de la ejecucion
            res.status(200).send({ success: true, message: 'Reservas realizadas satisfactoriamente.', reservasIncompletas: fechasNoRealizadas, reservasCompletas: reservasRealizadas });
        
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Error al crear la reserva.'});
        }
    }

    getReservas = async (req, res) => { 
        try {
            const reservas = await Reserva.findAll({
                include: {
                    model: User
                },
                order: [
                    ['fecha', 'ASC'] // Ordenar por fecha de forma ascendente
                ]
            });
    
            res.status(200).send({ success: true, message: reservas });
        } catch(error) {
            res.status(400).send({ success: false, message: error.message });
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


    getAllReservasByUserForMonth = async (id, month, year) => {
        try {
            const startOfMonth = new Date(year, month - 1, 1);
            const endOfMonth = new Date(year, month, 0);
    
            const reservasTotales = await Reserva.findAll({ 
                attributes: [ 
                    [Sequelize.literal('DATE_FORMAT(fecha, "%Y-%m-%d")'), 'fecha'], // Formato de fecha "yyyy-mm-dd" 
                    [Sequelize.literal('COUNT(*)'), 'cant'] // Contar el número de reservas 
                ],
                group: ['fecha'], // Agrupar por fecha 
                where: {
                    fecha: {
                        [Op.gte]: startOfMonth,
                        [Op.lte]: endOfMonth
                    }
                }
            });
            
            const fechas = formateador.crearFechasDelMes()
            const reservas =  await Reserva.findAll({
                where: { UserId: id },
            })

            
            //console.log("Reservas totales en ReservasController: " + JSON.stringify(reservasTotales, null, 2));
    
            let resultado = formateador.formatearFechas(fechas,reservas,reservasTotales)
            
            // Filtrar los objetos que no tienen reservas nulas
            resultado = resultado.filter(item => item.reserva !== null)

            //console.log("Resultado en ReservasController: " + JSON.stringify(resultado, null, 2));
    
            return resultado ;
        }
        catch (error) {
            console.error(error);
            return [];
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
    updateViandaReserva = async (req,res) => {
        try {
            const {id} = req.params
            const updatedReserva = await Reserva.update({vianda: true},{where: {id:id}})
            if(!updatedReserva) throw new Error("No se pudo modificar vianda")
            res.status(200).send({ success: true, message: updatedReserva });
        }
        catch (error) {
            res.status(400).send({ success: false, message: error.message })
        }
    }



    deleteReserva = async (req, res) => {
        try {
            const {id} = req.params; // Obtenemos el ID de la reserva de los parámetros de la solicitud
            
            // Verificamos si la reserva existe
            const reserva = await Reserva.findByPk(id);
            console.log(reserva)
            if (!reserva) {
                return res.status(400).send({ success: false, message: 'Reserva no encontrada.' });
            }
    
            // Eliminamos la reserva
            await Reserva.destroy({ where: { id: id } });
    

            //Buscamos la persona que ingreso primera a la lista de espera si existe
            const userlista = await UserXLista.findOne({
                where: {
                  fecha: reserva.fecha,
                },
                order: [['ingreso', 'ASC']],
              })
              console.log(userlista)
              if(userlista){
                //Creamos Reserva para Usuario en Lista de Espera
                const nuevaReserva = await Reserva.create({fecha:userlista.fecha,vianda: false, UserId:userlista.UserId })
                console.log(nuevaReserva)
                //Borramos al Usuario de La Lista de Espera
                 await UserXLista.destroy({where:{UserId: userlista.UserId, fecha: userlista.fecha} })
              }

            // Enviamos una respuesta de éxito
            res.status(200).send({ success: true, message: 'Reserva eliminada correctamente.' });
        } catch (error) {
            console.error(error);
            res.status(500).send({ success: false, message: 'Error al eliminar la reserva.' });
        }
    }
}

export default ReservaController