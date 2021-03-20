import React, { Component, useState, useEffect, useCallback } from 'react';
import axios from 'axios';


// export default class ClientPage extends Component {
//     url = 'http://localhost:3001/auth/sign-in';
//     state = {
//         phone: '',
//         password: '',
//         user: null,
//         err: '',
//     }
//     componentDidUpdate = (prevProps, prevState) => {
//         // if (prevState.password.length === 2 && this.state.password.length === 3 && this.state.phone.length===13) {
//         //     console.log('=');
//         // }
//     }

//     onLogin = async (e) => {e.preventDefault();
//         try {
//             const response = await axios.post(this.url, {
//                 phone: this.state.phone,
//                 password: this.state.password
//             });
//             this.setState({ user: response.data, phone: '', password: '', })
//         } catch (err) {
//             this.setState({ err: err.response.data })
//         }
//     }
//     onChangeCredentials = (e, fieldName) => {
//         /*         if (fieldName === 'phone') {
//                     this.setState({ phone: e.target.value })
//                 }
//                 if (fieldName === 'password')  {
//                     this.setState({ password: e.target.value })
//                 }
//          */

//         this.setState({ [fieldName]: e.target.value, err: '' })

//     }
//     render() {
//         console.log(this.state.user);

//         return (
//             <form>
//                 <input type="text" placeholder="login" onChange={(e) => this.onChangeCredentials(e, 'phone')} value={this.state.phone} />
//                 <input type="passord" placeholder="passwod" onChange={(e) => this.onChangeCredentials(e, 'password')} value={this.state.password} />
//                 <input type="submit" value='Add' onClick={this.onLogin} />
//                 <div>
//                     {this.state.user && this.state.user.name.first + ' ' + this.state.user.name.last}
//                     {this.state.err&&this.state.err}
//                 </div>
//             </form>

//         )
//     }
// }

const ClientPage = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [err, setErr] = useState('');

    const url = 'http://localhost:3001/auth/sign-in';

    const onChangeCredentials = useCallback((e, fieldName) => {
        if (fieldName === 'phone') {
            setPhone(e.target.value)
            setErr('')
        }
        if (fieldName === 'password') {
            setPassword(e.target.value)
            setErr('')
        }
        // this.setState({ [fieldName]: e.target.value, err: '' })
    }, [setPhone, setErr, setPassword])
    const login = useCallback(async () => {
        try {
            const response = await axios.post(url, {
                phone,
                password
            });
            setUser(response.data);
            setPhone('');
            setPassword('');
        } catch (err) {
            setErr(err.response.data)
        }
    }, [password, phone, setUser, setPhone, setPassword, setErr])

    useEffect(() => {
        if (password.length === 3 && phone.length === 12) {
            login()
        }
    }, [password, phone, login])

    return (
        <form>
            <input type="text" placeholder="login" onChange={(e) => onChangeCredentials(e, 'phone')} value={phone} />
            <input type="passord" placeholder="passwod" onChange={(e) => onChangeCredentials(e, 'password')} value={password} />
            <input type="submit" value='Add' /* onClick={login} */ />
            <div>
                {user && user.name.first + ' ' + user.name.last}
                {err && err}
            </div>
        </form>
    )
}
export default ClientPage;