import { FlatList, View } from 'react-native';
import Reserva from '../Reserva';
import { Divider, Text } from 'react-native-paper';

const ReservaFlatlist = ({ reservas, navigation }) => {
  const renderReserva = (param) => {
    const { item } = param;
    return (
      <View>
        <Reserva data={item} navigation={navigation} />
        <Divider />
      </View>
    );
  };

  return <FlatList data={reservas} renderItem={renderReserva} />;
};

export default ReservaFlatlist;
