import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = (text) => {
    this.setState({
      email: text,
    });
  };

  onChangePassword = (text) => {
    this.setState({
      password: text,
    });
  };

  login = () => {
    if (this.state.email == 'chien' && this.state.password == 'chien') {
      alert('success');
    } else {
      alert('Error');
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Text
                  style={{
                    fontSize: 30,
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: 'Cochin',
                  }}
                >
                  Messenger
                </Text>
                {/* <Text style={{ fontSize: 16, color: '#f7c744', textAlign: 'center', marginTop: 5, opacity: 0.9 }}>Account Information</Text> */}
              </View>
              <View style={styles.infoContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  keyboardType="default"
                  returnKeyType="next"
                  autoCorrect={false}
                  onChangeText={this.onChangeEmail}
                  value={this.state.email}
                  onSubmitEditing={() => {
                    this.refs.txtPassWord.focus();
                  }}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.8)"
                  secureTextEntry={true}
                  returnKeyType="go"
                  autoCorrect={false}
                  ref={'txtPassWord'}
                  value={this.state.password}
                  onChangeText={this.onChangePassword}
                />
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={this.login}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'rgb(32,53,70)',
                      fontSize: 18,
                    }}
                  >
                    LogIn to facebook
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(32, 53, 70)',
  },
  logoContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 40,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  input: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 20,
    color: 'white',
    paddingHorizontal: 10,
    marginBottom: 2,
  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15,
    marginHorizontal: 20,
  },
});
