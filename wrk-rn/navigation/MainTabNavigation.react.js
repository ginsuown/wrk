/*  App main Tab Navigator
 *  @flow
 */

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
// $FlowFixMe
import {TabNavigator} from 'react-navigation';

import SessionRunnerScreenContainer from '../screens/SessionRunner/SessionRunnerScreenContainer.react';
import SessionBrowserScreenContainer from '../screens/SessionBrowser/SessionBrowserScreenContainer.react';
import SessionDetailsScreenContainer from '../screens/SessionDetails/SessionDetailsScreenContainer.react';
import SessionHistoryScreenContainer from '../screens/SessionHistory/SessionHistoryScreenContainer.react';
import ExerciseBrowserScreenContainer from '../screens/ExerciseBrowser/ExerciseBrowserScreenContainer.react';
import WorkoutBuilderScreenContainer from '../screens/WorkoutBuilder/WorkoutBuilderScreenContainer.react';

const MainTabNavigation = TabNavigator(
  {
    SessionBrowser: {
      screen: SessionBrowserScreenContainer,
      navigationOptions: {
        tabBarLabel: 'Sessions',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-play' : 'ios-play-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    SessionDetails: {
      screen: SessionDetailsScreenContainer,
      navigationOptions: {
        tabBarLabel: 'Details',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-time' : 'ios-time-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    ExerciseBrowser: {
      screen: ExerciseBrowserScreenContainer,
      navigationOptions: {
        tabBarLabel: 'Exercises',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-basketball' : 'ios-basketball-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
    WorkoutBuilder: {
      screen: WorkoutBuilderScreenContainer,
      navigationOptions: {
        tabBarLabel: 'Builder',
        tabBarIcon: ({tintColor, focused}) => (
          <Ionicons
            name={focused ? 'ios-list' : 'ios-list-outline'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    navigationOptions: {
      animationEnabled: false,
    },
    initialRouteName: 'SessionDetails',
  }
);

export default MainTabNavigation;
