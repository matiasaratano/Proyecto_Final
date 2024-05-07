import { useState, useContext } from 'react';
import { View, TextInput, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TextoEncerrado from '../../components/TextoEncerrado';
import TextoComun from '../../components/TextoComun';


import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import Reserva from '../../components/Reserva';


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
        <TextoEncerrado
          text="Agregar Logo o info de la empresa que sea util para el HOME"
          fontSize={18}
        />
        {/* Falta codear como traer datos de la reserva */}

        {/* <ReservaFlatlist></ReservaFlatlist> */}

        <Reserva
          data={{
            fecha: '29/04/2024',
            reserva: { id: 1, fecha: '29/04/2024', vianda: true },
            cant_dias: 1,
          }}
        ></Reserva>
        <View style={buttons.containerbutton}>
          <Button
            mode="contained"
            onPress={handleRegister}
            style={buttons.button}
          >
            Confirmar
          </Button>
        </View>
        <View>
          <TextoEncerrado
            text="ATENCIÓN! Si es imprescindible que visites la oficina, por favor comunícate con RRHH para buscar una solución."
            fontSize={18}
          />
        </View>
      </View>
    </View>
  );
};
