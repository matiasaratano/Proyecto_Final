import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import styles from '../../styles/styles';
import buttons from '../../styles/buttons';

export default ({ navigation }) => {
  const navigate = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title} variant="displaySmall">
          Estas anotado en lista de espera!
        </Text>

        <View>
          <Text style={styles.subtitle} variant="headlineMedium">
            En caso de que alguien cancele su reserva te avisaremos. Podes ir de
            todas formas a la oficina y ocupar un espacio común (sala de
            reuniones) Contactate con recursos humanos por consultas:
            rrhh@empresa.com
          </Text>
        </View>
        <View style={buttons.containerbutton}>
          <Button mode="elevated" style={buttons.button} onPress={navigate}>
            Volver al inicio
          </Button>
        </View>
      </View>
    </View>
  );
};
