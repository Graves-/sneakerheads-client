import React, { Component } from 'react';
import { GetSneakersQuery } from './GetSneakersQuery';
import { Query } from 'react-apollo';
import SneakerList from '../UI/SneakerList/SneakerList';

export default class SneakerListView extends Component {
  render() {
    return (
      <Query query={GetSneakersQuery}>
        {({loading, error, data}) => {
            if(loading) return "Loading...";
            if(error) return `Error: ${error.message}`;

            return data && <SneakerList sneakers={data.sneakers} />;
        }}
      </Query>
    )
  }
}