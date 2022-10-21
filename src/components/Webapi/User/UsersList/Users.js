import React, { useState } from "react";
import UsersList from "./UsersList";

const Users = (props) => {

  const saveDataHandler = (enteredData) => {
    const userData = {
      ...enteredData
    };
    props.onAddUser(enteredData);
  };

  const updateDataHandler = (enteredData) => {
    const userData = {
      ...enteredData,
    };
    props.onUpdateUser(enteredData);
  };

  const deleteDataHandler = (enteredData) => {
    const userData = {
      ...enteredData,
    };
    props.onDeleteUser(enteredData);
  };

  const itemByUserDataHandler = (enteredData) => {
    const userData = {
      ...enteredData,
    };
    props.onItemByUser(enteredData);
  };

  const tradingHandler = (enteredData) => {
    const userData = {
      ...enteredData,
    };
    props.onTrading(enteredData);
  };

  return <UsersList items={props.items} onUpdateUser={updateDataHandler} onDeleteUser={deleteDataHandler} onItemByUser={itemByUserDataHandler} itemsByUser={props.itemsByUser} onAddUser={saveDataHandler} onTrading={tradingHandler} itemsTrading={props.itemsTrading}/>;
};

export default Users;
