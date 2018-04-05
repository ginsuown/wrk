/**
 *  One item representing a session as shown in the session browser session list.
 *  @flow
 */

import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

type Props = {
  title: string,
  authorName: string,
  description: ?string,
  creationDateString: string,
  extraString: ?string,
  createModal: ?(string) => void,
};
type State = {};

export default class SessionDetailsHeader extends React.Component<
  Props,
  State
> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.infoContainer}>
          <Image
            source={require('../../../images/cam.jpg')}
            style={styles.previewImage}
          />
          <View style={styles.previewInfoContainer}>
            <Text style={{fontSize: 24, fontWeight: 'bold', lineHeight: 32}}>
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
        </View>
        <View style={{marginTop: 8}}>
          <Text>{this.props.description}</Text>
        </View>
        <View style={styles.buttonBarContainer}>
          <View style={styles.buttonBarLeft}>
            <Button
              title={'Share'}
              onPress={() => this.props.createModal("Can't share yet!")}
            />
          </View>
          <View style={styles.buttonBarRight}>
            <Button
              title={'Save'}
              onPress={() => this.props.createModal("Can't save yet!")}
            />
            <Button
              title={'Start'}
              onPress={() => this.props.createModal("Can't start yet!")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 16,
  },
  infoContainer: {
    alignItems: 'stretch',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonBarContainer: {
    flexDirection: 'row',
  },
  buttonBarLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonBarRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  previewImage: {
    borderRadius: 0,
    height: 100,
    width: 100,
    marginRight: 16,
  },
  authorImage: {
    borderRadius: 10,
    height: 20,
    width: 20,
    marginRight: 4,
  },
  previewInfoContainer: {
    margin: 8,
  },
});
