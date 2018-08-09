import React from 'react';

import data from '../../clients.json';
import ClientItem from '../../components/clientItem';

export default class ClientList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      search:'',
    }
  }
  componentWillMount(){
    this.setState({
      data,
    })
        
  }
  onSearch = (e) =>{
    const data = this.state.data.filter(item =>{
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
  render(){
    return(
      <div>
        <input
            placeholder='Search users...'
            name='search'
            onChange = {(e)=>this.onSearch(e)}
            
          />
        {/* !this.state.data */true && 
            this.state.data.map((item,index) => {
              return (
                <ClientItem
                  key = {index}
                  user = {item}
                />
              )
            })
        }
      </div>
    )
  }
} 