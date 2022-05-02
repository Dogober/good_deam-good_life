import React from 'react';
import { useSelector } from 'react-redux';

const Basket = () => {
    const itemsInTheCart = useSelector(state => state.mattressId.itemsInTheCart)
    const goods = () => {
        if (itemsInTheCart != false) {
            return <div>
                Корзина
            </div>
        } else {
            return 
        }
    }
    return (
        <div className='basket_page'>
            {goods()}
        </div>
    );
};

export default Basket;