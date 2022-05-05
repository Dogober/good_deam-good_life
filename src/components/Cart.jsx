import React from 'react';
import { useSelector } from 'react-redux';
import ItemInCart from './ItemInCart';

const Cart = () => {
    const purchasedItems = useSelector(state => state.cart.purchasedItems)
    const totalCost = () => {
        let rezult = 0;
        const calcTotalCost = purchasedItems.reduce((firstItem, currentItem) => 
            firstItem + currentItem.purchasedItem.price * currentItem.number, rezult
        )
        return calcTotalCost
    }

    const itemesInCart = () => {
        if (purchasedItems != false) {
            return <div className='cart_page'>
                <div className='item_form'>
                    <div>
                        {purchasedItems.map(item =>
                            <ItemInCart key={item.purchasedItem.id} item={item}/>
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
            return <div className='empty_cart_container'>
                <img className='empty_cart' src='/empty-cart.png'/>
                Ваша корзина пуста.
            </div>
        }
    }
    return (
        itemesInCart()
    );
};

export default Cart;