/*  Relay container for the session runner screen.
 *  @flow
 */

import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import {Text, View} from 'react-native';
// $FlowFixMe
import {StackNavigator, type NavigationProp} from 'react-navigation';

import RelayEnvironmentHelper from '../../util/RelayEnvironmentHelper';
import SessionRunnerScreen from './SessionRunnerScreen.react';
import SessionRunnerScreenContainerQueryResponse from './__generated__/SessionRunnerScreenContainerQuery.graphql';

type Props = {
  navigation: NavigationProp,
};

class SessionRunnerScreenContainer extends React.Component<Props> {
  static navigationOptions = ({navigation}) => ({
    title: 'Session',
  });

  constructor() {
    super();
  }

  render() {
    const environment = RelayEnvironmentHelper.getEnvironment();
    return (
      // Render this somewhere with React:
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SessionRunnerScreenContainerQuery($exerciseName: String) {
            exercises(name: $exerciseName) {
              ...SessionRunnerScreen_exercises
            }
          }
        `}
        variables={{
          exerciseName: null,
        }}
        render={({error, props}) => {
          if (error) {
            return (
              <View>
                <Text>Relay encountered an error: {error.message}</Text>
              </View>
            );
          } else if (props) {
            return <SessionRunnerScreen exercises={props.exercises} />;
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}

export default StackNavigator({
  Default: {
    screen: SessionRunnerScreenContainer,
  },
});
