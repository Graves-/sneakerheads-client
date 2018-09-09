import React, { Component } from 'react';
import { GetSneakersQuery } from './GetSneakersQuery';
import { Query } from 'react-apollo';
import SneakerDropdown from '../UI/SneakerDropdown/SneakerDropdown';

export default class SneakerDropdownView extends Component {
  render() {
    return (
      <Query query={GetSneakersQuery}>
        {({loading, error, data}) => {
            if(loading) return "Loading...";
            if(error) return `Error: ${error.message}`;

            return data && <SneakerDropdown sneakers={data.sneakers} onSelect={this.props.onSelect} />;
        }}
      </Query>
    )
  }
}