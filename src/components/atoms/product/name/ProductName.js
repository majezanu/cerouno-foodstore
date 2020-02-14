import React from 'react'
import Label from '../../Label'
import './ProductName.css';
const ProductName = (props) => {
    return <Label style={`name`}>
            <h2>{props.title}</h2>
        </Label>
}

export default ProductName