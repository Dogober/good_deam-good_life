import React from 'react';

const FormLegend = ({children, item}) => {
    return (
        <legend>
            <span className='checkout_step_number'>{item}</span>
            {children}
        </legend>
    );
};

export default FormLegend;