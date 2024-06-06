import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './login';
import envioContraseña from './envioContraseña';
import verificarInicioSesion from './verificarInicioSesion';

export default ({ navigation }) => {

      const StackNavigator = createNativeStackNavigator()

      return (
            <StackNavigator.Navigator>
                            <StackNavigator.Screen name='Login' component={login} options={
                        {
                              headerBackVisible: false,
                              headerShown: false
                        }} />
                              <StackNavigator.Screen name='Envío de contraseña' component={envioContraseña} options={
                        {
                              headerBackVisible: false,
                              headerShown: false
                        }} />
                          <StackNavigator.Screen name='Verificar Inicio de Sesion' component={verificarInicioSesion} options={
                        {
                              headerBackVisible: false,
                              headerShown: false
                        }} />
            </StackNavigator.Navigator>
      )
}