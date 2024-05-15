import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TextoEncerrado from '../../components/TextoEncerrado';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';

export default ({ navigation }) => {
  const navigate = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <TextoEncerrado text="Estas anotado en lista de espera!" fontSize={18} />

      <TextoEncerrado
        text="En caso de que alguien cancele su reserva te avisaremos. Podes ir de
          todas formas a la oficina y ocupar un espacio común (sala de
          reuniones) Contactate con recursos humanos por consultas:
          rrhh@empresa.com"
        fontSize={16}
      />

      <Button mode="contained" style={buttons.buttonCustom} onPress={navigate}>
        Volver al inicio
      </Button>
    </View>
  );
};
