import React from "react";
const AccountDetails = ({ user }) => {
  return (
    <>
      <div>Name: {user.name} </div>
      <div>Age:{user.age}</div>
      <div> Account type:{user.account_type}</div>
    </>
  );
};

export default AccountDetails;
