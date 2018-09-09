import React, { Component } from 'react';
import { GetBrands } from '../SneakerForm/FormMutations';
import { Query } from 'react-apollo';
import BrandDropdown from '../UI/BrandDropdown/BrandDropdown';

export default class BrandDropdownView extends Component {
  render() {
    return (
      <Query query={GetBrands}>
        {({loading, error, data}) => {
            if(loading) return "Loading...";
            if(error) return `Error: ${error.message}`;

            return data && <BrandDropdown brands={data.brands} onSelect={this.props.onSelect} />;
        }}
      </Query>
    )
  }
}