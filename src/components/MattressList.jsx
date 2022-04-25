import React, { useEffect } from 'react';
import MattressForm from './MattressForm';
import '../App.css'
import Filters from './Filters';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { getFilteredMattressesOnPrice } from '../async-functions/GetMattresses';

const MattressList = ({mattresses}) => {
    const {Option} = Select
    const dispatch = useDispatch()
    
    const sortByPrice = (selectedSort) => {
        dispatch(getFilteredMattressesOnPrice(selectedSort))
    }   

    return (
        <div className='content'>
                <Filters/>
            <div className='mattress_list'>
                <div>
                <Select
                    onChange={value => sortByPrice(`${value}`)}
                    placeholder="Сортировать по цене">
                    <Option disabled value="sortByPrice">Сортировать по цене</Option>
                    <Option value="ascending">От дешевых к дорогим</Option>
                    <Option value="descending">От дорогих к дешевым</Option>
                </Select>
                </div>
                {mattresses.map(mattress => 
                    <MattressForm key={mattress.id} props={mattress}/>
            )}
            </div>
        </div>
    );
};

export default MattressList;