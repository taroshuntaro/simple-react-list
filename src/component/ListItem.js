import React from 'react';
import './ListItem.css';

const ListItem = (prop) => {
    return (
        <li key={prop.key}>{prop.value}</li>
    )
};

export default ListItem;
