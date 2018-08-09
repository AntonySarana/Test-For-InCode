import React from 'react'

export default (props) => {
  const {
    firstName,
    lastName,
    avatar,
  } = props.user.general;
  const {
    title
  } = props.user.job
  return (
    <div className='ClientItem'>
      <img src={avatar} />
      <div className='clientItem__info'>
        <p>
          {firstName} {lastName}
        </p>
        <p>
          {title}
        </p>
      </div>
    </div>
  )
}