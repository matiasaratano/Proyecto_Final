const URL = process.env.URL;

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
  .then(user => {
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