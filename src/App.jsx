import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addManyMattress } from './store/reducers/mattressListReduser';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import MattressList from './components/MattressList';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    getMattresses()
  }, [])

  const dispatch = useDispatch()
  const mattresses = useSelector(state => state.mattressList.mattresses)

  const getMattresses = async () => {
    const response = await axios.get('./mattress-catalog.json')
    const mockMattresses = response.data
    dispatch(addManyMattress(mockMattresses))
  }
  
  return (
    <div className='app'>
      <Navbar/>
      <MattressList mattresses={mattresses}/>
      <Footer/>
    </div>
  );
};

export default App;