import * as admin from 'firebase-admin';
import { User } from '../models'; // Ajusta la importación según la ubicación de tus modelos
import dotenv from '../.env';

dotenv.config(); // Carga las variables de entorno desde .env

// Inicializa Firebase Admin SDK con las credenciales desde .env
admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
  }),
  // databaseURL: 'https://your-project-id.firebaseio.com', // Opcional: URL de tu base de datos Firebase
});

// Función para enviar notificaciones push
export const sendPushNotification = async (userId, title, body) => {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: await getDeviceToken(userId),
  };

  try {
    await admin.messaging().send(message);
    console.log('Notification sent successfully:', message);
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

// Función para obtener el token de dispositivo del usuario desde MySQL
const getDeviceToken = async (userId) => {
  // Lógica para obtener el token de dispositivo del usuario desde MySQL
  // Aquí debes implementar cómo obtienes el token de dispositivo asociado al userId
  // Por simplicidad, supondrémos que ya tienes una forma de obtener el token de dispositivo.

  // Ejemplo hipotético de cómo podrías obtener el token de dispositivo de MySQL
  try {
    const user = await User.findOne({ where: { id: userId } }); // Suponiendo que usas Sequelize
    return user.deviceToken; // Suponiendo que `deviceToken` es el campo donde se almacena el token de dispositivo
  } catch (error) {
    console.error('Error fetching user from MySQL:', error);
    throw error;
  }
};

export default sendPushNotification;
