import React from 'react'

const SneakerList = ({sneakers}) => {
    return(
        <div>
            { renderSneakers(sneakers) }
        </div>
    );
};

const renderSneakers = (sneakers) => {
    return(
        <ul>
            {sneakers.map(sneaker => <li key={sneaker.id}>{sneaker.name}</li>)}
        </ul>
    );
}

export default SneakerList;