import React, { Component } from 'react';
import Apolloclient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { apolloConfig } from './config';
import SneakerList from './components/UI/SneakerList';

const client = new Apolloclient({
  uri: apolloConfig.uri
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Ayy amlo</h1>
          <SneakerList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
