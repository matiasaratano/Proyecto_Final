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
        <Text variant="headlineMedium">Revisemos los datos de tu reserva</Text>
        {/* Falta traer datos de la reserva */}
        <View>
          <Text variant="headlineMedium"></Text>
        </View>
        <View style={buttons.containerbutton}>
          <Button
            mode="elevated"
            onPress={handleRegister}
            style={buttons.button}
          >
            Cancelar
          </Button>

          <Button
            mode="elevated"
            onPress={handleRegister}
            style={buttons.button}
          >
            Confirmar
          </Button>
        </View>
      </View>
    </View>
  );
};
