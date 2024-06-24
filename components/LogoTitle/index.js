import React from 'react';
import { View, Text , Image} from 'react-native';
import styles from '../../styles/styles';
const logo = require('../../assets/logodbt.png'); 

const LogoTitle = () => (
  <View>
<Image
                style={{ width: 200, height: 200 }}
                source={logo}
                resizeMode='contain'
            />
  </View>
);

export default LogoTitle;
