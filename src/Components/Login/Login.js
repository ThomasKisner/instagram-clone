import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

     handleInput = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

     submit = event => {
      localStorage.setItem("user", this.state.username);
      localStorage.setItem("password", this.state.password);
      window.location.reload();
    };

    
    render(){
    return (
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={this.handleInput}
          value={this.state.username}
          name="username"
        />
        <input
          type="text"
          placeholder="password"
          onChange={this.handleInput}
          value={this.state.password}
          name="password"
        />
        <button onClick={this.submit}>Login</button>
      </div>
    );
  }
}



export default Login;
