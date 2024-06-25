import asyncStorage from './asyncStorage';
import jwt_decode from 'jwt-decode';

const URL = process.env.URL;
const RTDatabase = process.env.FIREBASE_DATABASE_URL;

const login = (email, password) => {
  const requestBody = {
    email: email,
    userPassword: password,
  };

  return fetch(`${URL}/api/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((res) => {
      // console.log('url' + URL);
      // console.log('RTD' + RTDatabase);
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Tu correo o contraseña son incorrectos.');
      }
    })
    .then(async (user) => {
      const decodedData = jwt_decode(user.data);
      const userId = decodedData.id;

      const pushNotificationToken = await asyncStorage.getData(
        'pushNotificationToken'
      );

      let userExists = false;

      await fetch(`${RTDatabase}/info.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Check if user exists
          for (let key in data) {
            if (data[key].userId === userId) {
              userExists = true;
              break;
            }
          }
          console.log('Respuesta de Firebase: ' + JSON.stringify(data));
        });

      if (!userExists && pushNotificationToken) {
        fetch(`${RTDatabase}/info.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            notificationToken: pushNotificationToken,
            userId: userId,
          }),
        });
      }

      return user.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default {
  login,
};
