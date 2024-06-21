import { View, Alert , Linking} from 'react-native';
import { Text, Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import TextoEncerrado from '../../components/TextoEncerrado';
import { RESERVA_CONFIRMADA_DESCRIPTION, RESERVA_CONFIRMADA_TITLE, 
        RESERVA_CONFIRMADA_VOLVER, RESERVA_CONFIRMADA_VIANDAS, 
        RESERVA_CONFIRMADA_HOME, RESERVA_CONFIRMADA_CONTACTO,
        RESERVA_CONFIRMADA_FAQS    
  } from '../../resources/strings';

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
        { text: 'Aceptar', onPress: () => Linking.openURL('https://www.google.com').catch((err) => console.error('An error occurred', err))  },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <TextoEncerrado text={RESERVA_CONFIRMADA_TITLE} fontSize={18} />

      <TextoEncerrado
        text={RESERVA_CONFIRMADA_DESCRIPTION}
        fontSize={16}
      />
      <View style={buttons.containerbutton}>
        <Button
          mode="contained"
          onPress={handleViandasPress}
          style={buttons.button}
        >
          {RESERVA_CONFIRMADA_VIANDAS}
        </Button>
        <Button
          mode="contained-tonal"
          onPress={navigateHome}
          style={buttons.button}
        >
          {RESERVA_CONFIRMADA_VOLVER}
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
          {RESERVA_CONFIRMADA_HOME}
        </Button>
        <Button
          mode="text"
          onPress={() => navigation.navigate('Contacto')}
          color="black"
        >
          {RESERVA_CONFIRMADA_CONTACTO}
        </Button>

        <Button
          mode="text"
          onPress={() => navigation.navigate('FAQs')}
          color="black"
        >
          {RESERVA_CONFIRMADA_FAQS}
        </Button>
      </View>
    </View>
  );
};
