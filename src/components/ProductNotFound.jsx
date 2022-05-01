import React from 'react';
import MattressesComments from './MattressesComments';

const ProductNotFound = () => {
    return (
        <div className='mattress_not_found'>
            Товар не найден.
            <div className='mattress_not_found_descripton'>
                Неправильно набран адрес или такой страницы не существует.
            </div>
        </div>
    );
};

export default ProductNotFound;