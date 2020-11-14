import React from 'react'
import { useStateValue } from './StateProvider';
import { RemoveShoppingCartRounded, Star } from '@material-ui/icons';

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {

    const [dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({type:"REMOVE_FROM_BASKET", payload: id})
    }

    return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__img" src={image} alt=""/>
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {
                    Array(rating).fill().map(( star,i) => (
                        <Star key={i} className="checkoutProduct__star"/>
                    ))
                }
            </div>
            <span onClick={removeFromBasket} className="checkoutProduct__removeBasketIconWrapper">
                {!hideButton && (<RemoveShoppingCartRounded className="checkoutProduct__removeBasketIcon" />)}
            </span>
        </div>
    </div>
    )
}

export default CheckoutProduct
