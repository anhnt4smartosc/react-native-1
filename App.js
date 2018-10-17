import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput,TouchableOpacity, ScrollView} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.email = "";
    this.state.password = "";
    this.state.message = "";

    this._signIn = () => {
      if(this.state.email && this.state.password) {
        this.setState({message : "Sign in failed. Wrong email or password."});
      }
    }
  }

  render() {
    const notification = this.state.message ? <Text style={styles.notification}>{this.state.message}</Text> : null;
    const header = 
      <View style={styles.header}>
        <Image source={ require('./assets/images/logo.png') } style={styles.logo} />
      </View>;

    return (
      <View style={styles.container}>
        {notification}
        <View style={styles.header}>
          <Image source={ require('./assets/images/logo.png') } style={styles.logo} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>WELCOME</Text>
          <TextInput 
            style={styles.textInput}
            placeholder="Email"
            onChangeText={ text => {this.setState({email: text})}
            }
          />
          <TextInput 
            style={styles.textInput}
            placeholder="Password"
            onChangeText={text =>  this.setState({password: text})}
            />
          <TouchableOpacity style={styles.fgpassword}>
              <Text style={styles.fgpasswordText}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this._signIn}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity style={styles.createAccount} >
              <Text style={styles.createAccountText}>Create new account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'Roboto',
    backgroundColor:'#F5F6F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notification: {
    padding: 10,
    backgroundColor: '#FE3824',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  content: {
    justifyContent:'center',
    flex:1,
  },
  text: {
    alignSelf: "center",
    color: '#CFD0D1',
  },
  title: {
    fontSize: 24,
    color: '#5B5A5A',
    alignSelf: 'center',
    letterSpacing: 4.5,
    marginBottom: 20
  },
  textInput: {
    height: 50,
    width: 300,
    alignSelf: 'center',
    borderColor: '#CFD0D1',
    color: '#979899',
    borderWidth: 1,
    fontSize: 11,
    padding:14,
    fontWeight:"bold",
  },
  button: {
    height: 50,
    width: 300,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#129793',
    fontSize: 11,
    padding:14,
    fontWeight:"bold",
  },
  footer: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 240,
    height:60,
  },
  fgpassword: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
  fgpasswordText: {
      color: '#5B5A5A',
  },
  createAccount: {
    marginBottom: 10,
  },
  createAccountText: {
    color: 'red',
  },
  header: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 240,
    height:60,
  },
});