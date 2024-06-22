import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import TextoEncerrado from '../../components/TextoEncerrado';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import { LISTA_DE_ESPERA_TITLE, LISTA_DE_ESPERA_DESCRIPTION, LISTA_DE_ESPERA_BACK_TO_HOME } from '../../resources/strings';

export default ({ navigation }) => {
  const navigate = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <TextoEncerrado text={LISTA_DE_ESPERA_TITLE} fontSize={18} />

      <TextoEncerrado
        text={LISTA_DE_ESPERA_DESCRIPTION}
        fontSize={16}
      />

      <Button mode="contained" style={buttons.buttonCustom} onPress={navigate}>
        {LISTA_DE_ESPERA_BACK_TO_HOME}
      </Button>
    </View>
  );
};
