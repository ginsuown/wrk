/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ExerciseBrowserScreen_exercises = {|
  +edges: $ReadOnlyArray<?{|
    +cursor: string;
    +node: ?{| |};
  |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExerciseBrowserScreen_exercises",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "ExerciseNodeEdge",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "cursor",
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "ExerciseNode",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "ExerciseBrowserListItem_exercise",
              "args": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ExerciseNodeConnection"
};

module.exports = fragment;
