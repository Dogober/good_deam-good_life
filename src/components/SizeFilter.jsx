import { Checkbox } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredMattressesOnSize } from '../async-functions/GetMattresses';

const SizeFilter = ({size}) => {
    const {sizeFilter} = useSelector(state => state.mattressList)
    const dispatch = useDispatch()
    const filteredOnSize = (currentFilter) => {
        dispatch(getFilteredMattressesOnSize(currentFilter))
    }
    function isSizeFilterChecked (currentFilter) {
        if (sizeFilter.includes(currentFilter)) {
            return true
        } else {
            return false
        }
    }    
    return (
        <Checkbox
            onChange={(e) => filteredOnSize(e.target.id)} 
            checked={isSizeFilterChecked(size)}
            id={size}
        > 
            {size}
        </Checkbox>
    );
};

export default SizeFilter;