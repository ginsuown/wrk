/*  Tile displaying an activity
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {StyleSheet, Text, View} from 'react-native';

import {type ActivityTile_activity} from './__generated__/ActivityTile_activity.graphql';
import SetTile from './SetTile.react';

type Props = {activity: ActivityTile_activity};
type State = {};

class ActivityTile extends React.Component<Props, State> {
  render() {
    const {activity: {id, exerciseSets}} = this.props;

    return (
      <View style={styles.container}>
        <Text>Activity: Num sets {exerciseSets.edges.length}</Text>
        {exerciseSets.edges.map(edge => (
          <SetTile set={edge.node} key={edge.cursor} />
        ))}
      </View>
    );
  }
}

export default createFragmentContainer(
  ActivityTile,
  graphql`
    fragment ActivityTile_activity on ExerciseActivityNode {
      id
      exerciseSets {
        edges {
          cursor
          node {
            ...SetTile_set
          }
        }
      }
    }
  `
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#aabbff',
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
