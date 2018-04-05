/*  Container for exercise browser screen
 *  @flow
 */

import {QueryRenderer, graphql} from 'react-relay';
// $FlowFixMe
import {StackNavigator, type NavigationProp} from 'react-navigation';
import {Text, View} from 'react-native';
import React from 'react';

import ExerciseBrowserScreen from './ExerciseBrowserScreen.react';
import RelayEnvironmentHelper from '../../util/RelayEnvironmentHelper';
import {type ExerciseBrowserScreenContainerQueryResponse} from './__generated__/ExerciseBrowserScreenContainerQuery.graphql';

type Props = {
  navigation: NavigationProp,
};

class ExerciseBrowserScreenContainer extends React.Component<Props> {
  static navigationOptions = ({navigation}) => ({
    title: 'Exercises',
  });

  render() {
    const environment = RelayEnvironmentHelper.getEnvironment();
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ExerciseBrowserScreenContainerQuery {
            exercises {
              ...ExerciseBrowserScreen_exercises
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
            return <ExerciseBrowserScreen exercises={props.exercises} />;
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}

export default StackNavigator({
  Default: {
    screen: ExerciseBrowserScreenContainer,
  },
});
