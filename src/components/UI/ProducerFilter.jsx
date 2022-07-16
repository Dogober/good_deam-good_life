import React from 'react';
import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredMattressesOnProducer } from '../../async-functions/GetMattresses';

const ProducerFilter = ({producer}) => {
    const {producerFilter} = useSelector(state => state.mattressList)
    const dispatch = useDispatch()
    const filteredOnProducer = (currentFilter) => {
        dispatch(getFilteredMattressesOnProducer(currentFilter))
    }
    function isProducerFilterChecked (currentFilter) {
        if (producerFilter.includes(currentFilter)) {
            return true
        } else {
            return false
        }
    }
    return (
        <Checkbox 
            onChange={(e) => filteredOnProducer(e.target.id)} 
            checked={isProducerFilterChecked(producer)}
            id={producer}
        > 
            {producer}
        </Checkbox>
    );
};

export default ProducerFilter;