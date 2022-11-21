import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { getMattresses } from '../async-functions/GetMattresses';
import Cart from '../assets/cart.png'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const route = useNavigate()
    const dispatch = useDispatch()
    const homePageIsLoading = useSelector(state => state.mattressList.homePageIsLoading)
    const {purchasedItemsNumber} = useSelector(state => state.cart)

    const home = () => {
        if (!homePageIsLoading) {
            dispatch(getMattresses(true))
        }
        route('/home')
    }
    
    return (
        <div className='navbar'>
            <div className='route_container'>
                <div 
                    className='route' 
                    onClick={() => home()}
                >
                    <img className='logo' src={Logo}/>
                </div>
            </div>
            <div className='container_cart_item'>
                <img 
                    className='cart' src={Cart}
                    onClick={() => route('/cart')}
                />
                <div className='number_of_goods'>
                    {!purchasedItemsNumber ?null :purchasedItemsNumber}
                </div>
            </div>
        </div>
    );
};

export default Navbar;