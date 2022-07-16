import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryMethodCheck } from '../store/reducers/checkoutReducer';

const FormDeliveryInput = ({name, children}) => {
    const {delivery} = useSelector(state => state.checkout)
    const dispatch = useDispatch()
    return (
        <div className='checkout_delivery'>
            <input 
                className ='checkout_input' 
                type="radio"
                name={name}
                onChange={e => dispatch(deliveryMethodCheck(e.target.name))}
                checked={delivery === name}
            />
            {children}
        </div>
    );
};

export default FormDeliveryInput;