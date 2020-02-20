import React, { Component } from "react";

class Login extends Component {


state = {



  
}







  handleChange = e => {
    console.log("WHATS GUCCI");
  };

  render() {
    return (
      <form>
        <input name="email" value={email} onChange={this.handelChange} />
        <input name="password" />
        <button type="submit">
        Submit
      </button>
      </form>
    );
  }
}

export default Login;
