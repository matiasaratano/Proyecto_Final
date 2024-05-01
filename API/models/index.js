import ListaEspera from "./ListaEspera.js";
import Reserva from "./Reserva.js";
import User from "./user.js";
import UserXLista from "./UserXLista.js";

User.hasMany(Reserva)
Reserva.belongsTo(User)
User.belongsToMany(ListaEspera, {through: UserXLista, foreignKey: 'UserId', uniqueKey: false})
ListaEspera.belongsToMany(User, {through: UserXLista, foreignKey:'fecha', uniqueKey: false})

export  {User,Reserva,ListaEspera,UserXLista}