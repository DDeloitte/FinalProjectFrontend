import React, { useState } from "react";
import DashboardCard from "./DashboardCard";
import DashboardUserList from "./DashboardUserList";


//Graphic part of the project, that prints the graphics components
const Dashboard = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName,uAge) => {//function that receives two arguments
    setUsersList((prevUsersList) => {//asigns the arguments to the variable setUsersList
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()} ]//copy the prev arrays and returns an array
    });
  };

  return (
    <div>
      <DashboardCard onAddUser={addUserHandler}/>{/*Retrieves the info from the card*/}
      <DashboardUserList users={usersList} />
    </div>
  );

}

export default Dashboard;
