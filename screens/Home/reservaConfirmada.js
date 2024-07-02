import { View, Linking} from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import TextoEncerrado from '../../components/TextoEncerrado';
import { RESERVA_CONFIRMADA_DESCRIPTION, RESERVA_CONFIRMADA_TITLE, 
        RESERVA_CONFIRMADA_VOLVER, RESERVA_CONFIRMADA_VIANDAS
  } from '../../resources/strings';
import ReservaService from '../../services/reservas.js';
import { useContext } from 'react';
import GlobalContext from '../../services/GlobalContext';

export default ({ navigation, route }) => {
  
  const { reservasCompletas} = route.params; 
  const { setRefresh, refresh } = useContext(GlobalContext); 
  const navigateHome = () => {
    navigation.navigate('Home');
  };
  const handleVianda = () => {
    ReservaService.updateViandas(reservasCompletas)
      .then((data) => {
        if (data.success) {
          alert('Se da aviso de vianda a RRHH');
          setRefresh(!refresh);
          Linking.openURL('https://www.google.com').catch((err) => console.error('An error occurred', err));
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
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
          onPress={handleVianda}
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
    </View>
  );
};
