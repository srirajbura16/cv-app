import React from 'react';

function FormPersonal(props) {
  const { handleChange, handleSubmit, firstName, lastName, email, phone } =
    props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        value={firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        value={lastName}
      />

      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        value={email}
      />

      <input
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
