import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

function clientDetail(props) {
  /* const {
    firstName,
    lastName,
    avatar
  } = props.selectUser.general;
  const name = `${firstName} ${lastName}`;

  const {
    company,
    title,
  } = props.selectUser.job;
  const aboutJob = `${title} - ${company}`; */
  const printOther = (user) => {
    for (let key in user) {
      for (let subKey in user[key]) {
        return <div>{`${user[key]} - ${user[key][subKey]}`}</div> 
      }
    }
  }

  return (
    <React.Fragment>
      {props.selectUser.general && 
      <div className="ui items">
      {console.log(props.selectUser.general)}
        <div className="item">
          <div className="ui small image">
            <img src={props.selectUser.general.avatar} />
          </div>
          <div className="content">
            <div className="header">
              {`${props.selectUser.general.firstName} ${props.selectUser.general.lastName}`}</div>
            <div className="meta">
              <span className="job-title">{`${props.selectUser.job.title} -`}</span>
              <span className="job-company">{props.selectUser.job.company}</span>
            </div>
            <div className="description">
                <p className='info-item'>
                  {
                    `email - ${props.selectUser.contact.email}`
                  }
                </p>
                <p className='info-item'>
                  {
                    `phone - ${props.selectUser.contact.phone}`
                  }
                </p>
                <p className='info-item'>
                  {
                    `street - ${props.selectUser.address.street}`
                  }
                </p>
                <p className='info-item'>
                  {
                    `city - ${props.selectUser.address.city}`
                  }
                </p>
                <p className='info-item'>
                  {
                    `zipCode - ${props.selectUser.address.zipCode}`
                  }
                </p>
                <p className='info-item'>
                  {
                    `country - ${props.selectUser.address.country}`
                  }
                </p>
            </div>
          </div>
        </div>
      </div>
      }
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    selectUser: state.selectUser,
  }
}
export default connect(mapStateToProps)(clientDetail)