import { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, TextInput, ImageBackground, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TextoEncerrado from '../../components/TextoEncerrado';
import TextoComun from '../../components/TextoComun';
import ReservaFlatlist from '../../components/ReservaFlatList';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import Reserva from '../../components/Reserva';
import ReservaService from '../../services/reservas.js';
import GlobalContext from '../../services/GlobalContext';
import {
  MIS_RESERVAS_SIN_RESERVAS_ALERT1,
  MIS_RESERVAS_SIN_RESERVAS_ALERT2,
  MIS_RESERVAS_SIN_RESERVAS_ALERT3,
  MIS_RESERVAS_CONFIRMAR_RESERVA_ALERT1,
  MIS_RESERVAS_CONFIRMAR_RESERVA_ALERT2,
  MIS_RESERVAS_CONFIRMAR_RESERVA_ALERT3,
  MIS_RESERVAS_CONFIRMAR_RESERVA_ALERT4,
  MIS_RESERVAS_COMPANY_INFO,
  MIS_RESERVAS_ATTENTION_MESSAGE,
} from '../../resources/strings.js';

export default ({ navigation }) => {
  const {
    user,
    setUser,
    listaAReservar,
    setListaAReservar,
    reservas,
    setReservas,
    refresh,
  } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      ReservaService.getReservasByUser(user)
        .then((data) => {
          setReservas(data.message);
        })
        .catch((error) => {
          console.error('Error fetching DB:', error);
        });
    }, [refresh, user])
  );

  const confirmarReserva = () => {
    if (listaAReservar.length === 0) {
      Alert.alert(
        MIS_RESERVAS_SIN_RESERVAS_ALERT1,
        MIS_RESERVAS_SIN_RESERVAS_ALERT2,
        [
          {
            text: MIS_RESERVAS_SIN_RESERVAS_ALERT3,
            onPress: () => console.log('OK Pressed'),
          },
        ]
      );
    } else {
      Alert.alert(
        MIS_RESERVAS_CONFIRMAR_RESERVA_ALERT1,
        MIS_RESERVAS_CONFIRMAR_RESERVA_ALERT2,
        [
          {
            text: MIS_RESERVAS_CONFIRMAR_RESERVA_ALERT3,
            onPress: () => console.log('Volver Pressed'),
            style: 'cancel',
          },
          {
            text: MIS_RESERVAS_CONFIRMAR_RESERVA_ALERT4,
            onPress: handleConfirmacion,
          },
        ]
      );
    }
  };
  const handleConfirmacion = () => {
    navigation.navigate('Revisar Reserva', { fechas: listaAReservar });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextoEncerrado text={MIS_RESERVAS_COMPANY_INFO} fontSize={18} />

        <ReservaFlatlist navigation={navigation} reservas={reservas} />

        <View style={buttons.containerbutton}>
          <Button
            mode="contained"
            onPress={confirmarReserva}
            style={buttons.buttonCustom}
          >
            Confirmar
          </Button>
        </View>
        <View>
          <TextoEncerrado text={MIS_RESERVAS_ATTENTION_MESSAGE} fontSize={18} />
        </View>
      </View>
    </View>
  );
};
