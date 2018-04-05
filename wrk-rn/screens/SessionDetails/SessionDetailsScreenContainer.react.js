/*  Container for workout builder screen
 *  @flow
 */

import {QueryRenderer, graphql} from 'react-relay';
// $FlowFixMe
import {StackNavigator, type NavigationProp} from 'react-navigation';
import {Button, Text, View} from 'react-native';
import React from 'react';

import SessionDetailsScreen from './SessionDetailsScreen.react';
import RelayEnvironmentHelper from '../../util/RelayEnvironmentHelper';

type Props = {
  navigation: NavigationProp,
};

type State = {
  modalText: ?string,
};

class SessionDetailsScreenContainer extends React.Component<Props> {
  static navigationOptions = ({navigation}) => ({
    title: 'Sessions',
    headerRight: (
      <Button
        onPress={() => {
          if (navigation.state.params.onCreateButtonPress) {
            navigation.state.params.onCreateButtonPress();
          }
        }}
        title="Edit"
      />
    ),
  });

  constructor(props: Props) {
    super(props);
    this.state = {
      modalText: null,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onCreateButtonPress: this._onCreateButtonPress.bind(this),
    });
  }

  _onCreateButtonPress() {
    this.setState({
      modalText:
        "Sorry, the devs are slow and haven't implemented editing sessions " +
        "yet! You'll have to wait a little longer to do anything useful " +
        'here...',
    });
  }

  _createModal(text: string) {
    if (!this.state.modalText) {
      this.setState({modalText: text});
    }
  }

  _dismissModal() {
    if (this.state.modalText) {
      this.setState({modalText: null});
    }
  }

  render() {
    const environment = RelayEnvironmentHelper.getEnvironment();
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SessionDetailsScreenContainerQuery {
            __typename
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return (
              <View>
                <Text>Relay encountered an error: {error.message}</Text>
              </View>
            );
          } else if (props) {
            return (
              <SessionDetailsScreen
                session={null}
                modalText={this.state.modalText}
                dissmissModal={this._dismissModal.bind(this)}
                createModal={this._createModal.bind(this)}
              />
            );
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}

export default StackNavigator({
  Default: {
    screen: SessionDetailsScreenContainer,
    initialRouteParams: {
      onCreateButtonPress: () => {},
    },
  },
});
