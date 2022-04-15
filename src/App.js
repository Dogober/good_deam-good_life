import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addManyMattress } from './store/reducers/mattressListReduser';
import axios from 'axios';

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
    <div>
      {mattresses.map(mattress => <div key={mattress.id}>{mattress.body}</div>)}
    </div>
  );
};

export default App;