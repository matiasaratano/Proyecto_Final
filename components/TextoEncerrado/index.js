import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';

const TextoEncerrado = ({ text, fontSize }) => (
  <View
    style={{
      backgroundColor: '#f8f4fa',
      padding: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
      marginTop: 15,
      alignItems: 'center',
      alignSelf: 'center',
    }}
  >
    <Text
      style={[
        styles.titleMedium,
        { fontSize, color: '#6a4fa7', textAlign: 'center' },
      ]}
    >
      {text}
    </Text>
  </View>
);

export default TextoEncerrado;
