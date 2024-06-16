import { Op } from 'sequelize';
import  User  from '../../models/User.js';
import { Sequelize } from 'sequelize';
import ReservaController from '../../controllers/ReservaController.js';

class ReportService {
    constructor() {}

    generateReport = async (month, year) => {
        const users = await User.findAll({
            where: Sequelize.where(
                Sequelize.fn('lower', Sequelize.col('role')), {
                    [Op.notIn]: ['admin', 'rrhh']
                }
            )
        });

        const report = [];

        // Crear una instancia de ReservaController
        const reservaController = new ReservaController();

        for (let user of users) {
            // Llamar al método en la instancia de ReservaController
            const reservasTotales = await reservaController.getAllReservasByUserForMonth(user.userId, month, year);
            console.log("Reservas totales en ReportService: " + reservasTotales);


            const numReservas = reservasTotales.length;
            const numAusentes = reservasTotales.filter(reserva => reserva.presente === false).length;
            const presentismo = numReservas > 0 ? 100 * (numReservas - numAusentes) / numReservas : 0;

            report.push({
                userId: user.userId,
                presentismo: presentismo,
                numReservas: numReservas,
                numAusentes: numAusentes
            });
        }

        return report;
    }
}

export default ReportService;