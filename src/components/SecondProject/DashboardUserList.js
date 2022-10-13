import React from "react";
import DashboardCard from "./DashboardCard";//to extract the info

//Receives the input data from card and outputs in a list
const DashboardUserList = (props) => {//we rely on props to get the data

  //function to extract the info from the card file
  const onExtractUserData = () => {
    
  };

  return (

    <ul>
      {props.users.map(user => 
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
        )}
    </ul>

  );
}

export default DashboardUserList;
