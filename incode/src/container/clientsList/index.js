import React from 'react';

import data from '../../clients.json';
import ClientItem from '../../components/clientItem';
import ClientSearch from '../../components/clientSearch';

export default class ClientList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
    }
  }
  componentWillMount(){
    this.setState({
      data,
    })
        
  }
  render(){
    return(
      <div>
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