import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import ClientsList from './container/clientslist';
import ClientDetail from './components/clientDetails'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='main'>
          <ClientsList />
          <ClientDetail />
        </div>
      </div>
      

    );
  }
}

export default App;
