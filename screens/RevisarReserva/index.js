import { useState, useContext } from 'react';
import { View, TextInput, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import GlobalContext from '../../services/GlobalContext';

import styles from '../../styles/styles';
import buttons from '../../styles/buttons';

export default ({ navigation }) => {
  const [Registerlogin, OnchangeRegisterLogin] = useState();
  const [RegisterEmail, OnchangeRegisterEmail] = useState();

  const handleRegister = () => {
    console.log('Register');
  };
  const navigate = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title} variant="displaySmall">
          Revisemos los datos de tu reserva!
        </Text>
        {/* Falta codear como traer datos de la reserva */}
        <View>
          <Text style={styles.subtitle} variant="headlineMedium">
            Reserva de escritorio.
          </Text>
          <Text variant="titleMedium">Día:</Text>
          <Text variant="titleMedium">Horario:</Text>
          <Text variant="titleMedium">Dirección:</Text>
        </View>
        <View style={buttons.containerbutton}>
          <Button
            mode="elevated"
            onPress={handleRegister}
            style={buttons.button}
          >
            Confirmar
          </Button>
          <Button mode="elevated" onPress={navigate} style={buttons.button}>
            Cancelar
          </Button>
        </View>
      </View>
    </View>
  );
};
