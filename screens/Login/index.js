import { useState, useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import GlobalContext from '../../services/GlobalContext';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';
import CustomInput from '../../components/CustomInput';

export default ({ navigation }) => {
  const [Inputlogin, OnchangeLogin] = useState('');
  const [Inputpassword, OnchangePassword] = useState('');
  const { user, setUser } = useContext(GlobalContext);

  const handleLogin = () => {
    console.log('Login');
  };


  const navigateToForgotPassword = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ alignSelf: 'center', width: 200, height: 200 }}
        source={require('../../assets/logodbt.png')}
      />
      <View style={styles.formContainer}>
        <CustomInput
          label="Correo electrónico"
          value={Inputlogin}
          onChangeText={OnchangeLogin}
        />
        <CustomInput
          label="Contraseña"
          value={Inputpassword}
          onChangeText={OnchangePassword}
        />
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleLogin} style={buttons.button}>
            Login
          </Button>
          <View style={{ marginTop: 10 }}>
            <Text onPress={navigateToForgotPassword} style={styles.forgotPassword}>
              Olvidaste tu contraseña?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
