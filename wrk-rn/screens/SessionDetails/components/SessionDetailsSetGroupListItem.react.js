/**
 *  One item representing a set group in an activity as shown in the session details screen.
 *  @flow
 */

import React from 'react';
import {
  Button,
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SetDifficultyGraph from './SessionDetailsSetDifficultyGraph.react';

type Props = {
  exercises: List<{name: string}>,
  createModal: ?(string) => void,
  setInstances: List<any>,
};
type State = {
  expanded: boolean,
};

export default class SessionDetailsSetGroupListItem extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  _toggleExpanded() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    const {expanded} = this.state;

    if (expanded) {
      return (
        <TouchableOpacity onPress={this._toggleExpanded.bind(this)}>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Image
                style={{width: 72, height: 72}}
                source={require('../../../images/cam.jpg')}
              />
              <View
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginLeft: 8,
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flexShrink: 1,
                    alignItems: 'flex-start',
                  }}
                >
                  <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                    {this.props.exercises[0].name}
                  </Text>
                  <Button
                    title={'About'}
                    onPress={() =>
                      this.props.createModal('No more info available.')
                    }
                  />
                </View>
              </View>
              <View style={{height: 30, width: 48, marginLeft: 8}}>
                <SetDifficultyGraph
                  values={this.props.setInstances.map(
                    instance => instance[0].weight || 0
                  )}
                />
              </View>
            </View>
            <View style={{marginLeft: 8, marginRight: 8}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 4,
                  marginBottom: 4,
                  borderBottomWidth: 1,
                  opacity: 0.7,
                }}
              >
                <View style={{flex: 1}}>
                  <Text style={styles.setDetailsHeader}>Sets</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.setDetailsHeader}>Reps</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.setDetailsHeader}>Weight</Text>
                </View>
              </View>
              <SectionList
                renderItem={({item, index}) => {
                  const params = item[0];
                  switch (params.__typename) {
                    case 'LiftTypeParams':
                      return (
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
                            <Text
                              style={[styles.setDetailsText, {opacity: 0.6}]}
                            >{`${index + 1}.`}</Text>
                          </View>
                          <View style={{flex: 1}}>
                            <Text
                              style={[
                                styles.setDetailsText,
                                {color: '#F5A623'},
                              ]}
                            >
                              {params.reps}
                            </Text>
                          </View>
                          <View style={{flex: 1}}>
                            <Text style={styles.setDetailsText}>{`${
                              params.weight
                            } lbs`}</Text>
                          </View>
                        </View>
                      );
                    case 'BodyweightTypeParams':
                      return (
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
                            <Text
                              style={[styles.setDetailsText, {opacity: 0.6}]}
                            >{`${index + 1}.`}</Text>
                          </View>
                          <View style={{flex: 1}}>
                            <Text
                              style={[
                                styles.setDetailsText,
                                {color: '#F5A623'},
                              ]}
                            >
                              {params.reps}
                            </Text>
                          </View>
                          <View style={{flex: 1}}>
                            <Text style={styles.setDetailsText}>
                              {params.weight == 0
                                ? 'BW'
                                : params.weight > 0
                                  ? `+${params.weight} lbs`
                                  : `${params.weight} lbs`}
                            </Text>
                          </View>
                        </View>
                      );
                    default:
                      return (
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
                            <Text
                              style={[styles.setDetailsText, {opacity: 0.6}]}
                            >{`${index + 1}.`}</Text>
                          </View>
                          <View style={{flex: 1}}>
                            <Text style={styles.setDetailsText}>
                              {params.__typename}
                            </Text>
                          </View>
                          <View style={{flex: 1}}>
                            <Text style={styles.setDetailsText}>Unknown</Text>
                          </View>
                        </View>
                      );
                  }
                }}
                sections={[
                  {
                    data: this.props.setInstances,
                    keyExtractor: (item, order) => order,
                  },
                ]}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={this._toggleExpanded.bind(this)}>
          <View style={styles.collapsedContainer}>
            <View style={{flexShrink: 1, paddingLeft: 8}}>
              <Text
                style={{fontSize: 22, fontWeight: 'bold'}}
                numberOfLines={2}
              >
                {this.props.exercises[0].name}
              </Text>
            </View>
            <View style={styles.rightSideContainer}>
              <View style={styles.rightSidePillContainer}>
                <View style={[styles.pill, {backgroundColor: '#4A90E2'}]}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 18}}
                  >
                    {this.props.setInstances.length}
                  </Text>
                </View>
                <View style={[styles.pill, {backgroundColor: '#F5A623'}]}>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 18}}
                  >
                    {(function(instances) {
                      const maxReps = Math.max(
                        ...instances.map(
                          item => (!!item[0].reps ? item[0].reps : 0)
                        )
                      );
                      return instances.every(item => item[0].reps == maxReps)
                        ? ` ${maxReps}*`
                        : maxReps;
                    })(this.props.setInstances)}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Image
                  source={require('../../../images/cam.jpg')}
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    marginRight: 4,
                  }}
                />
                <Text style={{fontSize: 18, fontWeight: '600'}}>
                  {(function(setInstances) {
                    const maxWeight = Math.max(
                      ...setInstances.map(
                        instance =>
                          !!instance[0].weight ? instance[0].weight : 0
                      )
                    );
                    const allTheSame = setInstances.every(
                      instance => instance[0].weight == maxWeight
                    );
                    const optionalAsterisk = allTheSame ? ' lbs' : '* lbs';
                    switch (setInstances[0][0].__typename) {
                      case 'LiftTypeParams':
                        return maxWeight.toString() + optionalAsterisk;
                      case 'BodyweightTypeParams':
                        if (maxWeight == 0 && allTheSame) {
                          return 'BW';
                        } else {
                          return `BW ${
                            maxWeight >= 0 ? '+' : ''
                          }${maxWeight}${optionalAsterisk}`;
                        }
                      default:
                        return 'Not sure';
                    }
                  })(this.props.setInstances)}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 8,
    borderBottomWidth: 1,
  },
  collapsedContainer: {
    minHeight: 96,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 8,
  },
  rightSideContainer: {
    flexDirection: 'column',
    padding: 4,
    paddingRight: 0,
    flexShrink: 0,
  },
  rightSidePillContainer: {
    flexDirection: 'row',
    padding: 4,
    paddingRight: 0,
  },
  pill: {
    width: 48,
    padding: 4,
    borderRadius: 8,
    alignItems: 'center',
    margin: 4,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
  },
  setDetailsHeader: {
    fontSize: 16,
    fontWeight: '600',
  },
  setDetailsText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
