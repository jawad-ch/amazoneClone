import React from 'react'

import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function SubTotal() {

    const history = useHistory()

    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            <h3>sub total</h3>
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <p>
                            <span>quantity</span>
                            <strong>({basket.length} items)</strong>
                        </p>
                        <p>
                            <span>Subtotal</span>
                            <strong>{`${value}`}</strong>
                        </p>
                        <p>
                            <button onClick={e => history.push('/payment')}>proceed to checkout</button>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default SubTotal
