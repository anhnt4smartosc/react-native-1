import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
type Props = {};

export default class Header extends Component<Props> {
    render() {
      return (        
          <View style={styles.header}>
            <Image source={ require('../assets/images/logo.png') } style={styles.logo}/>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 240,
    height:60,
  },
})