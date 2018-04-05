/*  Screen for browsing through a list of exercises
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {StyleSheet, ScrollView, Text, View} from 'react-native';

import {type ExerciseBrowserScreen_exercises} from './__generated__/ExerciseBrowserScreen_exercises.graphql';
import ExerciseBrowserListItem from './components/ExerciseBrowserListItem.react';

type Props = {exercises: ExerciseBrowserScreen_exercises};
type State = {};

class ExerciseBrowserScreen extends React.Component<Props, State> {
  render() {
    const {exercises: {edges}} = this.props;

    return (
      <View style={styles.container}>
        <Text>There are {edges.length} exercises</Text>
        <ScrollView style={styles.list}>
          {edges.map(edge => (
            <ExerciseBrowserListItem exercise={edge.node} key={edge.cursor} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default createFragmentContainer(
  ExerciseBrowserScreen,
  graphql`
    fragment ExerciseBrowserScreen_exercises on ExerciseNodeConnection {
      edges {
        cursor
        node {
          ...ExerciseBrowserListItem_exercise
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
