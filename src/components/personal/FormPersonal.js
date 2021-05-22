import React from 'react';

function FormPersonal(props) {
  const { handleChange, handleSubmit, firstName, lastName, email, phone } =
    props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="firstName"
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        value={firstName}
      />
      <input
        className="lastName"
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        value={lastName}
      />

      <input
        className="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        value={email}
      />

      <input
        className="phone"
        type="number"
        placeholder="Phone"
        onChange={handleChange}
        value={phone}
      />

      <input type="submit" value="update" />
    </form>
  );
}
export default FormPersonal;
