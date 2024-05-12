import { useState, useContext } from 'react';
import { View, TextInput, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TextoEncerrado from '../../components/TextoEncerrado';
import TextoComun from '../../components/TextoComun';

import styles from '../../styles/styles';
import buttons from '../../styles/buttons';

export default ({ navigation }) => {
  const [Registerlogin, OnchangeRegisterLogin] = useState();
  const [RegisterEmail, OnchangeRegisterEmail] = useState();

  const navigateConfirm = () => {
    navigation.navigate('Tu reserva fue confirmada');
  };
  const navigateHome = () => {
    navigation.navigate('Home');
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
        <View style={buttons.containerbutton}>
          <Button
            mode="contained"
            onPress={navigateConfirm}
            style={buttons.button}
          >
            Confirmar
          </Button>
          <Button
            mode="contained-tonal"
            onPress={navigateHome}
            style={buttons.button}
          >
            Cancelar
          </Button>
        </View>
      </View>
    </View>
  );
};
