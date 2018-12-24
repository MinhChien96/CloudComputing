import React, { Component } from 'react';
import Button from 'react-native-button';
import {Text,View,Image,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HistoryComponent extends Component {
    static navigationOptions = ({navigation})=>{
        const {params={}}=navigation.state;
        let tabBarLabel = 'History';
        let tabBarIcon = (tintColor) => (
            <Icon name="ios-list-box-outline" size={32} style={{ color: tintColor.tintColor }}></Icon>
        ); 
        return {tabBarLabel,tabBarIcon}
    }
    render(){
        const { bill} = this.props.data;
        if(bill.total){
            return(
                <View style={{
                    flex:1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 25,
                }}> 
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: Dimensions.get('window').width - 5,
                        backgroundColor: 'lightgray',
                        justifyContent: 'center',
                        height: 100
                    }}>
                        <Text>Order detail</Text>
                        <Text>Date: {bill.date.toString()}</Text>
                        <Text>Quantity: {bill.quantity}</Text>
                        <Text>Total: {bill.total}</Text>
                    </View>
                </View>
            )
        }
        else
         {
             return (
                 <View style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignContent:'center'
                 }}>
                    <Text>No order</Text>
                 </View>
             )
         }
    }
}

const mapStateToProps = (state) => {
    return {
      data: {
        bill: state.history,
      },
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HistoryComponent);
  