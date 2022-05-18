import React from 'react';
import { useDispatch } from 'react-redux';
import { changeNumberPurchasedItem, deletePurchasedItem } from '../store/reducers/cartReducer';

const ItemInCart = ({item}) => {
    const dispatch = useDispatch()

    return (
        <div className='item_container'>
            <div className='item_body'>
                <img className='item_img' src={item.mattress.img}/>
                <div>{item.mattress.producer}. {item.mattress.size}. {item.mattress.body}</div>
                <div>
                    <div 
                        className='delete_item_in_cart'
                        onClick={() => dispatch(deletePurchasedItem(item.mattress))}
                    >
                        x
                    </div>
                </div>
            </div>
            <div className='item_control_panel'>
                <div className='counter_container'>
                    <div
                        className={item.number == 1 ?'counter_button_limit' :'counter_button'}
                        onClick={() => dispatch(changeNumberPurchasedItem(item.mattress.id, -1))}
                    >
                        ⎯
                    </div>
                    <div 
                        className='counter'
                    >
                        {item.number}
                    </div>
                    <div 
                        className='counter_button'
                        onClick={() => dispatch(changeNumberPurchasedItem(item.mattress.id, 1))}
                    >
                        +
                    </div>
                </div>
                <div className='item_price'>{item.mattress.price * item.number} ₴</div>
            </div>
        </div>
    );
};

export default ItemInCart;