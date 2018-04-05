/**
 *  One item representing an activity in a session as shown in the session details screen.
 *  @flow
 */

import React from 'react';
import {SectionList, StyleSheet, View, Text} from 'react-native';
import SessionDetailsSetGroupListItem from './SessionDetailsSetGroupListItem.react';

type Props = {
  name: ?string,
  setGroups: List<any>,
  createModal: ?(string) => void,
};
type State = {};

export default class SessionDetailsActivityListItem extends React.Component<
  Props,
  State
> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.name ? (
          <View style={styles.titleContainer}>
            <View style={{flexShrink: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', lineHeight: 24}}>
                {this.props.name}
              </Text>
            </View>
            <View style={styles.rightSidePillContainer}>
              <View style={styles.pillLegend}>
                <Text style={{color: '#4A90E2', fontWeight: 'bold'}}>Sets</Text>
              </View>
              <View style={styles.pillLegend}>
                <Text style={{color: '#F5A623', fontWeight: 'bold'}}>Reps</Text>
              </View>
            </View>
          </View>
        ) : null}
        <View>
          <SectionList
            renderItem={({item}) => (
              <SessionDetailsSetGroupListItem
                exercises={item.exercises}
                createModal={this.props.createModal}
                setInstances={item.set_instances}
              />
            )}
            sections={[
              {
                data: this.props.setGroups,
                keyExtractor: item => item.exercises[0].name,
              },
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    borderBottomWidth: 2,
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    padding: 8,
    marginTop: 16,
  },
  rightSidePillContainer: {
    flexDirection: 'row',
  },
  pillLegend: {
    width: 48,
    padding: 4,
    margin: 4,
    paddingBottom: 2,
    justifyContent: 'center',
  },
});
