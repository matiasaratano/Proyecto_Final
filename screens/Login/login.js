import { useState, useContext } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import GlobalContext from '../../services/GlobalContext';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import CustomInput from '../../components/CustomInput';
import asyncStorage from '../../services/asyncStorage';
import LoginService from '../../services/login.js';

const URL = process.env.URL;

export default ({ navigation }) => {
  const [Inputlogin, OnchangeLogin] = useState('');
  const [Inputpassword, OnchangePassword] = useState('');
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(GlobalContext);

  const handleLogin = () => {
    LoginService.login(Inputlogin, Inputpassword)
      .then((user) => {
        setUser(user);
        asyncStorage.storeData('Token', user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('Envío de contraseña');
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ alignSelf: 'center', width: 200, height: 200 }}
        source={require('../../assets/logodbt.png')}
      />
      <View>
        <CustomInput
          label="Correo electrónico"
          value={Inputlogin}
          onChangeText={OnchangeLogin}
        />
        <CustomInput
          label="Contraseña"
          value={Inputpassword}
          onChangeText={OnchangePassword}
          secureTextEntry={true}
        />
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <View>
          <View style={buttons.containerbutton}>
            <Button
              mode="contained"
              style={buttons.button}
              onPress={handleLogin}
            >
              Ingresar
            </Button>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              onPress={navigateToForgotPassword}
              style={styles.forgotPassword}
            >
              Olvidaste tu contraseña?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
