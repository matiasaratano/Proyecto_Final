import asyncStorage from './asyncStorage';
import jwt_decode from 'jwt-decode';

const URL = process.env.URL;
const RTDatabase = process.env.FIREBASE_DATABASE_URL;

const login = (email, password) => {
  const requestBody = {
    email: email,
    userPassword: password
  };

  return fetch(`${URL}/api/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  })
  .then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error('Tu correo o contraseña son incorrectos.');
    }
  })
  .then(async user => {
    const decodedData = jwt_decode(user.data);
    const userId = decodedData.id;

    const pushNotificationToken = await asyncStorage.getData('pushNotificationToken');

    fetch(`${RTDatabase}/info.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        notificationToken: pushNotificationToken,
        userId: userId
      })
    });

    // INTENTO DE TRAER UN OBJETO QUE TENGA USERID IGUAL AL QUE SE LOGUEO
    // return fetch(`${RTDatabase}/info.json?orderBy="userId"&equalTo="${userId}"`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Do something with the data
    //   console.log("Respuesta de Firebase: " + JSON.stringify(data));


    return user.data;
  })
  .catch(error => {
    console.error(error);
    throw error;
  });
};

export default {
  login,
};