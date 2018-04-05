/*  Screen for viewing and editing a workout
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import SessionDetailsHeader from './components/SessionDetailsHeader.react.js';
import SessionDetailsActivityListItem from './components/SessionDetailsActivityListItem.react.js';
import {Button, Modal, StyleSheet, SectionList, Text, View} from 'react-native';
import SAMPLE_SESSION from './SampleSessionData.js';

type Props = {
  modalText: ?string,
  dissmissModal: () => void,
  createModal: string => void,
};
type State = {};

const MOCK_DATA = {
  authorName: 'You',
  creationDateString: 'Dec 22, 2017',
  extraString: 'You last ran this session on Jan 4.',
};

class SessionDetailsScreen extends React.Component<Props, State> {
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
            <SessionDetailsActivityListItem
              name={item.name}
              setGroups={item.set_groups}
              createModal={this.props.createModal}
            />
          )}
          sections={[
            {
              data: [{key: 'headersection'}],
              renderItem: item => (
                <SessionDetailsHeader
                  title={SAMPLE_SESSION.name}
                  authorName={MOCK_DATA.authorName}
                  description={SAMPLE_SESSION.description}
                  creationDateString={MOCK_DATA.creationDateString}
                  extraString={MOCK_DATA.extraString}
                  createModal={this.props.createModal}
                />
              ),
            },
            {
              data: SAMPLE_SESSION.activities,
              keyExtractor: item => item.name,
            },
          ]}
        />
      </View>
    );
  }
}

export default createFragmentContainer(
  SessionDetailsScreen,
  graphql`
    fragment SessionDetailsScreen_session on Node {
      id
    }
  `
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: 'white',
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
