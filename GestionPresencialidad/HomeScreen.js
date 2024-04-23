import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const escritorios = [
    { numero: 1, estado: 'disponible', reservadoPor: null },
    { numero: 2, estado: 'reservado', reservadoPor: 'Juan' },
    { numero: 3, estado: 'disponible', reservadoPor: null },
    // Agrega más espacios de escritorio según sea necesario
  ];

  const handleDeleteReservation = (numero) => {
    // Aquí puedes agregar la lógica para eliminar la reserva del espacio de escritorio con el número dado
    console.log(`Reserva eliminada para el escritorio ${numero}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion Presencialidad</Text>
      {escritorios.map((escritorio, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.espacioItem,
            escritorio.estado === 'reservado' && styles.reservadoItem,
          ]}
          onPress={() => console.log(`Espacio ${escritorio.numero} presionado`)}
          disabled={escritorio.estado === 'reservado'}
        >
          <Text style={styles.espacioText}>Escritorio {escritorio.numero}</Text>
          {escritorio.estado === 'reservado' && (
            <>
              <Text style={styles.reservadoText}>Reservado por: {escritorio.reservadoPor}</Text>
              <TouchableOpacity onPress={() => handleDeleteReservation(escritorio.numero)}>
                <Text style={styles.eliminarButton}>Eliminar reserva</Text>
              </TouchableOpacity>
            </>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  espacioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  reservadoItem: {
    backgroundColor: '#e0e0e0',
  },
  espacioText: {
    fontSize: 18,
  },
  reservadoText: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  eliminarButton: {
    color: 'red',
    fontSize: 14,
  },
});

export default HomeScreen;
