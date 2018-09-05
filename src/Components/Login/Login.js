import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }

       const handleInput = event => {
            this.setState({[event.target.name]: event.target.value});
        }

       const submit = event => {
            event.preventDefault();
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('password', this.state.password);
        }



    return(
        <div>
            <input type="text" placeholder="username" onChange={this.handleInput} name='username'></input>
            <input type="text" placeholder="password" onChange={this.handleInput} name='password'></input>
            <button onClick={this.submit}>Login</button>
        </div>
    );
}
}

export default Login;