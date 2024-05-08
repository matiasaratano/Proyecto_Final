import { StatusBar } from 'expo-status-bar';
import { useContext, useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GlobalContext from '../../services/GlobalContext';


const Reserva = ({ data, navigation }) => {
  //Recibe Objeto Reserva Con este formato
  //{ fecha: "29/04/2024", reserva: { id: 1, fecha: "29/04/2024", vianda: true }, cant_dias: 1 }

  const completo = data.cant_dias === 24;
  const [year,month,day] = data.fecha.split("-");
  const monthName = new Date(year, month - 1).toLocaleString('es', { month: 'long' }).replace(/^\w/, (c) => c.toUpperCase());
  const {user, setUser, listaAReservar, setListaAReservar} = useContext(GlobalContext)
  const [elegido, setElegido] = useState(false);


  const handleReserva = () => {
    if(data.reserva !== null) {
      navigation.navigate('Verificar tu reserva')
    } else if(completo) {
      alert("Dia completo , ingresar a Lista de Espera")
    } else {
      if(elegido){
        nuevaListaReservar = listaAReservar.filter(obj => obj !== data.fecha);
        setListaAReservar(nuevaListaReservar)
        setElegido(!elegido)
      }else {
      listaAReservar.push(data.fecha)
       setListaAReservar(listaAReservar)
        setElegido(!elegido)
        console.log(listaAReservar)
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'column'}}> 
      <Text>{day}</Text>
      <Text>{monthName}</Text>
      </View>


      {
        // Boton de Reserva
        !completo ? (
          <Button
            onPress={handleReserva}
            title={data.reserva ? ' Reservado ' : 'Reservar: 9-18 hs'}
            color={elegido?"#841584" : 'grey'}
          />
        ) : (
          <Button
            onPress={handleReserva}
            title={data.reserva ? 'Reservado' : 'Completo'}
            color={elegido?"#841584" : 'grey'}
          />
        )
      }

      <Text>{data.cant_dias}/24</Text>

      {
        // Boton Cancelar
        data.reserva ? (
          <Button onPress={{}} title="Cancelar" color="#841584" />
        ) : (
          <Text></Text>
        )
      }
      {
        // Boton Vianda
        data.reserva && data.reserva.vianda ? (
          <Button onPress={() => {}} title="Vianda?" color="#841584" />
        ) : (
          <Text></Text>
        )
      }
      {
        // Boton Lista de Espera
        !data.reserva && completo ? (
          <Button
            onPress={() => {}}
            title="Lista de Espera"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        ) : (
          <Text></Text>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default Reserva;
