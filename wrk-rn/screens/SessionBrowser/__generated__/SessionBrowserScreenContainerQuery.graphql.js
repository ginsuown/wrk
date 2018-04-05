/**
 * @flow
 * @relayHash f79b9c622d238ca2ac021eb94d99fc06
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SessionBrowserScreenContainerQueryResponse = {|
  +exerciseSessions: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{| |};
    |}>;
  |};
|};
*/


/*
query SessionBrowserScreenContainerQuery {
  exerciseSessions(first: 1) {
    edges {
      node {
        ...SessionBrowserScreen_session
        id
      }
    }
  }
}

fragment SessionBrowserScreen_session on ExerciseSessionNode {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SessionBrowserScreenContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 1,
            "type": "Int"
          }
        ],
        "concreteType": "ExerciseSessionNodeConnection",
        "name": "exerciseSessions",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ExerciseSessionNodeEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ExerciseSessionNode",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "SessionBrowserScreen_session",
                    "args": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "exerciseSessions{\"first\":1}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SessionBrowserScreenContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "SessionBrowserScreenContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 1,
            "type": "Int"
          }
        ],
        "concreteType": "ExerciseSessionNodeConnection",
        "name": "exerciseSessions",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "ExerciseSessionNodeEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "ExerciseSessionNode",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "exerciseSessions{\"first\":1}"
      }
    ]
  },
  "text": "query SessionBrowserScreenContainerQuery {\n  exerciseSessions(first: 1) {\n    edges {\n      node {\n        ...SessionBrowserScreen_session\n        id\n      }\n    }\n  }\n}\n\nfragment SessionBrowserScreen_session on ExerciseSessionNode {\n  id\n}\n"
};

module.exports = batch;
