/*  Screen for viewing and editing a workout
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import SessionBrowserListItem from './components/SessionBrowserListItem.react.js';
import {Button, Modal, StyleSheet, SectionList, Text, View} from 'react-native';

type Props = {
  modalText: ?string,
  dissmissModal: () => void,
  createModal: string => void,
};
type State = {};

const MOCK_DATA = [
  {
    title: 'Super Blast',
    authorName: 'You',
    creationDateString: 'Dec 22, 2017',
    extraString: 'You last ran this session on Jan 4.',
  },
  {
    title: 'Even Bigger Blast',
    authorName: 'You',
    creationDateString: 'Jan 3, 2018',
    extraString: "You haven't run this session before.",
  },
  {
    title: 'Middle Mgmt Time',
    authorName: 'Cameron Gao',
    creationDateString: 'Jan 4, 2018',
    extraString: "You haven't run this session before.",
  },
];

class SessionBrowserScreen extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={!!this.props.modalText}
          transparent={true}
          onRequestClose={this.props.dissmissModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>{this.props.modalText}</Text>
              <Button title={'OK'} onPress={this.props.dissmissModal} />
            </View>
          </View>
        </Modal>
        <SectionList
          renderItem={({item}) => (
            <SessionBrowserListItem
              title={item.title}
              authorName={item.authorName}
              creationDateString={item.creationDateString}
              extraString={item.extraString}
              createModal={this.props.createModal}
            />
          )}
          sections={[{data: MOCK_DATA, keyExtractor: item => item.title}]}
        />
      </View>
    );
  }
}

export default createFragmentContainer(
  SessionBrowserScreen,
  graphql`
    fragment SessionBrowserScreen_session on ExerciseSessionNode {
      id
    }
  `
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#efaaef',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 8,
  },
  list: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'aliceblue',
    padding: 8,
  },
});
