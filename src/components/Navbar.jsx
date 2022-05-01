import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { getMattresses } from '../async-functions/GetMattresses';

const Navbar = () => {

    const route = useNavigate()
    const dispatch = useDispatch()

    const home = () => {
        dispatch(getMattresses())
        route('/home')
    }
    
    return (
        <div className='navbar'>
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
    );
};

export default Navbar;