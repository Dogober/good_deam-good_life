import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { paymentMethodCheck } from '../store/reducers/checkoutReducer';

const FormPaymentInput = ({name, children}) => {
    const {payment} = useSelector(state => state.checkout)
    const dispatch = useDispatch()
    return (
        <div className='checkout_payment_method'>
            <input 
                className ='checkout_input' 
                type="radio"
                name={name}
                onChange={e => dispatch(paymentMethodCheck(e.target.name))}
                checked={payment === name}
            />
            {children}
        </div>
    );
};

export default FormPaymentInput;