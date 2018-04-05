/*  Tools for creating the Relay environment
 *  @flow
 */

const {Environment, Network, RecordSource, Store} = require('relay-runtime');

const GRAPHQL_PROTO = 'http';
const GRAPHQL_SERVER = '127.0.0.1:8000';
const GRAPHQL_PATH = '/graphql/';

class RelayEnvironmentHelper {
  environment: ?Environment;

  _makeEnvironment(): Environment {
    const source = new RecordSource();
    const store = new Store(source);
    function fetchQuery(operation, variables, cacheConfig, uploadables) {
      return fetch(GRAPHQL_PROTO + '://' + GRAPHQL_SERVER + GRAPHQL_PATH, {
        method: 'POST',
        headers: {
          // Add authentication and other headers here
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          query: operation.text, // GraphQL text from input
          variables,
        }),
      }).then(response => {
        return response.json();
      });
    }
    const network = Network.create(fetchQuery); // see note below
    const handlerProvider = null;

    this.environment = new Environment({
      handlerProvider, // Can omit.
      network,
      store,
    });

    return this.environment;
  }

  getEnvironment(): Environment {
    return this.environment ? this.environment : this._makeEnvironment();
  }
}

export default new RelayEnvironmentHelper();
