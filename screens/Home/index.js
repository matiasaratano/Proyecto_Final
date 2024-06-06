import { createNativeStackNavigator } from '@react-navigation/native-stack';
import misReservas from './misReservas';
import reservaConfirmada from './reservaConfirmada';
import verificarReserva from './verificarReserva';
import listaDeEspera from './listaDeEspera';
import revisarReserva from './revisarReserva';

export default ({ navigation }) => {

      const StackNavigator = createNativeStackNavigator()

      return (
            <StackNavigator.Navigator>
                            <StackNavigator.Screen name='Home' component={misReservas} options={
                        {
                              headerBackVisible: false,
                              headerShown: false
                        }} />
                              <StackNavigator.Screen name='Tu reserva fue confirmada' component={reservaConfirmada} options={
                        {
                              headerBackVisible: false,
                              headerShown: false
                        }} />
                          <StackNavigator.Screen name='Verificar tu reserva' component={verificarReserva} options={
                        {
                              headerBackVisible: false,
                              headerShown: false
                        }} />
                          <StackNavigator.Screen name='Lista de Espera' component={listaDeEspera} options={
                        {
                              headerBackVisible: false,
                              headerShown: false
                        }} />
                          <StackNavigator.Screen name='Revisar Reserva' component={revisarReserva} options={
                        {
                              headerBackVisible: false,
                              headerShown: false
                        }} />
            </StackNavigator.Navigator>
      )
}