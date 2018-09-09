import React, { Component } from 'react';
import Apolloclient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { apolloConfig } from './config';

import SneakerListView from './components/SneakerQueries/SneakerListView';
import SneakerForm from './components/SneakerForm/SneakerForm';
import SneakerDropdownView from './components/SneakerQueries/SneakerDropdownView';


const client = new Apolloclient({
  uri: apolloConfig.uri
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Ayy amlo</h1>
          <SneakerListView />
          <SneakerForm />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
