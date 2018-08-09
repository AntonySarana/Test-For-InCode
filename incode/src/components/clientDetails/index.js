import React from 'react';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

function clientDetail(props) {
  return (
    <React.Fragment>
      {props.selectUser && console.log(props.selectUser.general)}
        {/* < Item >
          <Item.Image size='tiny' src='/images/wireframe/image.png' />
          <Item.Content verticalAlign='middle'>{props.selectUser.general.firstName}</Item.Content>
        </Item> */}
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    selectUser: state.selectUser,
  }
}
export default connect(mapStateToProps)(clientDetail)