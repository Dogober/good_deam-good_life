import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../store/reducers/cartReducer';
import { formClear } from '../../store/reducers/checkoutReducer';

const ChekoutModal = () => {
    const {validity} = useSelector(state => state.checkout)
    const route = useNavigate()
    const dispatch = useDispatch()
    const classArr = ['checkout_modal']
    const clearFormAndRouteToHome = () => {
        route('/home')
        dispatch(formClear())
        dispatch(clearCart())
    }
    if (validity) {
        classArr.push('checkout_modal_active')
    }
    return (
        <div className={classArr.join(' ')}>
            <div className='checkout_modal_content'>
                <img src='/cart-with-goods.png'/>
                    <div className='checkout_modal_thanks'>Спасибо за покупку!</div>
                <button
                    className='checkout_modal_back_to_home'
                    onClick={() => clearFormAndRouteToHome()}
                >
                    Вернуться к товарам
                </button>
            </div>
        </div>
    );
};

export default ChekoutModal;