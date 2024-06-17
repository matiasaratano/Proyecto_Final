import { Dimensions, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useContext, useState, useCallback } from 'react';
import TextoEncerrado from '../../components/TextoEncerrado';
import ConfirmarReservasFlatlist from '../../components/ConfirmarReservasFlatlist';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import GlobalContext from '../../services/GlobalContext';
import ReservaService from '../../services/reservas.js';
import { useFocusEffect } from '@react-navigation/native';

export default ({ navigation, route }) => {
  const fechas = route.params && route.params.fechas;

  const navigateConfirm = () => {
    if (!fechas) {
      alert('No se han proporcionado fechas para confirmar la reserva.');
      return;
    }
    ReservaService.createReservas(fechas, user)
      .then((data) => {
        console.log(data);
        if (data.success) {
          alert('Reservas Creadas');
          setClearElegido(!clearElegido);
          setListaAReservar([]);
          navigation.navigate('Tu reserva fue confirmada');
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching:', error);
      });
  };
  const navigateHome = () => {
    setClearElegido(!clearElegido);
    setListaAReservar([]);
    navigation.navigate('Home');
  };
  const {
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
  } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <View>
        <TextoEncerrado
          text="Revisemos los datos de tu reserva!"
          fontSize={18}
        />
        {/* Falta codear como traer datos de la reserva */}
        <View style={{ height: 450 }}>
          <ConfirmarReservasFlatlist
            reservas={fechas}
            navigation={navigation}
          />
        </View>
        <View style={buttons.containerbutton}>
          <Button
            mode="contained"
            onPress={navigateConfirm}
            style={buttons.button}
          >
            Confirmar
          </Button>
          <Button
            mode="contained-tonal"
            onPress={navigateHome}
            style={buttons.button}
          >
            Cancelar
          </Button>
        </View>
      </View>
    </View>
  );
};