import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Layout } from 'antd';
import AppRouter from './components/AppRouter';
import "antd/dist/antd.css";

const App = () => {

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