import React, {Component, Fragment} from 'react'
import {Link} from "react-router-dom"
import {Textbox} from 'react-inputs-validation';

class AddUpdateUser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      email: null,
      password: null
    }
  }

  render() {
    return (
      <Fragment>
        <div className="row breadcrumb-row mt-1 mb-2">
          <div className="col-md-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">
                  Add Users
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 text-right action-col">
            <button type="button" className="btn btn-secondary btn-sm">Save</button>
            &nbsp;
            <button type="button" className="btn btn-warning btn-sm">
              <Link to="/module/users" className="breadcrumb-link">Cancel</Link>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 pl-0 pr-0">
            <div className="page-conatiner pl-5 pr-5 pt-4">
              <div className="row">
                <div className="col-md-4">
                  <Textbox
                    tabIndex="1"
                    id={'userName'}
                    name="userName"
                    type="text"
                    value={this.state.userName}
                    placeholder="User Name"
                    onChange={(name, e) => {
                    this.setState({name});
                    console.log(e);
                  }}
                    onBlur={(e) => {
                    console.log(e)
                  }}
                    validationOption={{
                    name: 'User Name',
                    check: true,
                    required: true
                  }}/>
                </div>

                <div className="col-md-4">
                  <Textbox
                    tabIndex="1"
                    id={'email'}
                    name="email"
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={(name, e) => {
                    this.setState({name});
                    console.log(e);
                  }}
                    onBlur={(e) => {
                    console.log(e)
                  }}
                    validationOption={{
                    name: 'Email',
                    check: true,
                    required: true
                  }}/>
                </div>

                <div className="col-md-4">
                  <Textbox
                    tabIndex="1"
                    id={'password'}
                    name="password"
                    type="text"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={(name, e) => {
                    this.setState({name});
                    console.log(e);
                  }}
                    onBlur={(e) => {
                    console.log(e)
                  }}
                    validationOption={{
                    name: 'Password',
                    check: true,
                    required: true
                  }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddUpdateUser;