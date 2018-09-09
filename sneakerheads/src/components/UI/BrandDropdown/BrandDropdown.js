import React from 'react';
import Select from 'react-select';

const BrandDropdown = ({brands, onSelect}) => {
    return(
        <div>
            { renderBrands(brands, onSelect) }
        </div>
    );
};

const renderBrands = (brands, onSelect) => {
    const brandOptions = brands.map(brand => ({
        value: brand.id,
        label: brand.name
    }));

    return(
        <Select options={brandOptions} onChange={({value}) => onSelect(value)} />
    );
}

export default BrandDropdown;