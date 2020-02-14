import React from 'react'
import Product from './Product';


const FoodMenu = (props) => {

    const products = props.products.map(product => 
        <Product product={product} key={product.id} action={props.action(product)}></Product>
    );
    return (
        <div>
            {products}
        </div>
    )
}

export default FoodMenu;