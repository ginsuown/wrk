/**
 * @flow
 * @relayHash 6ed9e18b991d2ff8c43cdff164c02bd6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type ExerciseBrowserScreenContainerQueryResponse = {|
  +exercises: ?{| |};
|};
*/


/*
query ExerciseBrowserScreenContainerQuery {
  exercises {
    ...ExerciseBrowserScreen_exercises
  }
}

fragment ExerciseBrowserScreen_exercises on ExerciseNodeConnection {
  edges {
    cursor
    node {
      ...ExerciseBrowserListItem_exercise
      id
    }
  }
}

fragment ExerciseBrowserListItem_exercise on ExerciseNode {
  id
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExerciseBrowserScreenContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "ExerciseNodeConnection",
        "name": "exercises",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ExerciseBrowserScreen_exercises",
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
  "name": "ExerciseBrowserScreenContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "ExerciseBrowserScreenContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
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
  "text": "query ExerciseBrowserScreenContainerQuery {\n  exercises {\n    ...ExerciseBrowserScreen_exercises\n  }\n}\n\nfragment ExerciseBrowserScreen_exercises on ExerciseNodeConnection {\n  edges {\n    cursor\n    node {\n      ...ExerciseBrowserListItem_exercise\n      id\n    }\n  }\n}\n\nfragment ExerciseBrowserListItem_exercise on ExerciseNode {\n  id\n  name\n}\n"
};

module.exports = batch;
