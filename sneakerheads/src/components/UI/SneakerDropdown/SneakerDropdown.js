import React from 'react';
import Select from 'react-select';

const SneakerDropdown = ({sneakers, onSelect}) => {
    return(
        <div>
            { renderSneakers(sneakers, onSelect) }
        </div>
    );
};

const renderSneakers = (sneakers, onSelect) => {
    const sneakerOptions = sneakers.map(sneaker => ({
        value: sneaker.id,
        label: sneaker.name
    }));

    return(
        <Select options={sneakerOptions} onChange={({value}) => onSelect(value)} />
    );
}

export default SneakerDropdown;