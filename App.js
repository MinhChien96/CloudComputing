import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainers from './containers/appContainers';
import configureStore from './store/configureStore';

const store = configureStore();

export default class RootComponent extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainers />
      </Provider>
    );
  }
}