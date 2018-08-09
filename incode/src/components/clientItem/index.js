import React from 'react'
import {Header, Image} from 'semantic-ui-react';

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
    <Header as ='h2'>
      <Image src={avatar}  width='60px'/>
      <Header.Content>
        {name}
        <Header.Subheader>{title}</Header.Subheader>
      </Header.Content>
    </Header>
  )
}