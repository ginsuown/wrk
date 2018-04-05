/*  An item in the exercise list
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {StyleSheet, Text, View} from 'react-native';

import {type ExerciseBrowserScreen_exercises} from './__generated__/ExerciseBrowserListItem_exercise.graphql';

type Props = {exercise: ExerciseBrowserScreen_exercises};
type State = {showName: boolean};

class ExerciseBrowserListItem extends React.Component<Props, State> {
  state: State = {
    showName: true,
  };

  render() {
    const {exercise: {id, name}} = this.props;
    const {showName} = this.state;

    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            this.setState({showName: !showName});
          }}
        >
          {this.state.showName ? name : id}
        </Text>
      </View>
    );
  }
}

export default createFragmentContainer(
  ExerciseBrowserListItem,
  graphql`
    fragment ExerciseBrowserListItem_exercise on ExerciseNode {
      id
      name
    }
  `
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    backgroundColor: '#e4e4e4',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
