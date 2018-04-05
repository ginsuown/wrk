/**
 *  An indicator of the relative difficulty of sets.
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
  values: List<Number>,
  minValProp?: ?Number,
};
type State = {
  derivedMinValProp: Number,
};

export default class SessionDetailsSetDifficultyGraph extends React.Component<
  Props,
  State
> {
  static defaultProps = {
    minValProp: null,
  };

  constructor(props: Props) {
    super(props);
    var minValProp = props.minValProp;

    if (!minValProp) {
      const numUniqueValues = new Set(props.values).size;
      if (numUniqueValues <= 2) {
        minValProp = 40;
      } else if (numUniqueValues <= 4) {
        minValProp = 30;
      } else {
        minValProp = 20;
      }
    }
    this.state = {
      derivedMinValProp: minValProp,
    };
  }

  render() {
    const {values} = this.props;
    if (values.length <= 1) {
      return null;
    }

    const sortedValues = Array.from(values).sort();
    const maxVal = sortedValues[sortedValues.length - 1];
    const minVal = sortedValues[0];
    const units = values.length * (5 + 2) - 2;
    const unitWidth = 100 / units;
    const barWidth = 5 * unitWidth + '%';

    const bars = values.map((value, index) => {
      var valueProp =
        maxVal - minVal == 0 ? 0.5 : (value - minVal) / (maxVal - minVal);

      return (
        <View
          key={index}
          style={[
            styles.bar,
            {
              height:
                valueProp * (100.0 - this.state.derivedMinValProp) +
                this.state.derivedMinValProp +
                '%',
              width: barWidth,
              left: 7 * index * unitWidth + '%',
            },
          ]}
        />
      );
    });

    return <View style={styles.mainContainer}>{bars}</View>;
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flex: 1,
  },
  bar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#50E3C2',
  },
});
