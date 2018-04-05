/*  Screen for seeing a history of prior sessions.
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {StyleSheet, Text, View} from 'react-native';

import SessionHistoryScreen_exercises from './__generated__/SessionHistoryScreen_exercises.graphql';

type Props = {exercises: SessionHistoryScreen_exercises};
type State = {};

class SessionHistoryScreen extends React.Component<Props, State> {
  render() {
    const {exercises: {edges}} = this.props;
    return (
      <View style={styles.container}>
        <Text>Session History Screen</Text>
        {edges.map(edge => <Text key={edge.node.id}>{edge.node.name}</Text>)}
      </View>
    );
  }
}

export default createFragmentContainer(
  SessionHistoryScreen,
  graphql`
    fragment SessionHistoryScreen_exercises on ExerciseNodeConnection {
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
  list: {
    flex: 1,
  },
});
