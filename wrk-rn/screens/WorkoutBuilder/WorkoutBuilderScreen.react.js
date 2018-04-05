/*  Screen for viewing and editing a workout
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {StyleSheet, SectionList, Text, View} from 'react-native';

import {type WorkoutBuilderScreen_session} from './__generated__/WorkoutBuilderScreen_session.graphql';
import ActivityTile from './components/ActivityTile.react';

type Props = {session: WorkoutBuilderScreen_session};
type State = {};

class ExerciseBrowserScreen extends React.Component<Props, State> {
  render() {
    const {session: {activities}} = this.props;

    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({item}) => <ActivityTile activity={item.node} />}
          renderSectionHeader={({section}) => (
            <Text style={styles.header}>
              Activities ({section.data.length})
            </Text>
          )}
          sections={[
            {data: activities.edges, keyExtractor: edge => edge.cursor},
          ]}
        />
      </View>
    );
  }
}

export default createFragmentContainer(
  ExerciseBrowserScreen,
  graphql`
    fragment WorkoutBuilderScreen_session on ExerciseSessionNode {
      id
      activities {
        edges {
          cursor
          node {
            ...ActivityTile_activity
          }
        }
      }
    }
  `
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efaaef',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
  },
  header: {
    backgroundColor: '#e4e4e4',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    padding: 8,
  },
});
