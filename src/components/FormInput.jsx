import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formDataBlurHandlerChange, formDataValueChange } from '../store/reducers/checkoutReducer';

const FormInput = ({containerStyle, inputStyle, name, placeholder}) => {
    const {formData, validity} = useSelector(state => state.checkout)
    const dispatch = useDispatch()
    let formStyles = []

    const validator = (field, style) => {
        if (validity === false && !field.validity) {
            formStyles = []
            formStyles.push(style, 'input_error')
            return "Обязательное поле"
        } else if (field.blurHandler && !field.validity) {
            formStyles = []
            formStyles.push(style, 'input_error')
            return "Обязательное поле"
        } else {
            formStyles = []
            formStyles.push(style)
            return ""
        }
    }
    return (
        <div className={containerStyle}>
            <div className='data_error'>
                {validator(formData.get(name), inputStyle)}
            </div>
            <input 
                className ={formStyles.join(' ')} 
                type="text" 
                placeholder={placeholder}
                name={name}
                value={formData.get(name).value}
                onBlur={(e) => dispatch(formDataBlurHandlerChange(e.target.name))}
                onChange={(e) => dispatch(formDataValueChange(e.target.name, e.target.value))}
            />
        </div>
    );
};

export default FormInput;