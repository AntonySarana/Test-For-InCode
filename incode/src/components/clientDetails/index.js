import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './style.css';

function clientDetail(props) {

  return (
    <React.Fragment>
      {props.selectUser.general && 
      <div className="ui items clientDetail">
      {console.log(props.selectUser.general)}
        <div className="item">
          <div className="ui small image">
            <img src={props.selectUser.general.avatar} />
          </div>
          <div className="content">
            <div className="header">
              <h2>{`${props.selectUser.general.firstName} ${props.selectUser.general.lastName}`}</h2></div>
            <div className="meta">
              <span className="job">
                <h3>{`${props.selectUser.job.title} - ${props.selectUser.job.company}`}</h3>
              </span>
              
            </div>
            <div className="description">
                <p className='info-item'>
                  
                  <span>email - </span>
                  {
                    `${props.selectUser.contact.email}`
                  }
                </p>
                <p className='info-item'>
                <span>phone - </span>
                  {
                    `${props.selectUser.contact.phone}`
                  }
                </p>
                <p className='info-item'>
                <span>street - </span>
                  {
                    `${props.selectUser.address.street}`
                  }
                </p>
                <p className='info-item'>
                <span>city - </span>
                  {
                    `${props.selectUser.address.city}`
                  }
                </p>
                <p className='info-item'>
                <span>zipCode - </span>
                  {
                    `${props.selectUser.address.zipCode}`
                  }
                </p>
                <p className='info-item'>
                  <span>country - </span>
                  {
                    `${props.selectUser.address.country}`
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