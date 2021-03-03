import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Content></Content>
      </div>
    );
  }
}

export default App;
