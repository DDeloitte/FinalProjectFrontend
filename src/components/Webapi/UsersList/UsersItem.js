import React, { useState } from 'react';

const UsersItem = (props) => {

  return (

    <tbody>
      <tr>
        <td>{props.id}</td>
        <td>{props.fname}</td>
        <td>{props.lname}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.user}</td>
        <td>{props.date}</td>
      </tr>
    </tbody>

  );

};

export default UsersItem;
