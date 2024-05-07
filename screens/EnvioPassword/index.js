import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import TextoEncerrado from '../../components/TextoEncerrado';

import styles from '../../styles/styles';
import buttons from '../../styles/buttons';

export default ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleEnviar = () => {
    fetch('URL DEL ENDPOINT DE LA API', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Alert.alert(
            'Email enviado',
            'Por favor, revisa tu correo electrónico para obtener tu contraseña.'
          );
          navigation.navigate('Login');
        } else {
          Alert.alert(
            'Error',
            'Hubo un problema al enviar el correo electrónico.'
          );
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextoEncerrado
        text="Por favor, introduce tu dirección de correo electrónico alternativo o personal a continuación para que podamos enviarte la información de inicio de sesión."
        fontSize={18}
      />
      <View style={{ height: 20 }} />
      <CustomInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Button mode="contained" style={buttons.button} onPress={handleEnviar}>
        Volver al inicio
      </Button>
    </View>
  );
};


