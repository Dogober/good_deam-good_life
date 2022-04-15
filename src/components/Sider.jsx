import { Checkbox } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'
import { addManyMattress, filterMattressesOnSize } from '../store/reducers/mattressListReduser';

const Sider = () => {
    const mattresses = useSelector(state => state.mattressList.mattresses)
    const [checked, setChecked] = useState(true)
    const dispatch = useDispatch()

    const getMattresses = async () => {
        const response = await axios.get('./mattress-catalog.json')
        const mockMattresses = response.data
        dispatch(addManyMattress(mockMattresses))
      }

    const sortMattresses = (e) => {
        if (checked === false) {
            mattresses.splice(0, mattresses.length)
            getMattresses()
        }
        dispatch(filterMattressesOnSize(e))
        return setChecked(!checked)
    }

    return (
        <div className='search'>
            <div>
                Размер
                <div className='size'>
                   <Checkbox onChange={e => sortMattresses(e.target.id)} id='800x2000'> 800x2000
                    </Checkbox><br/>

                   <Checkbox onChange={e => sortMattresses(e.target.id)} id='900x2000'> 900x2000
                    </Checkbox><br/>

                   <Checkbox onChange={e => sortMattresses(e.target.id)} id='1800x2000'> 1800x2000
                    </Checkbox>
                </div>
            </div>
        </div>
    );
};

export default Sider;