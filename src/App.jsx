import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Layout } from 'antd';
import AppRouter from './components/AppRouter';
import { getMattresses } from './async-functions/GetMattresses';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
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