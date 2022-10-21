import React from "react";
import UpdateUserForm from "./UpdateUserForm";

const UpdateUser = (props) => {
  const updateDataHandler = (enteredData) => {
    const userData = {
      ...enteredData,
    };
    props.onUpdateUser(enteredData);
  };

  return <UpdateUserForm onUpdateUser={updateDataHandler} />;
};

export default UpdateUser;
