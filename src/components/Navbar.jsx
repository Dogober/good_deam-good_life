import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { getMattresses } from '../async-functions/GetMattresses';

const Navbar = () => {
    const route = useNavigate()
    const dispatch = useDispatch()
    const homePageIsLoading = useSelector(state => state.mattressList.homePageIsLoading)
    const purchasedItems = useSelector(state => state.cart.purchasedItems)
    const totalItemsNumberInCart = () => {
        let rezult = 0;
        const calcTotalNumber = purchasedItems.reduce((firstItem, currentItem) => 
            firstItem + currentItem.number, rezult
        )
        return calcTotalNumber
    }

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
                {totalItemsNumberInCart()}
            </div>
        </div>
    );
};

export default Navbar;