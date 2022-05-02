import React, { useEffect } from 'react';
import MattressForm from './MattressForm';
import '../App.css'
import Filters from './Filters';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredMattressesOnPrice, getMattresses } from '../async-functions/GetMattresses';

const MattressList = () => {
    const mattresses = useSelector(state => state.mattressList.mattresses)
    const homePageIsLoading = useSelector(state => state.mattressList.homePageIsLoading)
    const sorting = useSelector(state => state.mattressList.sorting)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMattresses(homePageIsLoading))
    }, [])

    const sortByPrice = (selectedSort) => {
        dispatch(getFilteredMattressesOnPrice(selectedSort))
    }
    const selectedSort = () => {
        if (sorting === null) {
            return "sortByPrice"
        } else {
            return sorting
        }
    }

    return (
        <div className='content'>
                <Filters/>
            <div className='mattress_list'>
                <div>
                <Select
                    onChange={value => sortByPrice(`${value}`)}
                    value={selectedSort()}
                >
                    <Select.Option disabled value="sortByPrice">Сортировать по цене</Select.Option>
                    <Select.Option value="ascending">От дешевых к дорогим</Select.Option>
                    <Select.Option value="descending">От дорогих к дешевым</Select.Option>
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