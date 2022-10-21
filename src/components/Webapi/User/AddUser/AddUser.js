import React from "react";
import AddUserForm from "./AddUserForm";

const AddUser = (props) => {
  const saveDataHandler = (enteredData) => {
    const userData = {
      ...enteredData
    };
    props.onAddUser(enteredData);
  };

  return <AddUserForm onAddUser={saveDataHandler} />;
};

export default AddUser;
