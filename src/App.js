import React, { useEffect, useState } from "react";
// import AddUser from "./components/Webapi/AddUser/AddUser";
// import Users from "./components/Webapi/UsersList/Users";
// import UpdateUser from "./components/Webapi/UpdateUser/UpdateUser";

// const dummyUsers = [
//   {
//     id: 'e1',
//     fName: "David",
//     lName: "Fuentes",
//     email: "email1@email.com",
//     phone: 23133323,
//     user: "User",
//     date: new Date(2020, 7, 14),
//   },
//   {
//     id: 'e2',
//     fName: "Daniel",
//     lName: "Fuentes",
//     email: "email1@email.com",
//     phone: 23133323,
//     user: "User",
//     date: new Date(2020, 7, 14),
//   },
// ];

// function App() {
//  //https://localhost:7004/User/getAll
//   // const fetchDataHandler = () => {
//   //   fetch("https://localhost:7004/User/getAll").then(response => {

//   //     console.log(response);
//   //     return response.json();
      
//   //   }).then(data => data).catch();
//   // };

//   // useEffect(() => {
//   //   fetchDataHandler()
//   // },[]);

//   const [user, setUser] = useState(dummyUsers);

//   //Binding with the user's input
//   const addUserHandler = (user) => {
//     setUser((prevUser) => {
//       return [user, ...prevUser]
//     });
//   };


//   return (
//     <div>

//       <AddUser onAddUser={addUserHandler}/>
//       <UpdateUser onUpdateUser={addUserHandler}/>
//       <Users items={user}/>
//     </div>
//   );
// }

import Dashboard from "./components/SecondProject/Dashboard";

const App = () => {

  return (

    <Dashboard/>
  );
};

export default App;