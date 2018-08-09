import React, { Component } from 'react';
import './style.css';
// import components and containers
import Header from '../../components/header';
import ClientsList from '../clientsList';
import ClientDetail from '../../components/clientDetails';

export default class homepage extends Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <div className='page__main'>
          <ClientsList />
          <ClientDetail />
        </div>
      </div>
      

    );
  }
}
