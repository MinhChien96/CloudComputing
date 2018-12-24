import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    View, StyleSheet, Text, TextInput,
    SafeAreaView, StatusBar, Keyboard,
    KeyboardAvoidingView, TouchableWithoutFeedback,
    TouchableOpacity, Image
} from 'react-native';
import { gray } from 'ansi-colors';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/Ionicons';

var radio_props = [
    { label: 'Nam', value: 0 },
    { label: 'Nữ', value: 1 }
];

export default class AccountComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Account';
        let tabBarIcon = (tintColor) => (
            <Icon name="ios-contact-outline" size={32} style={{ color: tintColor.tintColor }}></Icon>
        );
        return { tabBarLabel, tabBarIcon }
    }
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
                alignItems: 'stretch'
            }}>
                <StatusBar barStyle='dark-content'></StatusBar>
                <View style={{
                    marginTop: 20,
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.5,
                    height: 60,
                    justifyContent: 'center',
                    marginBottom: 5,
                    backgroundColor: 'lightgrey'
                }}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Thông tin cá nhân</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ marginBottom: 2 }}>Họ và tên</Text>
                    <TextInput
                        placeholder='Nguyen Minh Chien'
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 0.5,
                            paddingHorizontal: 10,
                        }}></TextInput>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ marginBottom: 2 }}>Địa chỉ</Text>
                    <TextInput
                        placeholder='Gia Lâm, Hà Nội'
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 0.5,
                            paddingHorizontal: 10,
                        }}></TextInput>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ marginBottom: 2 }}>Số điện thoại</Text>
                    <TextInput
                        placeholder='0363605867'
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 0.5,
                            paddingHorizontal: 10,
                        }}></TextInput>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ marginBottom: 2 }}>Email</Text>
                    <TextInput
                        placeholder='nguyenminhchien8496@gmail.com'
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 0.5,
                            paddingHorizontal: 10,
                        }}></TextInput>
                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ marginBottom: 2 }}>Địa chỉ</Text>
                    <TextInput
                        placeholder='Gia Lâm, Hà Nội'
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 0.5,
                            paddingHorizontal: 10,
                        }}></TextInput>
                </View>
                <View style={{ margin: 10,flexDirection: 'row',justifyContent: 'flex-start' }}>
                    <View style={{width: '50%' }}>
                        <Text style={{ marginBottom: 2 }}>Giới tính</Text>
                    </View>
                    <View styl={{ }}>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => { }}
                        formHorizontal={true}
                        labelHorizontal={true}
                        
                    />
                    </View>  
                </View>
                
            </View>
        )
    }
}