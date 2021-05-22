import React from 'react';

function PersonalInfo(props) {
  const { firstName, lastName, email, phone } = props;

  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{email}</div>
      <div>{phone}</div>
    </div>
  );
}
export default PersonalInfo;
