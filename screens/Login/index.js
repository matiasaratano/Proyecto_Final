import { useState, useContext } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import { Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
export default ({ navigation }) => {
  const [Inputlogin, OnchangeLogin] = useState('');
  const [Inputpassword, OnchangePassword] = useState('');
  const { user, setUser } = useContext(GlobalContext);

  const handleLogin = () => {
    console.log('Login');
  };

  const navigate = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Image
        style={{ alignSelf: 'center', width: 200, height: 200 }}
        source={require('../../assets/logodbt.png')}
      />
      <View>
        <Text style={{ marginLeft: 40, color: '#544EEB' }}>
          Correo electrónico
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={OnchangeLogin}
          value={Inputlogin}
        />
        <Text style={{ marginLeft: 40, color: '#544EEB' }}>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={OnchangePassword}
          value={Inputpassword}
        />
        <View style={buttons.containerbutton}>
          <Button mode="elevated" onPress={handleLogin} style={buttons.button}>
            Login
          </Button>

          <Button mode="elevated" onPress={navigate} style={buttons.button}>
            Registrase
          </Button>
        </View>
      </View>
    </View>
  );
};
