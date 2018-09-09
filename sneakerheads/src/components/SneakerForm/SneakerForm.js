import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { AddSneakerMutation } from './FormMutations';
import SneakerDropdownView from '../SneakerQueries/SneakerDropdownView';
import BrandDropdownView from '../SneakerQueries/BrandDropdownView';

export default class SneakerForm extends Component {
    constructor(){
        super();
        this.state = {
            brandSelectd : ''
        }
    }
    render() {
        let input;
        return (
            <Mutation mutation={AddSneakerMutation}>
                {(addSneaker, { data }) => {
                    console.log(data);
                    return(
                        <form onSubmit={e => this.handleSubmit(e, input, addSneaker)}>
                            <div className="field">
                                <label>Name</label>
                                <input type="text" ref={ node => {input = node}} />
                            </div>
                            
                            <BrandDropdownView onSelect={this.handleSelect.bind(this)} />
                            <button type="submit">Add</button>
                        </form>
                    );
                }}
            </Mutation>
        );
  }

  handleSelect(brandId){
    this.setState({ brandSelectd: brandId });
  }

  resetForm(inputRef){
    inputRef.value = '';
    this.setState({ brandSelectd: '' });
  }

  handleSubmit(e, inputRef, addSneaker){
    e.preventDefault();
    console.log(this.state.brandSelectd, inputRef.value);
    if(this.state.brandSelectd !== '' && inputRef.value !== ''){
        addSneaker({variables: {name: inputRef.value, brandId: this.state.brandSelectd}});
        this.resetForm(inputRef);
    }
  }
}

