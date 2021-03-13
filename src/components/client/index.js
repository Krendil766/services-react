import React, { Component } from 'react';
import SwapiService from '../servisec/'

export default class Client extends Component{
    swapiService = new SwapiService();
    

    state = {
        people: null
    }
    updatePeople =()=> {
        this.swapiService
            .getResource("https://serverless-backend-ky9b8rmuq.now.sh/api/users")
            .then((people) => {this.setState({people})
        })
    }
    render() {
        // console.log(this.state.people);
        
        return (
            <div>
                <div>Hello people</div>
                <button onClick={this.updatePeople}>Add</button>
            </div>
            
        )
    }
}