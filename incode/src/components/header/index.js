import React from 'react'
import logo from '../../incodelogo.jpg';
import './style.css';

export default (props) => {
    return (
        <div className='Header'>
            <img src={logo} className='Header-Logo' />
        </div>
    )
}