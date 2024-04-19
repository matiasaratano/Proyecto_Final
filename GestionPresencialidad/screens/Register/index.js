import { useState, useContext } from 'react';
import { Text, View, TextInput, ImageBackground} from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import { Button } from '@rneui/themed';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';


export default ({ navigation }) => {
  const [Registerlogin, OnchangeRegisterLogin] = useState()
  const [Registerpassword, OnchangeRegisterPassword] = useState()
  const [RegisterNickname, OnchangeRegisterNickname] = useState()
  const [RegisterEmail, OnchangeRegisterEmail] = useState()

  const handleRegister = () => {

    console.log("Register")
  }
  const navigate = () => {
    navigation.navigate('Login')
  }

  return (
    <View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterLogin}
            value={Registerlogin}
            placeholder='Username'
            placeholderTextColor='grey'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterPassword}
            value={Registerpassword}
            placeholder="Password"
            placeholderTextColor='grey'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterNickname}
            value={RegisterNickname}
            placeholder="Nickname"
            placeholderTextColor='grey'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangeRegisterEmail}
            value={RegisterEmail}
            placeholder="Email"
            placeholderTextColor='grey'
          />
          <View
            style={buttons.containerbutton}>
            <Button title="Register" onPress={handleRegister} buttonStyle={buttons.blackButton}
              containerStyle={styles.containerStyle}
              titleStyle={{ fontWeight: 'bold' }} />
            <Text>   </Text>
            <Button title="Return" onPress={navigate} buttonStyle={buttons.blackButton}
              containerStyle={styles.containerStyle}
              titleStyle={{ fontWeight: 'bold' }} />
          </View>
        </View>
    </View>
  )

}