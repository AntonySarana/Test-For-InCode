import React from 'react';
import {connect} from 'react-redux';

//components
import ClientItem from '../../components/clientItem';
import selectuser from '../../action/selectUser';
//styles
import {Input,Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './style.css';

 class ClientList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      search:'',
    }
  }
  componentWillMount(){
    this.setState({
      data: this.props.data,
    })
        
  }
  onSearch = (e) =>{
    const data = this.props.data.filter(item =>{
      let isFind = false
      for (let element in item) {
        for (let subElement in item[element]) {
          if (item[element][subElement].toLowerCase().includes(e.target.value.toLowerCase())) isFind = true;
        }
      }
        return isFind
    })
    this.setState({
      data,
    })
  }

  selectUser = (user) =>{
    this.props.selectedUser(user);
    console.log(this.props);
  }

  render(){
    return(
      <div className='clientList'>
        <Input 
          icon='users' 
          iconPosition='left' 
          placeholder='Search users...' 
          name='search'
          size = 'medium'
          className = 'clientList_input'
          onChange = {(e)=>this.onSearch(e)}
        />
        {/* !this.state.data */true && 
            this.state.data.map((item,index) => {
              return (
                <ClientItem
                  key = {index}
                  user = {item}
                  selectUser = {this.selectUser}
                />
              )
            })
        }
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return{
    data : state.data,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    selectedUser : user => dispatch(selectuser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClientList)