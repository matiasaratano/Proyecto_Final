import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GlobalContext from './services/GlobalContext';
import Login from './screens/Login/index.js';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home/index.js';
import asyncStorage from './services/asyncStorage';
import useNotification from './services/useNotification.js';
import LogoTitle from './components/LogoTitle/index.js';

export default function App() {
  const Drawer = createDrawerNavigator();
  const [user, setUser] = useState();
  const [reservas, setReservas] = useState();
  const [listaAReservar, setListaAReservar] = useState([]);
  const [refresh, setRefresh] = useState();
  const [clearElegido, setClearElegido] = useState();
  const [loading, setLoading] = useState(true);
  const  expoPushToken = useNotification();

  

  const handleLogout = async() => {
    await asyncStorage.removeData('Token');
    setUser(null);

  };

  useEffect(() => {
    const fetchToken = async () => {
      const token = await asyncStorage.getData('Token');
      if (token) {
        setUser( token );
      }
      setLoading(false);
    };
  
    fetchToken();
  }, []);

  useEffect(() => {
    if (!loading){
      if(user){
        asyncStorage.storeData('Token', user)
      }else{
        asyncStorage.removeData('Token');
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
            <Drawer.Screen name="Home" component={Home} options={
                        {
                              headerBackVisible: false,
                              headerTitle: () => <LogoTitle />,
                        }} />

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
            <Drawer.Screen name="Inicio Sesion" component={Login} options={
                        {
                              headerBackVisible: false,
                              headerTitle: ""
                        }} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}