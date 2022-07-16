import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validityCheck } from '../store/reducers/checkoutReducer';

const FormAside = () => {
    const {purchasedItemsCost, purchasedItemsNumber} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const checkForm = (e) => {
        e.preventDefault()
        dispatch(validityCheck())
    }    
    return (
        <aside className='to_pay_container'>
            <div className='to_pay_total'>Итого</div>
            <div className='to_pay_total_calc'>
                <div>{purchasedItemsNumber} ед. на сумму</div>
                <div>{purchasedItemsCost} ₴</div>
            </div>
            <div className='to_pay_total_calc'>
                <div>Доставка при <br/> покупке от 8000 ₴</div>
                <div>Бесплатно</div>
            </div>
            <div className='to_pay_calc'>
                <div>К оплате</div>
                <div className='to_pay_total'>{purchasedItemsCost} ₴</div>
            </div>
            <div className='to_pay_confirm_container'>
                <button onClick={e => checkForm(e)} className='to_pay_confirm'>Заказ подтверждаю</button>
            </div>
            <div className='to_pay_notation'>
                Подтверждая заказ, я принимаю условия:
                <ul className='to_pay_notation_list'>
                    <li>положения о сборе и защите персональных данных</li>
                    <li>пользовательского соглашения</li>
                </ul>
            </div>
        </aside>
    );
};

export default FormAside;