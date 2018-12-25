import React, { Component } from 'react';
// import Button from 'react-native-button';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Alert,
  TouchableHighlight,
  Dimensions,
  TextInput,
  RefreshControl,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import * as historyActions from '../actions/history';
import { Input, Button, Form, Item, Label } from 'native-base';

class CartItem extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }

  add = () => {
    const { item } = this.props;
    this.props.setProduct(item.product, 1);
  };

  sub = () => {
    const { item } = this.props;
    this.props.setProduct(item.product, -1);
  };

  remove = () => {
    this.props.removeProduct(this.props.item.product.key);
  };

  render() {
    const { item } = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: 'white',
          marginTop: this.props.index == 0 ? 2 : 0,
          marginBottom: 3,
        }}
      >
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          source={{ uri: item.product.image_url }}
        />
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              marginBottom: 10,
              marginRight: 120,
            }}
          >
            {item.product.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#FF1493',
            }}
          >
            {item.product.price} đ
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <Button
              light
              style={{
                height: 35,
                width: 35,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.sub}
            >
              <Icon name="ios-remove" size={23} />
            </Button>
            <TextInput
              style={{
                height: 35,
                width: 70,
                textAlign: 'center',
                backgroundColor: '#F8F8F8',
                borderRadius: 10,
              }}
              editable={false}
            >
              {this.props.item.number}
            </TextInput>
            <Button
              light
              style={{
                height: 35,
                width: 35,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.add}
            >
              <Icon size={23} name="ios-add" />
            </Button>
            <Button
              light
              style={{
                height: 35,
                width: 35,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 75,
              }}
              onPress={this.remove}
            >
              <Icon size={23} name="ios-close" />
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

class CartComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = 'Cart';
    // let tabBarIcon = (tintColor) => (
    //     <Icon name="ios-home-outline" size={32} style={{color:'gray'}}></Icon>
    // );
    let tabBarIcon = (tintColor) => {
      // console.log(tintColor);
      return (
        <Icon
          name="ios-cart-outline"
          size={32}
          style={{ color: tintColor.tintColor }}
        />
      );
    };
    return { tabBarLabel, tabBarIcon };
  };

  constructor(props) {
    super(props);
  }

  refresh = () => {
    // this.setState(preState => {
    //     return { refreshing: !this.state.refreshing }
    // })
  };
  total = () => {
    let total = 0;
    this.props.data.carts.map((item) => {
      total += item.number * item.product.price;
    });
    return total;
  };

  countItem = () => {
    let count = 0;
    if (this.props.data.carts.length != 0) {
      this.props.data.carts.map((item) => {
        count += item.number;
      });
    }
    return count;
  };

  addHistory = () => {
    const bill = {
      total: this.total(),
      date: new Date(),
      quantity: this.countItem(),
    };
    this.props.actions.history.setBill(bill);
  };

  componentDidMount() {}
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightgray',
          marginTop: 25,
        }}
      >
        <StatusBar barStyle="dark-content" />
        <FlatList
          ref={'flatlist'}
          data={this.props.data.carts}
          refreshControl={
            <RefreshControl onRefresh={this.refresh} refreshing={false} />
          }
          renderItem={({ item, index }) => {
            return (
              <CartItem
                index={index}
                item={item}
                setProduct={this.props.actions.cart.setProduct}
                removeProduct={this.props.actions.cart.removeProduct}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <View
          style={{
            bottom: 2,
            backgroundColor: 'white',
            height: 100,
            width: Dimensions.get('window').width - 5,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: 'left',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              Total
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'right',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
                fontSize: 18,
                color: '#FF1493',
                marginRight: 10,
              }}
            >
              {this.total()} đ
            </Text>
          </View>
          <Button
            block
            style={{
              backgroundColor: '#FF1493',
              height: 50,
            }}
            onPress={() => {
              if (this.props.data.carts.length > 0) this.refs.myModal.open();
            }}
          >
            <Text style={{ color: 'white' }}>Order</Text>
          </Button>
        </View>
        <Modal
          ref={'myModal'}
          style={{
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            shadowRadius: 10,
            width: Dimensions.get('window').width - 5,
            height: 400,
          }}
          swipeToClose={false}
          backdropPressToClose={false}
          position="center"
          backdrop={true}
          onClosed={() => {}}
        >
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Adress</Label>
              <Input />
            </Item>
          </Form>
          <Button
            block
            style={{
              backgroundColor: '#FF1493',
              marginHorizontal: 15,
              marginTop: 60,
              marginBottom: 5,
            }}
            onPress={() => {
              this.addHistory();
              this.props.actions.cart.order();
              this.refs.myModal.close();
            }}
          >
            <Text style={{ color: 'white' }}>Submit</Text>
          </Button>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: {
      carts: state.cart,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      cart: bindActionCreators(cartActions, dispatch),
      history: bindActionCreators(historyActions, dispatch),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartComponent);
