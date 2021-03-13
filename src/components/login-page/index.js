import React, { Component } from 'react';
import axios from 'axios';


export default class ClientPage extends Component {
    url = 'http://localhost:3001/auth/sign-in';
    state = {
        phone: '',
        password: '',
        user: null,
        err: '',
    }
    componentDidUpdate = (prevProps, prevState) => {
        // if (prevState.password.length === 2 && this.state.password.length === 3 && this.state.phone.length===13) {
        //     console.log('=');
        // }
    }

    onLogin = async (e) => {e.preventDefault();
        try {
            const response = await axios.post(this.url, {
                phone: this.state.phone,
                password: this.state.password
            });
            this.setState({ user: response.data, phone: '', password: '', })
        } catch (err) {
            this.setState({ err: err.response.data })
        }
    }
    onChangeCredentials = (e, fieldName) => {
        /*         if (fieldName === 'phone') {
                    this.setState({ phone: e.target.value })
                }
                if (fieldName === 'password')  {
                    this.setState({ password: e.target.value })
                }
         */
        
        this.setState({ [fieldName]: e.target.value, err: '' })

    }
    render() {
        console.log(this.state.user);

        return (
            <form>
                <input type="text" placeholder="login" onChange={(e) => this.onChangeCredentials(e, 'phone')} value={this.state.phone} />
                <input type="passord" placeholder="passwod" onChange={(e) => this.onChangeCredentials(e, 'password')} value={this.state.password} />
                <input type="submit" value='Add' onClick={this.onLogin} />
                <div>
                    {this.state.user && this.state.user.name.first + ' ' + this.state.user.name.last}
                    {this.state.err&&this.state.err}
                </div>
            </form>

        )
    }
}