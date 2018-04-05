/**
 * @flow
 * @relayHash 70d076f2292df232d7b0dbd5a888ceb0
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SessionHistoryScreenContainerQueryResponse = {|
  +exercises: ?{| |};
|};
*/


/*
query SessionHistoryScreenContainerQuery(
  $exerciseName: String
) {
  exercises(name: $exerciseName) {
    ...SessionHistoryScreen_exercises
  }
}

fragment SessionHistoryScreen_exercises on ExerciseNodeConnection {
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
    "name": "SessionHistoryScreenContainerQuery",
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
            "name": "SessionHistoryScreen_exercises",
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
  "name": "SessionHistoryScreenContainerQuery",
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
    "name": "SessionHistoryScreenContainerQuery",
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
  "text": "query SessionHistoryScreenContainerQuery(\n  $exerciseName: String\n) {\n  exercises(name: $exerciseName) {\n    ...SessionHistoryScreen_exercises\n  }\n}\n\nfragment SessionHistoryScreen_exercises on ExerciseNodeConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n"
};

module.exports = batch;
