import { FlatList, View } from 'react-native';
import Reserva from '../Reserva';

const ReservaFlatlist = ({ reservas, navigation }) => {
  const renderReserva = (param) => {
    const { item } = param;
    return <Reserva data={item} navigation={navigation} />;
  };

  return <FlatList data={reservas} renderItem={renderReserva} />;
};

export default ReservaFlatlist;
