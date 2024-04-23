import { createNativeStackNavigator } from '@react-navigation/native-stack';
import miPerfil from './miPerfil.js'

export default ({ navigation }) => {

    const StackNavigator = createNativeStackNavigator()

    return (
          <StackNavigator.Navigator>
                <StackNavigator.Screen name='Perfil' component={miPerfil} />
          </StackNavigator.Navigator>
    )
}