import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import TextoEncerrado from '../../components/TextoEncerrado';
import TextoComun from '../../components/TextoComun';

export default function VerificarReserva({ navigation }) {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleViandasPress = () => {
    Alert.alert(
      'Aca direccionariamos al form de Capital Humano?',
      'Mientras aprovecho para probar la funcion Alert que me gusto ;)',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Aceptar', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
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
          <TextoComun text="Día:" fontSize={14} />
          <TextoComun text="Horario:" fontSize={14} />
          <TextoComun text="Dirección:" fontSize={14} />
        </View>

        <TextoEncerrado
          text="Reserva tu vianda antes del viernes a las 16hs!"
          fontSize={14}
        />

        <View style={buttons.containerbutton}>
          <Button
            mode="elevated"
            onPress={handleViandasPress}
            style={buttons.button}
          >
            Viandas
          </Button>
          <Button
            mode="elevated"
            onPress={navigateToLogin}
            style={buttons.button}
          >
            Volver
          </Button>
        </View>
      </View>
    </View>
  );
}
