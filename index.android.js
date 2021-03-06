/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './app.js';

import codePush from "react-native-code-push";

class AwsomeProject extends Component {
  render() {
    return (
      <App />
    );
  }
}

AwsomeProject = codePush(AwsomeProject);

export default  AwsomeProject;

AppRegistry.registerComponent('AwsomeProject', () => AwsomeProject);
