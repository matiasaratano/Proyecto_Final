import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GlobalContext from './services/GlobalContext';
import Login from './screens/Login';
import Reservar from './screens/Reservar';
import MisReservas from './screens/MisReservas';
import MiPerfil from './screens/MiPerfil';
// import Register from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import RevisarReserva from './screens/RevisarReserva';
import ListaDeEspera from './screens/ListaDeEspera';
import VerificarInicioSesion from './screens/VerificarInicioSesion';
import EnvioPassword from './screens/EnvioPassword';
import ReservaConfirmada from './screens/ReservaConfirmada';
import Home from './screens/Home';
import VerificarReserva from './screens/VerificarReserva';
import asyncStorage from './services/asyncStorage';

export default function App() {
  const Drawer = createDrawerNavigator();
  const [user, setUser] = useState();
  const [reservas, setReservas] = useState();
  const [listaAReservar, setListaAReservar] = useState([]);
  const [refresh, setRefresh] = useState();
  const [clearElegido, setClearElegido] = useState();
  const [loading, setLoading] = useState(true);

  const handleLogout = async() => {
    await asyncStorage.removeData('Token');
    setUser(null);
    // console.log('Cerrando sesión...');
  };

  useEffect(() => {
    const fetchToken = async () => {
      const token = await asyncStorage.getData('Token');
      if (token) {
        // console.log('Valor de token: ' + token)
        setUser( token );
      }else{
        // console.log('No hay token')
      }
      setLoading(false);
    };
  
    fetchToken();
  }, []);

  useEffect(() => {
    if (!loading){
      if(user){
        // console.log('Se carga Cache con Datos')
        // console.log(user)
        asyncStorage.storeData('Token', user)
      }else{
        // console.log("valor de user: " + user)
        // console.log('Se limpia la cache al deslogear')
        asyncStorage.clearAll()
      }
    };
  }, [user, loading])

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        listaAReservar,
        setListaAReservar,
        reservas,
        setReservas,
        refresh,
        setRefresh,
        clearElegido, 
        setClearElegido,
      }}
    >
        <NavigationContainer>
  {user ? (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Reservar" component={Reservar} />
      <Drawer.Screen name="Mis Reservas" component={MisReservas} />
      <Drawer.Screen name="Mi Perfil" component={MiPerfil} />
      <Drawer.Screen
        name="Login"
        component={Login}
        listeners={{ focus: handleLogout }}
        options={{
          drawerLabel: () => <Text style={{ color: 'red' }}>Logout</Text>,
        }}
      />
    </Drawer.Navigator>
  ) : (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={Login} />
      {/* <Drawer.Screen name="Register" component={Register} /> */}
      <Drawer.Screen name="Revisar Reserva" component={RevisarReserva} />
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