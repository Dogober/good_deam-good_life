import { Checkbox } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import '../App.css'
import { getFilteredMattressesOnProducer, getFilteredMattressesOnSize } from '../async-functions/GetMattresses';

const Filters = () => {
    const dispatch = useDispatch()

    const filteredOnSize = (currentFilter) => {
        dispatch(getFilteredMattressesOnSize(currentFilter))
    }
    const filteredOnProducer = (currentFilter) => {
        dispatch(getFilteredMattressesOnProducer(currentFilter))
    }

    return (
        <div className='filters'>
            <div>
                <strong>Размер</strong>
                <div className='filter'>
                   <Checkbox onClick={(e) => filteredOnSize(e.target.id)} id='800x2000'> 800x2000</Checkbox><br/>
                   <Checkbox onClick={(e) => filteredOnSize(e.target.id)}id='900x2000'> 900x2000</Checkbox><br/>
                   <Checkbox onClick={(e) => filteredOnSize(e.target.id)}id='1800x2000'> 1800x2000</Checkbox><br/>
                   <Checkbox onClick={(e) => filteredOnSize(e.target.id)} id='2000x2000'> 2000x2000</Checkbox>
                </div>
                <strong>Производитель</strong>
                <div className='filter'>
                    <Checkbox onClick={(e) => filteredOnProducer(e.target.id)} id='Good dream'> Good dream</Checkbox><br/>
                    <Checkbox onClick={(e) => filteredOnProducer(e.target.id)} id='Sleep space'> Sleep space</Checkbox><br/>
                </div>
            </div>
        </div>
    );
};

export default Filters;