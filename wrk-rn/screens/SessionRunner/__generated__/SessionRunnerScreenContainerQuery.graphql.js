/**
 * @flow
 * @relayHash 48d492f65b2fb4d2d60912f3b48e2a8a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SessionRunnerScreenContainerQueryResponse = {|
  +exercises: ?{| |};
|};
*/


/*
query SessionRunnerScreenContainerQuery(
  $exerciseName: String
) {
  exercises(name: $exerciseName) {
    ...SessionRunnerScreen_exercises
  }
}

fragment SessionRunnerScreen_exercises on ExerciseNodeConnection {
  edges {
    node {
      id
      name
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "exerciseName",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SessionRunnerScreenContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "exerciseName",
            "type": "String"
          }
        ],
        "concreteType": "ExerciseNodeConnection",
        "name": "exercises",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SessionRunnerScreen_exercises",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SessionRunnerScreenContainerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "exerciseName",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SessionRunnerScreenContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "exerciseName",
            "type": "String"
          }
        ],
        "concreteType": "ExerciseNodeConnection",
        "name": "exercises",
        "plural": false,
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
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ExerciseNode",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query SessionRunnerScreenContainerQuery(\n  $exerciseName: String\n) {\n  exercises(name: $exerciseName) {\n    ...SessionRunnerScreen_exercises\n  }\n}\n\nfragment SessionRunnerScreen_exercises on ExerciseNodeConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n"
};

module.exports = batch;
