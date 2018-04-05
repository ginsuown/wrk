/*  Relay container for the session history screen.
 *  @flow
 */

import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import {Text, View} from 'react-native';

import RelayEnvironmentHelper from '../../util/RelayEnvironmentHelper';
import SessionHistoryScreen from './SessionHistoryScreen.react';
import SessionHistoryScreenContainerQueryResponse from './__generated__/SessionHistoryScreenContainerQuery.graphql';
// $FlowFixMe
import {StackNavigator, type NavigationProp} from 'react-navigation';

type Props = SessionHistoryScreenContainerQueryResponse & {
  navigation: ?NavigationProp,
};
type State = {};

class SessionHistoryScreenContainer extends React.Component<Props> {
  static navigationOptions = ({navigation}) => ({
    title: 'History',
  });

  render() {
    const environment = RelayEnvironmentHelper.getEnvironment();
    return (
      // Render this somewhere with React:
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SessionHistoryScreenContainerQuery($exerciseName: String) {
            exercises(name: $exerciseName) {
              ...SessionHistoryScreen_exercises
            }
          }
        `}
        variables={{
          exerciseName: 'pushups',
        }}
        render={({error, props}) => {
          if (error) {
            return (
              <View>
                <Text>Relay encountered an error: {error.message}</Text>
              </View>
            );
          } else if (props) {
            return <SessionHistoryScreen exercises={props.exercises} />;
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}

const SessionHistoryScreenContainerNavigation = StackNavigator({
  Default: {
    screen: SessionHistoryScreenContainer,
  },
});

export default SessionHistoryScreenContainerNavigation;
