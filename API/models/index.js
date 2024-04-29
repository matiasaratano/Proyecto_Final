import ListaReserva from "./ListaReserva.js";
import Reserva from "./Reserva.js";
import User from "./user.js";
import UserXLista from "./UserXLista.js";

User.hasMany(Reserva)
Reserva.belongsTo(User)
User.belongsToMany(ListaReserva, {through: UserXLista, foreignKey: 'UserId', uniqueKey: false})
ListaReserva.belongsToMany(User, {through: UserXLista, foreignKey:'fecha', uniqueKey: false})

export  {User,Reserva,ListaReserva,UserXLista}