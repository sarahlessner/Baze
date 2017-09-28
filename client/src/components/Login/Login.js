import React, { Component } from "react";
import { Container, Row } from "../Grid";
import { Link, Redirect } from "react-router-dom";
import Nav from "../Nav";
import './login.css';

class Login extends Component {

  render() {
    return (


      <Container>
        <Row>
          <Nav />
          <div className="login-container">
            <form
              action="/login"
              method="post"
            >
              <h1>
                Login
              </h1>
              <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Email"
                name="email"
              >
              </input>
              </div>
              <input className="form-control"
                type="password"
                placeholder="Password"
                name="password"
              >
              </input>
              <button className="btn btn-primary"
                type='submit'
              >
                Login
              </button>
              <hr />
              <p>
                Need an account?&nbsp;&nbsp;&nbsp;&nbsp; 
                <Link to="/signup">
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Login;
