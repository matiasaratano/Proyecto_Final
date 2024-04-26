import { useState, useContext } from 'react';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import { Button } from 'react-native-paper';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';

export default ({ navigation }) => {
  const [Registerlogin, OnchangeRegisterLogin] = useState();
  const [Registerpassword, OnchangeRegisterPassword] = useState();
  const [RegisterNickname, OnchangeRegisterNickname] = useState();
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
        <TextInput
          style={styles.input}
          onChangeText={OnchangeRegisterLogin}
          value={Registerlogin}
          placeholder="Username"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          onChangeText={OnchangeRegisterPassword}
          value={Registerpassword}
          placeholder="Password"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          onChangeText={OnchangeRegisterNickname}
          value={RegisterNickname}
          placeholder="Nickname"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          onChangeText={OnchangeRegisterEmail}
          value={RegisterEmail}
          placeholder="Email"
          placeholderTextColor="grey"
        />
        <View style={buttons.containerbutton}>
          <Button
            mode="elevated"
            onPress={handleRegister}
            style={buttons.button}
          >
            Registrar
          </Button>

          <Button mode="elevated" onPress={navigate} style={buttons.button}>
            Volver
          </Button>
        </View>
      </View>
    </View>
  );
};
