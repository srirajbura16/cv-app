import React, { Component } from 'react';
import FormPersonal from './forms/form-personl';
import PersonalInfo from './PersonalInfo.js';

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      submit: true,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.className]: e.target.value,
    });
  }

  handleClick() {
    this.setState((state) => ({
      show: !state.show,
      submit: !state.submit,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      submit: !state.submit,
      show: !state.show,
    }));
    console.log(this.state);
  }

  render() {
    const { show, submit, firstName, lastName, email, phone } = this.state;
    return (
      <div>
        <h1>Personal Info</h1>
        <button onClick={this.handleClick}>Add Info</button>
        <hr />
        <div>
          {show ? (
            <FormPersonal
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
            />
          ) : null}
        </div>
        <div>
          {submit ? (
            <PersonalInfo
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Personal;
