import React from "react";
import App from '../../App';
import Login from '../Login/Login';


const Authenticate = componentParam =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          loggedIn: false,
      };
    }
    render() {
      if(this.state.loggedIn){
          return < App />
      } else {
          return <Login />
      }
    }
  };

export default Authenticate;
