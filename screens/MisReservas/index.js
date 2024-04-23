import { createNativeStackNavigator } from '@react-navigation/native-stack';
import misReservas from './misReservas.js'

export default ({ navigation }) => {

    const StackNavigator = createNativeStackNavigator()

    return (
          <StackNavigator.Navigator>
                <StackNavigator.Screen name='Mis Reservas' component={misReservas} />
          </StackNavigator.Navigator>
    )
}