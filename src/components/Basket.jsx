import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const Basket = () => {
    const itemsInTheCart = useSelector(state => state.busket.itemsInTheCart)

    const itemes = () => {
        if (itemsInTheCart != false) {
            return <div className='basket_page'>
                <div className='item_form'>
                    {itemsInTheCart.map(item =>
                        <Item key={item.id} item={item}/>
                    )}
                </div>
            </div>
        } else {
            return <div className='empty_basket'>
                Корзина пуста
            </div>
        }
    }
    return (
        itemes()
    );
};

export default Basket;