const URL = process.env.URL;
const getReservasByUser = (id) => {
  console.log(URL)
  return fetch(`${URL}/api/reserva/user/${id}`).then(
    (res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Error: Reservas not Found');
      }
    }
  );
};

const deleteReserva = (id) => {
  return fetch(`${URL}/api/reserva/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.json();
    }
  });
};

const updateVianda = (id) => {
  return fetch(`${URL}/api/reserva/vianda/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.json();
    }
  });
};

const getIntoListaEspera = (fecha, userId) => {
  console.log('Ingresando a Lista de Espera');
};

const createReservas = (fechas, userId) => {
  const requestBody = {
    fechas: fechas,
    userId: userId
  };
  console.log('Creando Reservas...');
  return fetch(`${URL}/api/reserva/reservas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  }).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.json();
    }
  });
};

export default {
  getReservasByUser,
  deleteReserva,
  updateVianda,
  getIntoListaEspera,
  createReservas,
};
