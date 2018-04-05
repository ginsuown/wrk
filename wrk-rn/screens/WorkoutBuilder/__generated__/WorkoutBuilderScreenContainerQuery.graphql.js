/**
 * @flow
 * @relayHash d469734cc115b536f7b1a3ef4089a44d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type WorkoutBuilderScreenContainerQueryResponse = {|
  +exerciseSessions: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{| |};
    |}>;
  |};
|};
*/


/*
query WorkoutBuilderScreenContainerQuery {
  exerciseSessions(first: 1) {
    edges {
      node {
        ...WorkoutBuilderScreen_session
        id
      }
    }
  }
}

fragment WorkoutBuilderScreen_session on ExerciseSessionNode {
  id
  activities {
    edges {
      cursor
      node {
        ...ActivityTile_activity
        id
      }
    }
  }
}

fragment ActivityTile_activity on ExerciseActivityNode {
  id
  exerciseSets {
    edges {
      cursor
      node {
        ...SetTile_set
        id
      }
    }
  }
}

fragment SetTile_set on ExerciseSetNode {
  id
  exerciseRepses {
    edges {
      cursor
      node {
        ...RepsTile_reps
        id
      }
    }
  }
}

fragment RepsTile_reps on ExerciseRepsNode {
  id
  exercise {
    name
    previewImageUri
    params {
      edges {
        node {
          name
          id
        }
      }
    }
    id
  }
  paramValues {
    edges {
      node {
        param {
          name
          id
        }
        value
        id
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "WorkoutBuilderScreenContainerQuery",
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
                    "name": "WorkoutBuilderScreen_session",
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
  "name": "WorkoutBuilderScreenContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "WorkoutBuilderScreenContainerQuery",
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
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "ExerciseActivityNodeConnection",
                    "name": "activities",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "ExerciseActivityNodeEdge",
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
                            "concreteType": "ExerciseActivityNode",
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
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "ExerciseSetNodeConnection",
                                "name": "exerciseSets",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ExerciseSetNodeEdge",
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
                                        "concreteType": "ExerciseSetNode",
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
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "ExerciseRepsNodeConnection",
                                            "name": "exerciseRepses",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "kind": "LinkedField",
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "ExerciseRepsNodeEdge",
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
                                                    "concreteType": "ExerciseRepsNode",
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
                                                        "kind": "LinkedField",
                                                        "alias": null,
                                                        "args": null,
                                                        "concreteType": "ExerciseNode",
                                                        "name": "exercise",
                                                        "plural": false,
                                                        "selections": [
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "name",
                                                            "storageKey": null
                                                          },
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "previewImageUri",
                                                            "storageKey": null
                                                          },
                                                          {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "args": null,
                                                            "concreteType": "ExerciseParamNodeConnection",
                                                            "name": "params",
                                                            "plural": false,
                                                            "selections": [
                                                              {
                                                                "kind": "LinkedField",
                                                                "alias": null,
                                                                "args": null,
                                                                "concreteType": "ExerciseParamNodeEdge",
                                                                "name": "edges",
                                                                "plural": true,
                                                                "selections": [
                                                                  {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "concreteType": "ExerciseParamNode",
                                                                    "name": "node",
                                                                    "plural": false,
                                                                    "selections": [
                                                                      {
                                                                        "kind": "ScalarField",
                                                                        "alias": null,
                                                                        "args": null,
                                                                        "name": "name",
                                                                        "storageKey": null
                                                                      },
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
                                                            "storageKey": null
                                                          },
                                                          {
                                                            "kind": "ScalarField",
                                                            "alias": null,
                                                            "args": null,
                                                            "name": "id",
                                                            "storageKey": null
                                                          }
                                                        ],
                                                        "storageKey": null
                                                      },
                                                      {
                                                        "kind": "LinkedField",
                                                        "alias": null,
                                                        "args": null,
                                                        "concreteType": "ExerciseParamValueNodeConnection",
                                                        "name": "paramValues",
                                                        "plural": false,
                                                        "selections": [
                                                          {
                                                            "kind": "LinkedField",
                                                            "alias": null,
                                                            "args": null,
                                                            "concreteType": "ExerciseParamValueNodeEdge",
                                                            "name": "edges",
                                                            "plural": true,
                                                            "selections": [
                                                              {
                                                                "kind": "LinkedField",
                                                                "alias": null,
                                                                "args": null,
                                                                "concreteType": "ExerciseParamValueNode",
                                                                "name": "node",
                                                                "plural": false,
                                                                "selections": [
                                                                  {
                                                                    "kind": "LinkedField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "concreteType": "ExerciseParamNode",
                                                                    "name": "param",
                                                                    "plural": false,
                                                                    "selections": [
                                                                      {
                                                                        "kind": "ScalarField",
                                                                        "alias": null,
                                                                        "args": null,
                                                                        "name": "name",
                                                                        "storageKey": null
                                                                      },
                                                                      {
                                                                        "kind": "ScalarField",
                                                                        "alias": null,
                                                                        "args": null,
                                                                        "name": "id",
                                                                        "storageKey": null
                                                                      }
                                                                    ],
                                                                    "storageKey": null
                                                                  },
                                                                  {
                                                                    "kind": "ScalarField",
                                                                    "alias": null,
                                                                    "args": null,
                                                                    "name": "value",
                                                                    "storageKey": null
                                                                  },
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
                                        ],
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
                        ],
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
        ],
        "storageKey": "exerciseSessions{\"first\":1}"
      }
    ]
  },
  "text": "query WorkoutBuilderScreenContainerQuery {\n  exerciseSessions(first: 1) {\n    edges {\n      node {\n        ...WorkoutBuilderScreen_session\n        id\n      }\n    }\n  }\n}\n\nfragment WorkoutBuilderScreen_session on ExerciseSessionNode {\n  id\n  activities {\n    edges {\n      cursor\n      node {\n        ...ActivityTile_activity\n        id\n      }\n    }\n  }\n}\n\nfragment ActivityTile_activity on ExerciseActivityNode {\n  id\n  exerciseSets {\n    edges {\n      cursor\n      node {\n        ...SetTile_set\n        id\n      }\n    }\n  }\n}\n\nfragment SetTile_set on ExerciseSetNode {\n  id\n  exerciseRepses {\n    edges {\n      cursor\n      node {\n        ...RepsTile_reps\n        id\n      }\n    }\n  }\n}\n\nfragment RepsTile_reps on ExerciseRepsNode {\n  id\n  exercise {\n    name\n    previewImageUri\n    params {\n      edges {\n        node {\n          name\n          id\n        }\n      }\n    }\n    id\n  }\n  paramValues {\n    edges {\n      node {\n        param {\n          name\n          id\n        }\n        value\n        id\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
