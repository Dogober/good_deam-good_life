import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { getMattresses } from './async-functions/GetMattresses';
import { Layout } from 'antd';
import AppRouter from './components/AppRouter';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('useEffect отработал')
    dispatch(getMattresses())
  }, [])
  
  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRouter/>
      </Layout.Content>
      <Footer/>
    </Layout>
  );
};

export default App;