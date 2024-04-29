import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import User from "./user.js";
import ListaReserva from "./ListaReserva.js";
import { ErrorMessage } from "../helpers/ErrorMessages.js";

class UserXLista extends Model { }

UserXLista.init({
    UserId: {
        type: DataTypes.INTEGER(11),
        references: {
            model: User,
            key: "id",
        },
        validate: {
            notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
            isInt: { args: true, msg: ErrorMessage.NOT_INT }
        }
    },
    fecha: {
        type: DataTypes.DATEONLY,
        references: {
            model: ListaReserva,
            key: "id",
        },
        validate: {
            notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
        }
    },
    ingreso: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
        }
    },
}, {
    sequelize: connection,
    modelName: "UserXLista",
})

export default UserXLista
