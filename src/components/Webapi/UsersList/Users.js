import React, { useState } from "react";
import UsersList from "./UsersList";

const Users = (props) => {
  //console.log(props);
  return (

    <UsersList items={props.items} />

  );

};

export default Users;