import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import TextoEncerrado from '../../components/TextoEncerrado';

export default function ReservaConfirmada({ navigation }) {
  return (
    <View style={styles.container}>
      <TextoEncerrado text="Reserva confirmada!" fontSize={18} />

      <TextoEncerrado
        text="Recorda que podes pedir tu vianda hasta el viernes a la 18hs. Para personalizarla, por favor, completa el siguiente formulario"
        fontSize={16}
      />

      <Button
        mode="contained"
        onPress={() => navigation.navigate('FormularioVianda')}
        style={buttons.button}
      >
        Viandas
      </Button>
      <View
        style={[
          styles.footer,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 40,
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
          onPress={() => navigation.navigate('Direccion')}
          color="black"
        >
          Direccion
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
}
