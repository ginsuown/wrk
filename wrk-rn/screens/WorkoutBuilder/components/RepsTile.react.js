/*  Tile for rendering a set
 *  @flow
 */

import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import {Image, StyleSheet, Text, View} from 'react-native';

import {type RepsTile_reps} from './__generated__/RepsTile_reps.graphql';

type Props = {reps: RepsTile_reps};
type State = {};

class RepsTile extends React.Component<Props, State> {
  render() {
    const {reps: {id, exercise, paramValues}} = this.props;

    const exerciseParamNames = exercise.params.edges.map(
      edge => edge.node.name
    );
    var exerciseParamValues = {};
    paramValues.edges.map(edge => {
      exerciseParamValues[edge.node.param.name] = edge.node.value;
    });

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.previewImage}
            source={{
              uri: exercise.previewImageUri,
            }}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text>{exercise.name}</Text>
          {exerciseParamNames.map(paramName => (
            <Text key={paramName}>
              -{paramName}: {exerciseParamValues[paramName] || 'N/A'}
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#aaffbb',
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 8,
    marginTop: 0,
    padding: 8,
  },
  paramsContainer: {
    backgroundColor: '#ffffdd',
  },
  imageContainer: {
    backgroundColor: 'cyan',
  },
  previewImage: {
    height: 100,
    resizeMode: 'cover',
    width: 100,
  },
  descriptionContainer: {
    flex: 1,
    paddingLeft: 8,
  },
});

export default createFragmentContainer(
  RepsTile,
  graphql`
    fragment RepsTile_reps on ExerciseRepsNode {
      id
      exercise {
        name
        previewImageUri
        params {
          edges {
            node {
              name
            }
          }
        }
      }
      paramValues {
        edges {
          node {
            param {
              name
            }
            value
          }
        }
      }
    }
  `
);
