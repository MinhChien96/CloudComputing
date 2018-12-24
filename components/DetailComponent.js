import React, { Component } from 'react';
// import Button from 'react-native-button';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'native-base';
import Modal from 'react-native-modalbox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';

class DetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.navigation.state.params };
  }

  componentDidMount() {

  }

  showAddModal() {
    this.refs.myModal.open();
  }

  addToCart = () =>{
      this.props.actions.cart.setProduct(this.state.item,1);
      this.showAddModal();
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Image
            style={{
              width: 300,
              height: 300,
            }}
            source={{ uri: this.state.item.imageURL }}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
          }}
        >
        <Text
            style={{
              fontSize: 20,
              color: 'black',
            }}
          >
          {this.state.item.key}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
            }}
          >
            {this.state.item.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#FF1493',
            }}
          >
            {this.state.item.price} đ
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'flex-start',
            }}
          >
            <Icon name="ios-star" size={20} style={{ color: '#FFD700' }} />
            <Icon name="ios-star" size={20} style={{ color: '#FFD700' }} />
            <Icon name="ios-star" size={20} style={{ color: '#FFD700' }} />
            <Icon name="ios-star" size={20} style={{ color: '#FFD700' }} />
            <Icon name="ios-star" size={20} style={{ color: '#FFD700' }} />
            <Text>(28)</Text>
          </View>
        </View>
        <Button
          block
          style={{
            backgroundColor: '#FF1493',
            marginHorizontal: 5,
            marginTop: 15,
            marginBottom: 5
          }}
          onPress={this.addToCart}
        >
          <Text style={{ color: 'white' }}>Purchase</Text>
        </Button>
        <Modal
          ref={'myModal'}
          style={{
            justifyContent: 'center',
            borderRadius: 15,
            shadowRadius: 10,
            width: Dimensions.get('window').width - 5,
            height: 230,
          }}
          position="center"
          backdrop={true}
          onClosed={() => {}}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Icon
                name="ios-checkmark-circle"
                size={25}
                style={{ color: 'gray', flex: 10 }}
              />
              <Text style={{ flex: 60, alignItems: 'center', fontSize: 15 }}>
                Add product to cart successed
              </Text>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.refs.myModal.close();
                }}
              >
                <Icon
                  name="ios-arrow-dropdown"
                  size={25}
                  style={{ color: 'gray' }}
                />
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                }}
                source={{ uri: this.state.item.imageURL }}
              />
              <View style={{ marginRight: 100, marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    marginBottom: 10,
                  }}
                >
                  {this.state.item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#FF1493',
                  }}
                >
                  {this.state.item.price} đ
                </Text>
              </View>
            </View>
            <Button
              block
              style={{
                backgroundColor: '#FF1493',
                marginHorizontal: 15,
                marginTop: 10
              }}
              onPress={() => {
                this.props.navigation.navigate('Cart');
              }}
            >
              <Text style={{ color: 'white' }}>Go to cart</Text>
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      cart: bindActionCreators(cartActions, dispatch)
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailComponent);