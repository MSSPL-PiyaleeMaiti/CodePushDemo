import React, {Component} from 'react';

import {Text, 
  View ,
  Navigator,

} from 'react-native';

import Spalsh from './components/splash';
import Login from './components/login';
import Home from './components/home';

const components = {
  'Spalsh': Spalsh,
  'Login': Login,
  'Home': Home,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.renderNavigatorScene = this.renderNavigatorScene.bind(this);

  }

  renderNavigatorScene(route, navigator) {
    const SpecificStory = components[route.title];
    if(SpecificStory) {
      return <SpecificStory title={route.title} navigator={navigator} {...route.passProps} />
    
    } else {
      return <Spalsh title="Spalsh" navigator={navigator} {...route.passProps} />
    
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{title: 'Spalsh', index: 0}}
        renderScene={(route, navigator) => this.renderNavigatorScene(route, navigator)}
       />
    );
  }
}

export default App;