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
        console.log(this.state.data[1]);
        return(
            <div>
                client data
            </div>
        )
    }
} 