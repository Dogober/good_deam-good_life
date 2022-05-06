import { Checkbox } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'
import { getFilteredMattressesOnProducer, getFilteredMattressesOnSize } from '../async-functions/GetMattresses';

const Filters = () => {
    const {sizeFilter, producerFilter} = useSelector(state => state.mattressList)

    const dispatch = useDispatch()

    const filteredOnSize = (currentFilter) => {
        dispatch(getFilteredMattressesOnSize(currentFilter))
    }
    const filteredOnProducer = (currentFilter) => {
        dispatch(getFilteredMattressesOnProducer(currentFilter))
    }
    function isSizeFilterChecked (currentFilter) {
        if (sizeFilter.includes(currentFilter)) {
            return true
        } else {
            return false
        }
    }
    function isProducerFilterChecked (currentFilter) {
        if (producerFilter.includes(currentFilter)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className='filters'>
            <div>
                <strong>Размер</strong>
                <div className='filter'>
                    <Checkbox
                        onChange={(e) => filteredOnSize(e.target.id)} 
                        checked={isSizeFilterChecked('800x2000')}
                        id='800x2000'
                    > 800x2000
                    </Checkbox><br/>
                    <Checkbox
                        onChange={(e) => filteredOnSize(e.target.id)}
                        checked={isSizeFilterChecked('900x2000')}
                        id='900x2000'
                    > 900x2000
                    </Checkbox><br/>
                    <Checkbox
                        onChange={(e) => filteredOnSize(e.target.id)}
                        checked={isSizeFilterChecked('1800x2000')}
                        id='1800x2000'
                    > 1800x2000
                    </Checkbox><br/>
                    <Checkbox
                        onChange={(e) => filteredOnSize(e.target.id)}
                        checked={isSizeFilterChecked('2000x2000')}
                        id='2000x2000'
                    > 2000x2000
                    </Checkbox>
                </div>
                <strong>Производитель</strong>
                <div className='filter'>
                    <Checkbox 
                        onChange={(e) => filteredOnProducer(e.target.id)} 
                        checked={isProducerFilterChecked('Good dream')}
                        id='Good dream'
                    > Good dream
                    </Checkbox><br/>
                    <Checkbox 
                        onChange={(e) => filteredOnProducer(e.target.id)}
                        checked={isProducerFilterChecked('Sleep space')}
                        id='Sleep space'
                    > Sleep space
                    </Checkbox>
                </div>
            </div>
        </div>
    );
};

export default Filters;