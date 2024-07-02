import React from 'react';
import { View, Linking } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import TextoEncerrado from '../../components/TextoEncerrado';
import TextoComun from '../../components/TextoComun';
import ReservaService from '../../services/reservas.js';
import GlobalContext from '../../services/GlobalContext';
import { useContext } from 'react';

export default ({ navigation , route }) => {
  const { reserva } = route.params;
  const texto = "Dia: " + reserva.fecha
  const {
    refresh,
    setRefresh,
  } = useContext(GlobalContext);
  const navigateToLogin = () => {
    navigation.navigate('Home');
  };

  const handleVianda = () => {
    ReservaService.updateVianda(reserva.id)
      .then((data) => {
        if (data.success) {
          alert('Se da aviso de vianda a RRHH');
          setRefresh(!refresh);
          Linking.openURL('https://www.google.com').catch((err) => console.error('An error occurred', err));
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextoEncerrado
          text="Revisemos los datos de tu reserva!"
          fontSize={18}
        />
        {/* Falta codear como traer datos de la reserva */}
        <View>
        <TextoComun text="Reserva de escritorio." fontSize={16} />
          <TextoComun text={texto} fontSize={14} />
          <TextoComun text="Horario: 9 hs a 18 hs" fontSize={14} />
        </View>

        <TextoEncerrado
          text="Reserva tu vianda antes del viernes a las 16hs!"
          fontSize={14}
        />

        <View style={buttons.containerbutton}>
          <Button
            mode="contained"
            onPress={handleVianda}
            style={buttons.button}
          >
            Viandas
          </Button>
          <Button
            mode="contained-tonal"
            onPress={navigateToLogin}
            style={buttons.button}
          >
            Volver
          </Button>
        </View>
      </View>
    </View>
  );
};
