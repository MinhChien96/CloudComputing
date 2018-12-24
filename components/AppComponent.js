import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';
import HomeComponent from './HomeComponent';
import CartComponent from './CartComponent';
import HistoryComponent from './HistoryComponent';
import AccountComponent from './AccountComponent';
import LoginContainers from '../containers/loginContainers';
import DetailComponent from './DetailComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            header: null,
            headerBackTitle: 'Home',
        }
    },
    Details: {
        screen: DetailComponent,
        navigationOptions: {
            title: 'Detail',
        }
    },
});

const routeConfig = {
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-home-outline" size={32} style={{ color: tintColor }}></Icon>
        }
    },
    History: {
        screen: HistoryComponent
    },
    Cart: {
        screen: CartComponent
    },
    Account: {
        screen: AccountComponent
    },
}

const TabMenu = createBottomTabNavigator(routeConfig,
    {
        tabBarOptions: {
            activeTintColor: '#87CEEB',
            inactiveTintColor: 'gray',
        },
        swipeEnabled: true,
        animationEnabled: true,
        mode: 'modal',
    }
);

export default class AppComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let main = this.props.is_login ? <LoginContainers /> : <TabMenu />;
        return (
            main
        )
    }
}
