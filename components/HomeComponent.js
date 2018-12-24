import React, { Component } from 'react';
import Button from 'react-native-button';
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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swipeout from 'react-native-swipeout';
import Modal from 'react-native-modalbox';
import IconBadge from 'react-native-icon-badge';
import Icon from 'react-native-vector-icons/Ionicons';
import * as homeActions from '../actions/home';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numberOfRefresh: 1,
    };
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.navigation.navigate('Details', this.props.item);
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row',
          }}
        >
          <Image
            style={{
              width: 130,
              height: 130,
              margin: 5,
            }}
            source={{ uri: this.props.item.imageURL }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
            <Text
              style={{
                color: '#FF1493',
                padding: 10,
                fontSize: 16,
              }}
            >
              {this.props.item.price} đ
            </Text>
            <View
              style={{
                paddingLeft: 10,
                flexDirection: 'row',
                alignContent: 'flex-start',
              }}
            >
              <Icon name="ios-star" size={15} style={{ color: '#FFD700' }} />
              <Icon name="ios-star" size={15} style={{ color: '#FFD700' }} />
              <Icon name="ios-star" size={15} style={{ color: '#FFD700' }} />
              <Icon name="ios-star" size={15} style={{ color: '#FFD700' }} />
              <Text style={{ fontSize: 12 }}>(28)</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'black',
    padding: 10,
    fontSize: 16,
  },
  noticart: {
    position: 'absolute',
    top: 1,
    right: 1,
    width: 20,
    height: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },
});

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteRowKey: null,
      refreshing: false,
      search: ''
    };
  }

  componentDidMount() {
    this.props.actions.home.fetchProduct();
  }
  refreshFlatList = (deleteKey) => {
    this.setState((preState) => {
      return {
        deleteRowKey: deleteKey,
      };
    });
    this.refs.flatlist.scrollToEnd();
  };

  refresh = () => {
    this.setState({
      search: ''
    })
    this.props.actions.home.fetchProduct();
  };

  search=(text)=>{
    this.setState({
      search: text,
    })
    this.props.actions.home.findProduct(text);
  }

  countItem = ()=>{
      let count = 0;
      if(this.props.data.carts.length!=0){
          this.props.data.carts.map(item=>{
            count += item.number;
          });
      }
      return count;
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <StatusBar barStyle="dark-content" />
        <View
          style={{
            backgroundColor: '#87CEEB',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <TextInput
            value={this.state.search}
            style={{
              textAlign: 'center',
              borderColor: 'white',
              borderWidth: 1,
              height: 40,
              width: '75%',
              backgroundColor: 'white',
              marginHorizontal: 20,
              borderRadius: 5,
            }}
            placeholder="Search ...."
            keyboardType="web-search"
            onChangeText={this.search}
          />
          <TouchableHighlight
            underlayColor="#87CEEB"
            style={{ marginRight: 20 }}
            onPress={() => {
              this.props.navigation.navigate('Cart');
            }}
          >
            <IconBadge
              MainElement={<Icon name="ios-cart-outline" size={40} />}
              BadgeElement={<Text style={{ color: '#FFFFFF' }}>{this.countItem()}</Text>}
              IconBadgeStyle={{
                borderRadius: 10,
                backgroundColor: '#CD853F',
              }}
                Hidden={this.countItem() == 0}
            />
            {/* <Icon name="ios-cart-outline" size={40}></Icon> */}
            {/* cart above */}
          </TouchableHighlight>
        </View>
        <FlatList
          ref={'flatlist'}
          data={this.props.data.products}
          refreshControl={
            <RefreshControl //kéo xuống để refresh
              refreshing={this.state.refreshing}
              onRefresh={this.refresh}
            />
          }
          renderItem={({ item, index }) => {
            return (
              <FlatListItem
                navigation={this.props.navigation}
                index={index}
                item={item}
                parentFlatList={this}
              />
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: {
      products: state.home.products,
      carts: state.cart
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      home: bindActionCreators(homeActions, dispatch)
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
