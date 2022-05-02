import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { getMattresses } from '../async-functions/GetMattresses';

const Navbar = () => {
    const route = useNavigate()
    const dispatch = useDispatch()
    const homePageIsLoading = useSelector(state => state.mattressList.homePageIsLoading)
    const itemsInTheCart = useSelector(state => state.mattressId.itemsInTheCart)

    const home = () => {
        if (!homePageIsLoading) {
            dispatch(getMattresses(true))
        }
        route('/home')
    }
    
    return (
        <div className='navbar'>
            <img 
                className='basket' src='/basket.png'
                onClick={() => route('/busket')}
            />
            <div className='number_of_goods'>
                {itemsInTheCart.length}
            </div>
            <div className='route_container'>
                <div 
                    className='route' 
                    onClick={() => route('/about')}
                >
                    О магазине
                </div>
                <div 
                    className='route' 
                    onClick={() => home()}
                >
                    Главная
                </div>
            </div>
        </div>
    );
};

export default Navbar;