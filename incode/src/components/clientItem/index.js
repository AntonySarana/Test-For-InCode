import React from 'react'
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
  const itemClass = (name == props.activeUser) ? 'ui items clientItem aclientItem-active' : 'ui items clientItem';
  return (
    <div 
      className={itemClass}  
      onClick={() => props.selectUser(props.user)}>
      <div class="item">
        <div class="ui tiny image">
          <img src={avatar}/>
        </div>
          <div class="content">
            <div class="header">{name}</div>
            <div class="description">
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
      )
}