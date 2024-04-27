import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';

export default function VerificarReserva({ navigation }) {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleViandasPress = () => {
    Alert.alert(
      'Aca direccionariamos al form de Capital Humano?',
      'Mientras aprovecho para probar la funcion Alert que me gusto ;)',
      [
        { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Aceptar', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.goBackButtonContainer}>
        <Button mode="contained" onPress={navigateToLogin} style={buttons.button}>
          Volver
        </Button>
      </View>
      <View style={styles.textBoxContainer}>
        <Text style={styles.title}>
          REVISEMOS LOS DATOS DE TU RESERVA!
        </Text>
      </View>
      <View style={styles.textBoxContainer}>
        <Text style={styles.reservationTitle}>
          RESERVA DE ESCRITORIO
        </Text>
        <Text>Día: 25 de marzo de 2024</Text>
        <Text>Horario: 9 a 18hs</Text>
        <Text>Dirección: Av. Siempre Viva 742</Text>
      </View>
      <View style={styles.textBoxContainer}>
        <Text style={styles.subtitle}>
          Reserva tu vianda antes del viernes a las 16hs!
        </Text>
      </View>
      <View style={styles.submitButtonContainer}>
        <Button mode="contained" onPress={handleViandasPress} style={buttons.button}>
          Viandas
        </Button>
      </View>
    </View>
  );
}
