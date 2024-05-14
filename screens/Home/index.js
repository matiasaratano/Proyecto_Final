import { useContext, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, TextInput, ImageBackground , Alert} from 'react-native';
import { Text, Button } from 'react-native-paper';
import TextoEncerrado from '../../components/TextoEncerrado';
import TextoComun from '../../components/TextoComun';
import ReservaFlatlist from '../../components/ReservaFlatList';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import Reserva from '../../components/Reserva';
import ReservaService from '../../services/reservas.js';
import GlobalContext from '../../services/GlobalContext';

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
      ReservaService.getReservasByUser(1)
        .then((data) => {
          setReservas(data.message);
        })
        .catch((error) => {
          console.error('Error fetching mazos:', error);
        });
    }, [refresh])
  );

  const confirmarReserva = () =>
    Alert.alert(
      'Confirmacion de Reserva',
      'Seguro quieres Confirmar la Reserva?',
      [
        {
          text: 'Volver',
          onPress: () => console.log('Volver Pressed'),
          style: 'cancel',
        },
        { text: 'OK, Confirmar', onPress: handleConfirmacion },
      ]
    );

    const handleConfirmacion = () =>{
      navigation.navigate('Revisar Reserva', {fechas: listaAReservar})
    }
  return (
    <View style={styles.container}>
      <View>
        <TextoEncerrado
          text="Agregar Logo o info de la empresa que sea util para el HOME"
          fontSize={18}
        />

        <ReservaFlatlist navigation={navigation} reservas={reservas} />

        <View style={buttons.containerbutton}>
          <Button mode="contained" onPress={confirmarReserva} style={buttons.button}>
            Confirmar
          </Button>
        </View>
        <View>
          <TextoEncerrado
            text="ATENCIÓN! Si es imprescindible que visites la oficina, por favor comunícate con RRHH para buscar una solución."
            fontSize={18}
          />
        </View>
      </View>
    </View>
  );
};
