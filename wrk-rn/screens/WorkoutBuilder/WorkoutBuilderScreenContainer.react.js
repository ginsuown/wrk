/*  Container for workout builder screen
 *  @flow
 */

import {QueryRenderer, graphql} from 'react-relay';
// $FlowFixMe
import {StackNavigator, type NavigationProp} from 'react-navigation';
import {Text, View} from 'react-native';
import React from 'react';

import WorkoutBuilderScreen from './WorkoutBuilderScreen.react';
import RelayEnvironmentHelper from '../../util/RelayEnvironmentHelper';

type Props = {
  navigation: NavigationProp,
};

class WorkoutBuilderScreenContainer extends React.Component<Props> {
  static navigationOptions = ({navigation}) => ({
    title: 'Builder',
  });

  render() {
    const environment = RelayEnvironmentHelper.getEnvironment();
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query WorkoutBuilderScreenContainerQuery {
            exerciseSessions(first: 1) {
              edges {
                node {
                  ...WorkoutBuilderScreen_session
                }
              }
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return (
              <View>
                <Text>Relay encountered an error: {error.message}</Text>
              </View>
            );
          } else if (props) {
            if (props.exerciseSessions.edges.length > 0) {
              return (
                <WorkoutBuilderScreen
                  session={props.exerciseSessions.edges[0].node}
                />
              );
            } else {
              return <Text>Couldn't find any sessions to render</Text>;
            }
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}

export default StackNavigator({
  Default: {
    screen: WorkoutBuilderScreenContainer,
  },
});
