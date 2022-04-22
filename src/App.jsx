import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import MattressList from './components/MattressList';
import Footer from './components/Footer';
import { getMattresses } from './async-functions/GetMattresses';

const App = () => {
  const mattresses = useSelector(state => state.mattressList.mattresses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMattresses())
  }, [])
  
  return (
    <div className='app'>
      <Navbar/>
      <MattressList mattresses={mattresses}/>
      <Footer/>
    </div>
  );
};

export default App;