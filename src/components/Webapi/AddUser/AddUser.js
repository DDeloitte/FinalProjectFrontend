import React from "react";
import AddUserForm from "./AddUserForm";

const AddUser = (props) => {

  const saveDataHandler = (enteredData) => {

    const userData = {
      ...enteredData,
      id: Math.random().toString(),
      // id2: self.crypto.randomUUID()
    };
    props.onAddUser(enteredData);
    console.log(userData)
  };

  return (

    <AddUserForm onAddUser={saveDataHandler} />

  );

};

export default AddUser;