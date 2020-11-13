import React from "react";
import './Product.css'
import {useStateValue} from "../../StateProvider/StateProvider";

function Product({id, title, price, image, rating, description}) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispathc the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return (
        <div className={"product"}>
            <img src={image} alt={''}/>
            <div className={'productInfo'}>
                <p className={'title'}>{title}</p>
                <p className={'product__price'}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p>🌟</p>
                    ))}
                </div>
                <p>
                    {description}
                </p>
                <div className={'btnWrapp'}>
                    <button className={'btn'} onClick={addToBasket}>Add to Basket</button>
                </div>
            </div>
        </div>
    )
}

export default Product;
