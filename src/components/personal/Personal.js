import React, { Component } from 'react';
import FormPersonal from './FormPersonal';
import PersonalInfo from './PersonalInfo.js';

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      submit: true,
      firstName: 'Dutch',
      lastName: 'Van Der Linde',
      email: 'weneedmoney@tahiti',
      phone: '1899',
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
      showForm: !state.showForm,
      submit: !state.submit,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      submit: !state.submit,
      showForm: !state.showForm,
    }));
    console.log(this.state);
  }

  render() {
    const { showForm, firstName, lastName, email, phone } = this.state;
    return (
      <div>
        <h1>Personal Info</h1>
        <button onClick={this.handleClick}>Update Info</button>
        <hr />
        <div>
          {showForm ? (
            <FormPersonal
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
            />
          ) : (
            <PersonalInfo
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Personal;
