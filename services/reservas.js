import jwt_decode from 'jwt-decode';

const URL = process.env.URL;


const getReservasByUser = (user) => {
  console.log('user entrante: ' + user);
  const jwtInfo = jwt_decode(user);
  const id = jwtInfo.id;
  console.log("Url: " + URL + ", id: " + id)
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

const getIntoListaEspera = (fecha, user) => {
  const jwtInfo = jwt_decode(user);
  const userId = jwtInfo.id;
  const requestBody = {
    fecha: fecha,
    userId: userId
  };
  return fetch(`${URL}/api/userXLista`, {
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
  })
};

const createReservas = (fechas, user) => {
  const jwtInfo = jwt_decode(user);
  const userId = jwtInfo.id;
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
