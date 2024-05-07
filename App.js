import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GlobalContext from './services/GlobalContext';
import Login from './screens/Login';
import Reservar from './screens/Reservar';
import MisReservas from './screens/MisReservas';
import MiPerfil from './screens/MiPerfil';
import Register from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import RevisarReserva from './screens/RevisarReserva';
import ListaDeEspera from './screens/ListaDeEspera';
import VerificarInicioSesion from './screens/VerificarInicioSesion';
import EnvioPassword from './screens/EnvioPassword';
import ReservaConfirmada from './screens/ReservaConfirmada';
import Home from './screens/Home';
import VerificarReserva from './screens/VerificarReserva';

export default function App() {
  const Drawer = createDrawerNavigator();
  const [user, setUser] = useState();

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? (
          <Drawer.Navigator>
            <Drawer.Screen name="Reservar" component={Reservar} />
            <Drawer.Screen name="Mis Reservas" component={MisReservas} />
            <Drawer.Screen name="Mi Perfil" component={MiPerfil} />
          </Drawer.Navigator>
        ) : (
          <Drawer.Navigator>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="Revistar Reserva" component={RevisarReserva} />
            <Drawer.Screen name="Lista de Espera" component={ListaDeEspera} />
            <Drawer.Screen
              name="Verificar Inicio de Sesion"
              component={VerificarInicioSesion}
            />
                        <Drawer.Screen
              name="Verificar tu reserva"
              component={VerificarReserva}
            />
            <Drawer.Screen
              name="Envío de contraseña"
              component={EnvioPassword}
            />
            <Drawer.Screen
              name="Tu reserva fue confirmada"
              component={ReservaConfirmada}
            />
            <Drawer.Screen name="Home" component={Home} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
