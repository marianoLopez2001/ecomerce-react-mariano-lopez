import * as React from 'react';

const ItemListContainer = ({item, bgColor, color}) => {
    return (
        <div>
            <h2 style={{backgroundColor: bgColor, color: color}}>{item.saludo}</h2>
        </div>
    )
}

export default ItemListContainer