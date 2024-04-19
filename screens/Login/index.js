import { useState, useContext } from 'react';
import { Text, View, TextInput, ImageBackground } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import { Button } from '@rneui/themed';
import styles from '../../styles/styles';
import buttons from '../../styles/buttons';


export default ({ navigation }) => {

  const [Inputlogin, OnchangeLogin] = useState('')
  const [Inputpassword, OnchangePassword] = useState('')
  const { user,setUser } = useContext(GlobalContext)

  const handleLogin = () => {
    console.log("Login")
  }

  const navigate = () => {
    navigation.navigate('Register')
  }

  return (
    <View>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={OnchangeLogin}
            value={Inputlogin}
            placeholder='Username'
            placeholderTextColor='grey'
          />
          <TextInput
            style={styles.input}
            onChangeText={OnchangePassword}
            value={Inputpassword}
            placeholder="Password"
            placeholderTextColor='grey'
          />
          <View style={buttons.containerbutton}>
            <Button title="Login" onPress={handleLogin} buttonStyle={buttons.blackButton}
              containerStyle={styles.containerStyle}
              titleStyle={{ fontWeight: 'bold' }} />
            <Text>   </Text>
            <Button title="Register" onPress={navigate} buttonStyle={buttons.blackButton}
              containerStyle={styles.containerStyle}
              titleStyle={{ fontWeight: 'bold' }} />
            <Text>   </Text>

          </View>
        </View>

    </View>
  )

}