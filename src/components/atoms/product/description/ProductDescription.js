import React from 'react'
import Label from '../../Label'
import './ProductDescription.css'
const ProductDescription = (props) => (
    <Label style={`description card-text`}>
    <p>{props.description}</p>
    </Label>
)
export default ProductDescription