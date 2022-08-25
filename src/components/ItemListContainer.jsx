import * as React from 'react';

const ItemListContainer = ({item, bgColor, color}) => {
    return (
        <div>
            <h2 style={{backgroundColor: bgColor, color: color}}>productos</h2>
        </div>
    )
}

export default ItemListContainer