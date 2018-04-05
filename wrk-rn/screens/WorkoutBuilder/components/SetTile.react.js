/*  Tile for rendering a set
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {StyleSheet, Text, View} from 'react-native';

import {type SetTile_set} from './__generated__/SetTile_set.graphql';
import RepsTile from './RepsTile.react';

type Props = {set: SetTile_set};
type State = {};

class SetTile extends React.Component<Props, State> {
  render() {
    const {set: {id, exerciseRepses}} = this.props;

    return (
      <View style={styles.container}>
        <Text>Set: Num repses {exerciseRepses.edges.length}</Text>
        {exerciseRepses.edges.map(edge => (
          <RepsTile reps={edge.node} key={edge.cursor} />
        ))}
      </View>
    );
  }
}

export default createFragmentContainer(
  SetTile,
  graphql`
    fragment SetTile_set on ExerciseSetNode {
      id
      exerciseRepses {
        edges {
          cursor
          node {
            ...RepsTile_reps
          }
        }
      }
    }
  `
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#ffaaff',
    borderRadius: 4,
    flex: 1,
    justifyContent: 'center',
    margin: 8,
    marginTop: 0,
    padding: 8,
  },
  list: {
    flex: 1,
  },
});
