import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const Basket = () => {
    const itemsInTheCart = useSelector(state => state.busket.itemsInTheCart)
    const totalCost = () => {
        let rezult = 0;
        const calcTotalCost = itemsInTheCart.reduce((firstItem, currentItem) => 
            firstItem + currentItem.price, rezult
        )
        return calcTotalCost
    }

    const itemes = () => {
        if (itemsInTheCart != false) {
            return <div className='basket_page'>
                <div className='item_form'>
                    <div>
                        {itemsInTheCart.map(item =>
                            <Item key={item.id} item={item}/>
                            )}
                        </div>
                    <div className='total_cost'>
                        {totalCost()} ₴
                        <div 
                            className='checkout'
                            // onClick={}
                        >
                            Оформить заказ
                        </div>
                    </div>
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