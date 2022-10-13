import React from "react";
import UpdateUserForm from "./UpdateUserForm";

const UpdateUser = (props) => {

  const updateDataHandler = (enteredData) => {

    const userData = {
      ...enteredData,
      // id2: self.crypto.randomUUID()
    };
    props.onUpdateUser(enteredData);
    //console.log(userData)
  };

  return (

    <UpdateUserForm onUpdateUser={updateDataHandler} />

  );

};

export default UpdateUser;