import { createNativeStackNavigator } from '@react-navigation/native-stack';
import reservar from './reservar.js'

export default ({ navigation }) => {

    const StackNavigator = createNativeStackNavigator()

    return (
          <StackNavigator.Navigator>
                <StackNavigator.Screen name='Reservar' component={reservar} />
          </StackNavigator.Navigator>
    )
}