import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Reserva = ({ data, navigation }) => {
  //Recibe Objeto Reserva Con este formato
  //{ fecha: "29/04/2024", reserva: { id: 1, fecha: "29/04/2024", vianda: true }, cant_dias: 1 }

  const completo = data.cant_dia === 24;

  return (
    <View style={styles.container}>
      <Text>{data.fecha}</Text>

      {
        // Boton de Reserva
        !completo ? (
          <Button
            onPress={{}}
            title={data.reserva ? ' Reservado ' : 'Reservar: 9-18 hs'}
            color="#841584"
          />
        ) : (
          <Button
            onPress={{}}
            title={data.reserva ? 'Reservado' : 'Completo'}
            color="#841584"
          />
        )
      }

      <Text>{data.cant_dia}/24</Text>

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
