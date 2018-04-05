/**
 *  One item representing a session as shown in the session browser session list.
 *  @flow
 */

import React from 'react';
import {Image, StyleSheet, View, Text, TouchableHighlight} from 'react-native';

type Props = {
  title: string,
  authorName: string,
  creationDateString: string,
  extraString: ?string,
  createModal: ?(string) => void,
};
type State = {};

export default class SessionBrowserListItem extends React.Component<
  Props,
  State
> {
  render() {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.createModal(`Can't open session ${this.props.title}`);
        }}
        style={styles.containerWrapper}
      >
        <View style={styles.container}>
          <Image
            source={require('../../../images/cam.jpg')}
            style={styles.previewImage}
          />
          <View style={styles.previewInfoContainer}>
            <Text style={{fontSize: 18, fontWeight: 'bold', lineHeight: 24}}>
              {this.props.title}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../../images/cam.jpg')}
                style={styles.authorImage}
              />
              <Text style={{opacity: 0.8, paddingTop: 4}}>
                <Text style={{fontWeight: 'bold'}}>
                  {this.props.authorName}
                </Text>{' '}
                on{' '}
                <Text style={{fontWeight: 'bold'}}>
                  {this.props.creationDateString}
                </Text>
              </Text>
            </View>
            <Text style={{fontStyle: 'italic', opacity: 0.8, paddingTop: 4}}>
              {this.props.extraString}
            </Text>
          </View>
          <View style={styles.rowDivider} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#aabbff',
    flex: 1,
    flexDirection: 'row',
    height: 97,
    justifyContent: 'flex-start',
    padding: 8,
  },
  containerWrapper: {
    backgroundColor: '#ff00ff',
  },
  previewImage: {
    borderRadius: 36,
    height: 72,
    width: 72,
  },
  authorImage: {
    borderRadius: 10,
    height: 20,
    width: 20,
  },
  previewInfoContainer: {
    margin: 8,
  },
  rowDivider: {
    backgroundColor: 'black',
    bottom: 0,
    height: 1,
    left: 16,
    position: 'absolute',
    right: 16,
  },
});
