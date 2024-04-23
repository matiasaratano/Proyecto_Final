import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GlobalContext from './services/GlobalContext';
import Login from './screens/Login';
import Reservar from './screens/Reservar'
import MisReservas from './screens/MisReservas'
import MiPerfil from './screens/MiPerfil'
import Register from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Drawer = createDrawerNavigator();
  const [user, setUser] = useState()


  return (
<GlobalContext.Provider value={{user , setUser}}>
  <NavigationContainer>
      {
        user?
        <Drawer.Navigator>
        <Drawer.Screen name="Reservar" component={Reservar} />
        <Drawer.Screen name="Mis Reservas" component={MisReservas} />
        <Drawer.Screen name="Mi Perfil" component={MiPerfil} />
      </Drawer.Navigator>
      :
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
      }
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

