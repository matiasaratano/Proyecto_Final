import { StatusBar } from 'expo-status-bar';
import { useContext, useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import GlobalContext from '../../services/GlobalContext';
import ReservaService from '../../services/reservas.js';
import { useFocusEffect } from '@react-navigation/native';
import { Button as PaperButton, Text as PaperText, IconButton } from 'react-native-paper';


const Reserva = ({ data, navigation }) => {
  //Recibe Objeto Reserva Con este formato
  //{ fecha: "29/04/2024", reserva: { id: 1, fecha: "29/04/2024", vianda: true }, cant_dias: 1 }

  const completo = data.cant_dias === 24;
  const [year, month, day] = data.fecha.split('-');
  const monthName = new Date(year, month - 1)
    .toLocaleString('es', { month: 'long' })
    .replace(/^\w/, (c) => c.toUpperCase());

  const {user,setUser,listaAReservar,setListaAReservar,refresh,setRefresh,clearElegido,setClearElegido} = useContext(GlobalContext);

  const [elegido, setElegido] = useState(false);
  
  useFocusEffect(
    useCallback(() => {
      if(elegido === true) {
        setElegido(false)
      }
    }, [clearElegido])
  );

  //Metodo para Agregar o Quitar Reserva de Lista de Reservas a Reservar.
  const handleReserva = () => {
    if (data.reserva !== null) {
      navigation.navigate('Verificar tu reserva');
    } else if (completo) {
      alert('Dia completo , ingresar a Lista de Espera');
    } else {
      if (elegido) {
        nuevaListaReservar = listaAReservar.filter((obj) => obj !== data.fecha);
        setListaAReservar(nuevaListaReservar);
        setElegido(!elegido);
      } else {
        listaAReservar.push(data.fecha);
        setListaAReservar(listaAReservar);
        setElegido(!elegido);
        console.log(listaAReservar);
      }
    }
  };
  //Metodo para llamar a Api para Borrar Reserva
  const handleCancelacion = () => {
    ReservaService.deleteReserva(data.reserva.id)
      .then((data) => {
        console.log(data);
        if (data.success) {
          alert('Reserva Borrada');
          setRefresh(!refresh);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  };
  //Alert de Cancelacion con 2 Botones
  const cancelarReserva = () =>
    Alert.alert(
      'Confirmacion de Cancelacion',
      'Seguro quieres Cancelar la Reserva?',
      [
        {
          text: 'Volver',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel',
        },
        { text: 'OK, Cancelar', onPress: handleCancelacion },
      ]
    );

  //Metodo para Updatear Pedido de Vianda de Reserva  ... FALTA AGREGAR HIPERVINCULO CON LINKING A FORM
  const handleVianda = () => {
    ReservaService.updateVianda(data.reserva.id)
      .then((data) => {
        console.log(data);
        if (data.success) {
          alert('Se da Aviso de Vianda a RRHH');
          setRefresh(!refresh);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  };
  //Alert de Lista de Espera con 2 Botones
  const entrarListadeEspera = () =>
    Alert.alert(
      'Ingreso a Lista de Espera',
      'Seguro quieres Ingresar a la lista de espera?',
      [
        {
          text: 'Volver',
          onPress: () => console.log('Volver Pressed'),
          style: 'cancel',
        },
        { text: 'OK, ingresar', onPress: handleListaEspera },
      ]
    );

  //Metodo para llamar a Api para Ingresar Lista de Espera
  const handleListaEspera = () => {
    ReservaService.getIntoListaEspera(data.fecha, 'userId')
      .then((data) => {
        console.log(data);
        if (data.success) {
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'column',alignSelf:'flex-start'}}>
        <Text style={{fontSize:25}}>
          {day}
        </Text>
        <Text>
         {monthName}
        </Text>
      </View>

      {
        // Boton de Reserva
        !completo ? (
          <PaperButton
            onPress={handleReserva}
            mode={elegido ? 'contained' : 'elevated'}
            style={{
              marginTop: -10,
              marginBottom: 10,
            }}
          >
            {data.reserva ? ' Reservado ' : 'Reservar: 9-18 hs'}
          </PaperButton>
        ) : (
          <PaperButton
            onPress={handleReserva}
            style={styles.buttonReserva}
          >
            {data.reserva ? 'Reservado' : 'Completo'}
          </PaperButton>
        )
      }

      <PaperText variant="bodyMedium" style={{marginBottom: 20}}>{data.cant_dias}/24</PaperText>

      {
        data.reserva ? (
          <IconButton
            mode='contained'
            iconColor={'white'}
            containerColor='#6750a4'
            icon="close" // Usa el nombre del icono que desees, 'close' es una 'X'
            onPress={cancelarReserva}
            style={{
              marginBottom: 20,
            }}
          />
        ) : (
          <Text></Text>
        )
      }

      {
        // Boton Vianda
        data.reserva && !data.reserva.vianda ? (
          <IconButton
            iconColor={'white'}
            containerColor='#6750a4'
            icon="food"
            onPress={handleVianda}
            style={{
              marginBottom: 20,
            }}
          >
            Vianda?
          </IconButton>
        ) : (
          <Text></Text>
        )
      }
      
      {
        // Boton Lista de Espera
        !data.reserva && completo ? (
          <Button onPress={() => {}} title="Lista de Espera" color="#663399" />
        ) : (
          <Text></Text>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 20,
    paddingRight: 5,
    paddingLeft: 5,
    alignItems: 'center', 
  },
});