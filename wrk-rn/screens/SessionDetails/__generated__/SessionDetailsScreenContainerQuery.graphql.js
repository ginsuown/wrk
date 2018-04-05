/**
 * @flow
 * @relayHash e03b2e556c19c9f9bcc736f0cf58ff23
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SessionDetailsScreenContainerQueryResponse = {|
  +__typename: string;
|};
*/


/*
query SessionDetailsScreenContainerQuery {
  __typename
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SessionDetailsScreenContainerQuery",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "__typename",
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SessionDetailsScreenContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "SessionDetailsScreenContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "__typename",
        "storageKey": null
      }
    ]
  },
  "text": "query SessionDetailsScreenContainerQuery {\n  __typename\n}\n"
};

module.exports = batch;
