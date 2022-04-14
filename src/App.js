import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addManyMattress } from './store/reducers/mattressListReduser';

const App = () => {
  const dispatch = useDispatch()
  const mattresses = useSelector(state => state.mattressList.mattresses)

  const addMattress = () => {
    dispatch(addManyMattress([5]))
    return mattresses
  }

  return (
    <div>
      <button onClick={() => console.log(addMattress())}>
        Add mattress
      </button>
    </div>
  );
};

export default App;