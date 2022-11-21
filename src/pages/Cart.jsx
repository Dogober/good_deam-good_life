import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ItemInCart from '../components/ItemInCart';
import EmptyCart from '../assets/empty-cart.png'

const Cart = () => {
    const {purchasedItems, purchasedItemsCost} = useSelector(state => state.cart)
    const route = useNavigate()

    const itemesInCart = () => {
        if (purchasedItems != false) {
            return <div className='cart_page'>
                <div className='item_form'>
                    <div>
                        {purchasedItems.map(item =>
                            <ItemInCart key={item.mattress.id} item={item}/>
                            )}
                        </div>
                    <div className='total_cost'>
                        {purchasedItemsCost} ₴
                        <div 
                            className='checkout'
                            onClick={() => route('/checkout')}
                        >
                            Оформить заказ
                        </div>
                    </div>
                </div>
            </div>
        } else {
            return <div className='empty_cart_container'>
                <img className='empty_cart' src={EmptyCart}/>
                Ваша корзина пуста.
            </div>
        }
    }
    return (
        itemesInCart()
    );
};

export default Cart;