import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addManyMattress } from './store/reducers/mattressListReduser';
import axios from 'axios';
import MattressForm from './components/MattressForm';
import './App.css';

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
      {mattresses.map(mattress => 
        <MattressForm key={mattress.id} props={mattress}/>
      )}
    </div>
  );
};

export default App;