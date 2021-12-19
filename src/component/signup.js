import React from 'react';
import './singup.css'
import Table from './table'
import Login from './login'


let getdata = JSON.parse(localStorage.getItem('Users')) || []


class Signup extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        users: [],
    }

    constructor(props) {
        super(props)
        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.getdetails = this.getdetails.bind(this);
    }

    setName(event) {
        var username = event.target.value
        this.setState({ name: username });
        // console.log(this.state.name);
    }
    setEmail(event) {
        var useremail = event.target.value
        this.setState({ email: useremail })
        // console.log(this.state.email)
    }
    setPassword(event) {
        var userpassword = event.target.value;
        this.setState({ password: userpassword })
    }
    getdetails() {

        var user = {
            Name: this.state.name,
            Email: this.state.email,
            Password: this.state.password,
        }

        var adduser = this.state.users;
        adduser.unshift(user);
        // console.log(this.state.users)
        this.setState({ name: '' });
        this.setState({ email: '' });
        this.setState({ password: '' });



        getdata.unshift(user)

        localStorage.setItem('Users', JSON.stringify(getdata))

    }

    render() {

        return <div>
            <div className='signup-div'>
                <h1>Sign up</h1>
                <p>Name <input value={this.state.name} onChange={this.setName} /></p>
                <p>Email <input type='email' value={this.state.email} onChange={this.setEmail} /></p>
                <p>Password <input type='password' value={this.state.password} onChange={this.setPassword} /></p>
                <button onClick={this.getdetails}>sign up</button>
            </div>

            <Login checkdata={getdata} />
            <Table Usersdetails={getdata} />

        </div>

    }
}

export default Signup;