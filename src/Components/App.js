import React, { Component } from 'react';
import '.././App.css';
import Header from './Header'
import Home from './Home';
import Footer from './Footer';
import UserProvider from '../Contexts/UserProvider';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Header/>
        <Home/>
        <Footer/>
      </UserProvider>
    );
  }
}

export default App;