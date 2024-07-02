import { Sequelize } from 'sequelize';

const connection = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  await connection.authenticate();
} catch (error) {
  console.error('Unable to connect to the database', error);
}

export default connection;
