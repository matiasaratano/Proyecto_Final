import React from 'react';
import { View, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import TextoEncerrado from '../../components/TextoEncerrado';

export default ({ navigation }) => {
  const navigateHome = () => {
    navigation.navigate('Home');
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
      <TextoEncerrado text="Reserva confirmada!" fontSize={18} />

      <TextoEncerrado
        text="Recorda que podes pedir tu vianda hasta el viernes a la 18hs. Para personalizarla, por favor, completa el siguiente formulario"
        fontSize={16}
      />
      <View style={buttons.containerbutton}>
        <Button
          mode="contained"
          onPress={handleViandasPress}
          style={buttons.button}
        >
          Viandas
        </Button>
        <Button
          mode="contained-tonal"
          onPress={navigateHome}
          style={buttons.button}
        >
          Volver
        </Button>
      </View>
      <View
        style={[
          styles.footer,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 30,
            left: 0,
            right: 0,
          },
        ]}
      >
        <Button
          mode="text"
          onPress={() => navigation.navigate('Home')}
          color="black"
        >
          Home
        </Button>
        <Button
          mode="text"
          onPress={() => navigation.navigate('Contacto')}
          color="black"
        >
          Contacto
        </Button>

        <Button
          mode="text"
          onPress={() => navigation.navigate('FAQs')}
          color="black"
        >
          FAQs
        </Button>
      </View>
    </View>
  );
};
