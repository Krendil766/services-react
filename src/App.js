import React, { Component, useState } from 'react'
import Client from './components/client/'
import './App.css';
import axios from 'axios';
import ClientPage from './components/login-page';
import CheckList from './components/checkList'



class App extends Component {
  state = {
    user: []
  }
  componentDidMount = () => {
    axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users')
      .then((response) => this.setState({ user: response.data }))
    
  }
  // onLoaded = async () => {

  //   /*  try {
  //      const res = await axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users');
  //      this.setState({user:res.data})
  //    } catch (err) {
  //      console.log(err);
  //    } */

  //   axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users')
  //     .then((response) => this.setState({ user: response.data }))

  //   /* .then(response => console.log(response))
  //   .catch(error => console.log(error)); */
  // }
  componetDidUpdate = (prevProps, prevState) => {

  }
  render() {
    const items = this.state.user.map(({ _id, name: { first, last } }) => {
      return (
        <li key={_id}>{first + ' ' + last}</li>
      )
    })
    return (
      <div>
        {/* <button onClick={this.onLoaded}>Get</button> */}
        <ul>
          {items}
        </ul>
        <Client />
        <ClientPage/>
      </div>
    );
  }
}

const App2 = () => {
  const [user, setUser] = useState([]);
  const [number, setNumber] = useState(0)

  const plus = () => {
    setNumber(number+1)
  }
  const minus = () => {
    setNumber(number-1)
  }

  const onLoaded = async () => {
    try {
      const res = await axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users');
      setUser(res.data)
    } catch (err) {
      console.log(err);
    }

    /* axios.get('https://serverless-backend-ky9b8rmuq.now.sh/api/users')
      .then((response) => this.setState({ user: response.data })) */

    /* .then(response => console.log(response))
    .catch(error => console.log(error)); */
  }

  const items = user.map(({ _id, name: { first, last } }) => {
    return (
      <li key={_id}>{first + ' ' + last}</li>
    )
  })

  return (
    <div>
      <button onClick={onLoaded}>Get</button>
      <ul>
        {items}
      </ul>
      <Client />
      <button onClick={plus}>+</button>
      <button>{number}</button>
      <button onClick={minus}>-</button>
      <CheckList title = 'Plan of moth'/>  
    </div>
  );
}


export default App2;
