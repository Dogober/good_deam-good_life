import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { getMattresses } from '../async-functions/GetMattresses';

const Navbar = () => {
    const route = useNavigate()
    const dispatch = useDispatch()
    const homePageIsLoading = useSelector(state => state.mattressList.homePageIsLoading)
    const {numberPurchasedItems} = useSelector(state => state.cart)

    const home = () => {
        if (!homePageIsLoading) {
            dispatch(getMattresses(true))
        }
        route('/home')
    }
    
    return (
        <div className='navbar'>
            <div className='route_container'>
                {/* <div 
                    className='route' 
                    onClick={() => route('/about')}
                >
                    О магазине
                </div> */}
                <div 
                    className='route' 
                    onClick={() => home()}
                >
                    <img className='logo' src='/LOGO3.png'/>
                </div>
            </div>
            <img 
                className='cart' src='/cart.png'
                onClick={() => route('/cart')}
            />
            <div className='number_of_goods'>
                {numberPurchasedItems}
            </div>
        </div>
    );
};

export default Navbar;