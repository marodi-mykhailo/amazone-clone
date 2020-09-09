import React from "react";
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    const getBasketTotal = (basket) => {
        let sum = basket.reduce((acc, curVal) => {
            return acc + curVal.price
        }, 0)
        return sum;
    }
    return (
        <div className={'subtotal'}>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p> Subtotal ({basket.length} items): <strong>{`${value}`}</strong></p>
                    <small className="subtotal__gift">
                        <input type={'checkbox'}/> This order contains a gift
                    </small>
                </>
            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)} // homework
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
