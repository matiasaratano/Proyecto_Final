import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import { ErrorMessage } from "../helpers/ErrorMessages.js";

class User extends Model { }

User.init(
  {
    userPassword: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: ErrorMessage.EMPTY_FIELD },
        isEmail: { args: true, msg: ErrorMessage.NOT_EMAIL },
      },
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

export default User;