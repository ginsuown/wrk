/*  Screen for showing the running session.
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {StyleSheet, Text, View} from 'react-native';

import SessionRunnerScreen_exercises from './__generated__/SessionRunnerScreen_exercises.graphql';

type Props = {exercises: SessionRunnerScreen_exercises};
type State = {};

class SessionRunnerScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super();
  }

  render() {
    const {exercises: {edges}} = this.props;
    return (
      <View style={styles.container}>
        <Text>Session Runner Screen</Text>
        {edges.map(edge => <Text key={edge.node.id}>{edge.node.name}</Text>)}
      </View>
    );
  }
}

export default createFragmentContainer(
  SessionRunnerScreen,
  graphql`
    fragment SessionRunnerScreen_exercises on ExerciseNodeConnection {
      edges {
        node {
          id
          name
        }
      }
    }
  `
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
