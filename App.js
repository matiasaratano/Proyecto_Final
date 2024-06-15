import React, { useEffect, useState } from 'react';
import { Text, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GlobalContext from './services/GlobalContext';
import Login from './screens/Login/index.js';
import Home from './screens/Home/index.js';
import asyncStorage from './services/asyncStorage';
import { registerForPushNotificationsAsync } from './notificationHelper';
import * as Notifications from 'expo-notifications';
import { firebase } from './firebase.js'; // Importa tu configuración de Firebase

const Drawer = createDrawerNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [listaAReservar, setListaAReservar] = useState([]);
  const [reservas, setReservas] = useState();
  const [refresh, setRefresh] = useState();
  const [clearElegido, setClearElegido] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuth = firebase
      .auth()
      .onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await asyncStorage.getData('Token');
      if (token) {
        setUser(token);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const storeToken = async () => {
      if (user) {
        asyncStorage.storeData('Token', user);
      } else {
        asyncStorage.clearAll();
      }
    };

    storeToken();
  }, [user]);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      // Guardar el token en AsyncStorage o donde sea necesario
      asyncStorage.storeData('Token', token);
    });

    // Handle notifications when the app is foreground
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
        Alert.alert('A new FCM message arrived!', JSON.stringify(notification));
      }
    );

    // Clean up the listener on unmount
    return () => subscription.remove();
  }, []);

  const handleLogout = async () => {
    await asyncStorage.removeData('Token');
    setUser(null);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

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
            <Drawer.Screen
              name="Logout"
              component={Login}
              listeners={{ focus: handleLogout }}
              options={{
                drawerLabel: () => <Text style={{ color: 'red' }}>Logout</Text>,
              }}
            />
          </Drawer.Navigator>
        ) : (
          <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Inicio Sesion" component={Login} />
            <Drawer.Screen name="Home" component={Home} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}
