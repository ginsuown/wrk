/*  Container for workout builder screen
 *  @flow
 */

import {QueryRenderer, graphql} from 'react-relay';
// $FlowFixMe
import {StackNavigator, type NavigationProp} from 'react-navigation';
import {Button, Text, View} from 'react-native';
import React from 'react';

import SessionBrowserScreen from './SessionBrowserScreen.react';
import RelayEnvironmentHelper from '../../util/RelayEnvironmentHelper';

type Props = {
  navigation: NavigationProp,
};

type State = {
  modalText: ?string,
};

class SessionBrowserScreenContainer extends React.Component<Props> {
  static navigationOptions = ({navigation}) => ({
    title: 'Sessions',
    headerRight: (
      <Button
        onPress={() => {
          if (navigation.state.params.onCreateButtonPress) {
            navigation.state.params.onCreateButtonPress();
          }
        }}
        title="Create"
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
        "Sorry, the devs are slow and haven't implemented creating sessions " +
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
          query SessionBrowserScreenContainerQuery {
            exerciseSessions(first: 1) {
              edges {
                node {
                  ...SessionBrowserScreen_session
                }
              }
            }
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
            if (props.exerciseSessions.edges.length > 0) {
              return (
                <SessionBrowserScreen
                  session={null}
                  modalText={this.state.modalText}
                  dissmissModal={this._dismissModal.bind(this)}
                  createModal={this._createModal.bind(this)}
                />
              );
            } else {
              return <Text>Couldn't find any sessions to render</Text>;
            }
          }
          return <Text>Loading</Text>;
        }}
      />
    );
  }
}

export default StackNavigator({
  Default: {
    screen: SessionBrowserScreenContainer,
    initialRouteParams: {
      onCreateButtonPress: () => {},
    },
  },
});
