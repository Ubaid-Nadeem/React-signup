import React from 'react'
import './singup.css'

class Login extends React.Component {

    state = {
        email: '',
        password: '',
    }

    constructor() {
        super()
        this.checkemail = this.checkemail.bind(this);
        this.checkdata = this.checkdata.bind(this);
        this.checkpassword = this.checkpassword.bind(this);

    }

    checkemail(event) {
        var email = event.target.value
        this.setState({ email });
    }

    checkpassword(event) {
        var password = event.target.value
        this.setState({ password });
    }

    checkdata() {
        this.props.checkdata.forEach(element => {
            if (element.Email == this.state.email && element.Password == this.state.password) {
                alert(element.Name + ' is login');
            }
            else {
                console.log('Erorr!')
            }
        })
        this.setState({ email: '' })
        this.setState({ password: '' })

    }
    render() {
        return <div>
            <div className='login-div'>
                <h1>Login</h1>
                <p>Email <input type='email' onChange={this.checkemail} /></p>
                <p>Password <input type='password' onChange={this.checkpassword} /> </p>
                <button onClick={this.checkdata}>login</button>
            </div>

        </div>
    }
}
export default Login