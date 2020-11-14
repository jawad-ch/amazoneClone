import React from 'react'
import { useStateValue } from './StateProvider'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {

    const [{basket, user}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {basket?.length === 0 ? (
                    <div><h2>your shopping basket is empty</h2></div>
                ) : (
                    <div>
                        <h3>hello, {user?.email}</h3>
                        <h2 className="checkout__title">your shopping basket</h2>
                        <div className="checkout__products">
                            {
                                basket.map((product, i) => (
                                    <CheckoutProduct
                                        id={product.id}
                                        key={i}
                                        title={product.title}
                                        image={product.image}
                                        price={product.price}
                                        rating={product.rating}
                                    />
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
            {basket.length > 0 && (
            <div className="checkout__right">
                <SubTotal />
            </div>   
            )}
        </div>
    )
}

export default Checkout
