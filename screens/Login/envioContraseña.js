import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
// import CustomInput from '../../components/CustomInput';
import TextoEncerrado from '../../components/TextoEncerrado';

import styles from '../../styles/styles';
import buttons from '../../styles/buttons';

export default ({ navigation }) => {
  // const [email, setEmail] = useState('');

  const handleVolver = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TextoEncerrado
        text="Por favor, comunicate con RRHH para que puedan gestionarte una nueva clave para iniciar sesión."
        fontSize={18}
      />
      <View style={{ height: 20 }} />

      <View style={buttons.containerbutton}>
        <Button
          mode="contained-tonal"
          style={buttons.button}
          onPress={handleVolver}
        >
          Volver
        </Button>
      </View>
    </View>
  );
};
