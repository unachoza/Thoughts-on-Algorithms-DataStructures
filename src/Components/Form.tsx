import React, { Component } from 'react';
import '../App.css';

interface State {
  username: string;
  phone: string;
  email: string;
  site: string;
  password: string;
  passconf: string;
  rows: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
  cols: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
}
//<{}, State>
class Form extends Component<{}, State> {
  state: any = {
    username: false,
    phone: false,
    email: false,
    site: false,
    password: false,
    passconf: false,
  };
  render() {
    return (
      <div className="container">
        <div className="text-center mb-5">Add Question</div>
        <form action="/register" method="POST" className="form">
          <div className="form-group" id="name">
            <textarea rows={10} name="Username" id="username" className="form-control" placeholder="question" />
          </div>
          {/* <div className="form-group" id="phone-inp">
            <label className="text-muted mb-0" htmlFor="#phone">
              Enter your phone number
            </label>
            <input type="text" id="phone" placeholder="XXX-XXX-XXXX" name="phone" className="form-control" />
          </div> */}
          {/* <div className="form-group" id="mail">
            <label className="text-muted mb-0" htmlFor="#email">
              Email
            </label>
            <input type="text" id="email" placeholder="Enter email" name="email" className="form-control" />
          </div>
          <div className="form-group" id="site-inp">
            <label className="text-muted mb-0" htmlFor="#site">
              Your website
            </label>
            <input type="text" id="site" placeholder="https://www.xyz.com" name="site" className="form-control" />
          </div>
          <div className="form-group" id="pass">
            <label className="text-muted mb-0" htmlFor="#password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="password"
              name="password"
            />
          </div>
          <div className="form-group" id="pass2">
            <label className="text-muted mb-0" htmlFor="#passconf">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password again"
              id="passconf"
              name="passconf"
            />
          </div> */}
          <button type="submit" className="btn-submit ">
            Next
          </button>
        </form>
        <form action="submit"></form>
      </div>
    );
  }
}
export default Form;
