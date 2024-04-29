import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import TextoEncerrado from '../../components/TextoEncerrado';

export default ({ navigation }) => {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View>
        <TextoEncerrado
          text="Correo electrónico enviado a xxx@xxx.com. Por favor, verificá tus datos de inicio de sesión y regresa al inicio para completar el proceso."
          fontSize={18}
        />
        <View style={buttons.containerbutton}>
          <Button
            mode="elevated"
            onPress={navigateToLogin}
            style={[buttons.button, { alignSelf: 'center' }]}
          >
            Inicio
          </Button>
        </View>
      </View>
    </View>
  );
};
