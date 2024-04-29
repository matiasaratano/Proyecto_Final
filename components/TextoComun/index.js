import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styles';

const TextoComun = ({ text, fontSize }) => (
  <View
    style={{
      padding: 10,
      marginTop: 20,
    }}
  >
    <Text style={[styles.titleMedium, { fontSize, color: '#6a4fa7' }]}>
      {text}
    </Text>
  </View>
);

export default TextoComun;
