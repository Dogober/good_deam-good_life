import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ChekoutModal = () => {
    const {validity} = useSelector(state => state.checkout)
    const route = useNavigate()
    const classArr = ['checkout_modal']
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
                    onClick={() => route('/home')}
                >Вернуться к товарам
                </button>
            </div>
        </div>
    );
};

export default ChekoutModal;