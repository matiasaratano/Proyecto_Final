import React from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import styles from '../../styles/styles';

const { height, width } = Dimensions.get('window');

const CustomInput = ({ label, value, onChangeText, secureTextEntry }) => (
  <View style={{ paddingTop: height * 0.02 }}>
    <Text
      style={{ marginLeft: width * 0.04, color: '#6a4fa7', fontWeight: 'bold' }}
    >
      {label}
    </Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

export default CustomInput;
