import React from 'react';
import '../App.css'
import ProducerFilter from './ProducerFilter';
import SizeFilter from './SizeFilter';

const Filters = () => {
    return (
        <div className='filters'>
            <div>
                <strong>Размер</strong>
                <div className='filter'>
                    <SizeFilter size={'800x2000'}/><br/>
                    <SizeFilter size={'900x2000'}/><br/>
                    <SizeFilter size={'1800x2000'}/><br/>
                    <SizeFilter size={'2000x2000'}/>
                </div>
                <strong>Производитель</strong>
                <div className='filter'>
                    <ProducerFilter producer={'Good dream'}/><br/>
                    <ProducerFilter producer={'Sleep space'}/>
                </div>
            </div>
        </div>
    );
};

export default Filters;