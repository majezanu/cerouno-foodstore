import React from 'react'
import ProductName from '../atoms/product/name/ProductName';
import ProductPrice from '../atoms/product/price/ProductPrice';
import AddCart from '../atoms/product/cart/AddCart';
import './Product.css'
import ProductDescription from '../atoms/product/description/ProductDescription';

const Product = (props) => {
    function handleClick(e) {
        e.preventDefault();
        props.action(props.product)
    }
    return <div className='card container row product'>
        <div className="row card-body">
                <img class="card-img-top" 
                    src={props.product.image} 
                    alt="Card image cap"
                    style={{maxHeight:400}}/> 
                <div className="col">
                    <ProductName title={props.product.name}></ProductName>
                    <ProductPrice price={props.product.price}></ProductPrice>
                </div>
                <div className="col">
                    <ProductDescription description={props.product.description}></ProductDescription>
                    <AddCart action={handleClick}></AddCart>
                </div>
        </div>
        
        
    </div>
} 

export default Product