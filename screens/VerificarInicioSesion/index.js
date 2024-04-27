import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';

export default ({ navigation }) => {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title} variant="displaySmall">
          Correo electrónico enviado a xxx@xxx.com. Por favor, verifica tus datos de inicio de sesión y regresa al inicio para completar el proceso.
        </Text>
        <View style={buttons.containerbutton}>
          <Button mode="elevated" onPress={navigateToLogin} style={[buttons.button, { alignSelf: 'center' }]}>
            Inicio
          </Button>
        </View>
      </View>
    </View>
  );
};
