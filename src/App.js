import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Content></Content>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
