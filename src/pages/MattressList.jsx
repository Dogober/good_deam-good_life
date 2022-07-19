import React, { useEffect } from 'react';
import MattressForm from '../components/MattressForm';
import Filters from '../components/Filters';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredMattressesOnPrice, getMattresses } from '../async-functions/GetMattresses';

const MattressList = () => {
    const {mattresses, homePageIsLoading, sorting} = useSelector(state => state.mattressList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMattresses(homePageIsLoading))
    }, [])

    const sortByPrice = (selectedSort) => {
        dispatch(getFilteredMattressesOnPrice(selectedSort))
    }

    return (
        <div className='content'>
                <Filters/>
            <div className='mattress_list_container'>
                <div className='mattress_list'>
                    <div>
                    <Select
                        onChange={value => sortByPrice(`${value}`)}
                        value={sorting === null ?"sortByPrice" :sorting}
                    >
                        <Select.Option disabled value="sortByPrice">Сортировать по цене</Select.Option>
                        <Select.Option value="ascending">От дешевых к дорогим</Select.Option>
                        <Select.Option value="descending">От дорогих к дешевым</Select.Option>
                    </Select>
                    </div>
                        {mattresses.map(mattress => 
                            <MattressForm key={mattress.id} props={mattress}/>
                            )
                        }
                </div>
            </div>
        </div>
    );
};

export default MattressList;