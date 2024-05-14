import { FlatList, View } from 'react-native';
import TextoEncerrado from '../TextoEncerrado';
import TextoComun from '../TextoComun';
import { Divider, Text } from 'react-native-paper';

const ConfirmarReservasFlatlist = ({ reservas, navigation }) => {
  const renderReserva = (param) => {
    const { item } = param;
    const texto = "Dia: " + item
    return (
      <View>
        <View>
          <TextoComun text="Reserva de escritorio." fontSize={16} />
          <TextoComun text={texto} fontSize={14} />
          <TextoComun text="Horario: 9 hs a 18 hs" fontSize={14} />
        <Divider />
        </View>
      </View>
    );
  };

  return <FlatList data={reservas} renderItem={renderReserva} />;
};

export default ConfirmarReservasFlatlist;
