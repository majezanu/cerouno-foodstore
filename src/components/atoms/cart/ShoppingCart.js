import React from 'react'
import Label from '../Label'
import './ShoppingCart.css'
const ShoppingCart = (props) => {
    const totalSize = props.products.length
    const totalPrice = totalSize > 0 ? props.products.reduce((a, b) => a + b.price, 0): 0;
    return (
        <React.Fragment>
            <Label style={`description`}>
            <p>{totalSize === 0 && 'No hay productos'}</p>
            </Label>
            <Label style={`description`}>
            <p>Cantidad total de productos: {totalSize}</p>
            </Label>
            <Label style={`description`}>
            <p>Precio total: ${totalPrice}</p>
            </Label>
        </React.Fragment>
    )
}
export default ShoppingCart