/** @format */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {name as appName} from './app.json';

// Components
import Home from './src/components/Home';
import FoodList from './src/components/FoodList';
import Search  from './src/components/Search';
import Routes from './src/components/Router';

class reactApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default reactApp

AppRegistry.registerComponent(appName, () => reactApp);
//AppRegistry.registerComponent(appName, () => Search);
