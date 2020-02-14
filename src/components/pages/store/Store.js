import React, {Component} from 'react'
import FoodMenu from '../../molecules/FoodMenu';
import ShoppingCart from '../../atoms/cart/ShoppingCart';
import productsData from '../../pages/products';
import './Store.css';

class Store extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.state = {productsCar: [], products: productsData};
    }
    addToCart(product) {
        this.setState(state => {
            const list = [...state.productsCar, product];
            return {
                productsCar: list,
                
            };
        });
    }
    render () {
        return (
            <div className='container store'>
                <div className="row">
                    <div className="col-6">
                        <FoodMenu action={()=>this.addToCart} products={this.state.products}></FoodMenu>
                    </div>
                    <div className="col">
                        <ShoppingCart products={this.state.productsCar} ></ShoppingCart>
                    </div>
                </div>
            </div>
        )
    }
}

export default Store;