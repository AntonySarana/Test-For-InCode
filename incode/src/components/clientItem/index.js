import React from 'react'
import {Header, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './style.css';

export default (props) => {
  const {
    firstName,
    lastName,
    avatar,
  } = props.user.general;
  const {
    title
  } = props.user.job;
  const name = `${firstName} ${lastName}`;

  return (
    <Header 
      as ='h3' 
      onClick = {()=>props.selectUser(props.user)}
      className = 'clientItem' >
      <Image 
        src = {avatar}
        inline
        circular
        size = 'large'/>
      <Header.Content>
        {name}
        <Header.Subheader>{title}</Header.Subheader>
      </Header.Content>
    </Header>
  )
}