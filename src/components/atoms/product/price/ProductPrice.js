import React from 'react'
import Label from '../../Label';

const ProductPrice = (props) => {
return <Label style={`price btn btn-primary`}><h4>${props.price}</h4></Label>
}
export default ProductPrice;