/*
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {QueryRenderer, graphql} from 'react-relay';

import MainTabNavigation from './navigation/MainTabNavigation.react';

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  render() {
    return <MainTabNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
