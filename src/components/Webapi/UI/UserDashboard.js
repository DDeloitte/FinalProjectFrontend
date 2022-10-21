import React, { useEffect, useState } from "react";

//User imports
import AddUser from "../User/AddUser/AddUser";
import UpdateUser from "../User/UpdateUser/UpdateUser";
import Users from "../User/UsersList/Users";
import GetById from "../User/GetById/GetById";
import { data } from "autoprefixer";


//Dashboard for the users, here are the calls to all the methods: add, get, getbyid ...
const UserDashboard = () => {

  //Get all Users method
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserDataHandler();
  }, []);

  async function fetchUserDataHandler () {
    
    try {
      const response = await fetch('https://localhost:7071/api/User/getAll', {
      method: 'GET',
      headers: {
            'Content-Type': 'application/json'
      },
    })
    const dataApi = await response.json();

    if(!response.ok){

    }

      const transformedData = dataApi.data.map(users => {
        return{
          id: users.userId,
          fName: users.fName,
          lName: users.lName,
          user: users.userType,
          phone: users.phone,
          email: users.email
        };
      });

      setUserData(transformedData);
    } catch (error) {

    }
    
  };

  //Add user method

  async function addUserDataHandler (user) {
    const response = await fetch('https://localhost:7071/api/User/add', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user) // body data type must match "Content-Type" header
  });

    const data = await response.json();

  }

  //Update user method

  async function updateUserHandler (user) {
  const response = await fetch('https://localhost:7071/api/User/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user) //sending data to the webapi
  });
  const data = await response.json();
  };

    //Delete user method

    async function deleteUserHandler (userId) {
      const response = await fetch(`https://localhost:7071/api/User/delete/${userId.userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
      },
      });
      const data = await response.json();
      };

      //Get items by user method

      const [itemByUserData, setItemByUserData] = useState([]);

      async function getItemByUserHandler (userId) {
    
        try {
          const response = await fetch(`https://localhost:7071/api/Item/itemByUser/${userId.userId}`, {
          method: 'GET',
          headers: {
                'Content-Type': 'application/json'
          },
        })
        const dataApi = await response.json();
    
          const transformedData = dataApi.data.map(users => {
            return{
              id: users.itemId,
              name: users.itemName,
              type: users.itemType,
              description: users.description,
              quantity: users.quantity,
              userId: users.userId
            };
          });

          setItemByUserData(transformedData);
        } catch (error) {
    
        }
        
      };

      //trading method

      const [tradingData, setTradingData] = useState([]);

      async function tradingHandler (data) {

        try {
          const response = await fetch(`https://localhost:7071/api/Item/getItem/item/${data.ItemId}/item/${data.Qty}/newUser/${data.NewUser}`, {
          method: 'GET',
          headers: {
                'Content-Type': 'application/json'
          },
        })
        const dataApi = await response.json();
    
          const transformedData = dataApi.data.map(item => {
            return{
              id: item.itemId,
              name: item.itemName,
              type: item.itemType,
              description: item.description,
              quantity: item.quantity,
              userId: item.userId
            };
          });

          setTradingData(transformedData);
        } catch (error) {
    
        }
        
      };

  return(
    <div>

      <Users fetchUserDataHandler={fetchUserDataHandler} items={userData} onUpdateUser={updateUserHandler} onDeleteUser={deleteUserHandler} onItemByUser={getItemByUserHandler} itemsByUser={itemByUserData} onAddUser={addUserDataHandler} onTrading={tradingHandler} itemsTrading={tradingData}/>

    </div>
  );  
};

export default UserDashboard;