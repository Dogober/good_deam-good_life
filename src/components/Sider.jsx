import { Checkbox } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'
import { getFilteredMattresses } from '../async-functions/GetMattresses';

const Sider = () => {
    const dispatch = useDispatch()
    const sizeFilter = useSelector(state => state.mattressList.sizeFilter)

    const filteredResponce = (currentFilter) => {
        dispatch(getFilteredMattresses(currentFilter))
        // return sizeFilter.filter(size => size !== currentFilter)
    }

    return (
        <div className='search'>
            <div>
                Размер
                <div className='size'>
                   <Checkbox
                    onClick={(e) => filteredResponce(e.target.id)} id='800x2000'> 800x2000
                    </Checkbox><br/>
                   <Checkbox 
                    onClick={(e) => filteredResponce(e.target.id)}id='900x2000'> 900x2000
                    </Checkbox><br/>
                   <Checkbox 
                    onClick={(e) => filteredResponce(e.target.id)}id='1800x2000'> 1800x2000
                    </Checkbox>
                </div>
            </div>
        </div>
    );
};

export default Sider;