import React, { useState, useEffect} from "react";
import { Modal, Button } from "bootstrap";

const ItemModalList = ({id, showModal}) => {

  //Get items by user method

  const [itemByUserData, setItemByUserData] = useState([]);

  async function getItemByUserHandler (userId) {

    try {
      console.log(userId);
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
      console.log(transformedData);
      setItemByUserData(transformedData);
    } catch (error) {

    }
    
  };

  useEffect(() => {
    if(showModal){
      getItemByUserHandler(id);
    }
  }, [showModal]);

  return (

    <Modal contentClassName="my-modal" show={showModal} 

    >
    <Modal.Header closeButton>
      <Modal.Title>Items by User</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form
        // onSubmit={submitItemByUserHandler}
        className="row g-3 align-items-center justify-content-center"
        >

        <div className="col-md-2">
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="User ID"
              required
              // onChange={itemByUserChangeHandler}
              // value={itemUserId}
            ></input>
          </div>
        </div>
        

        <div className="col-md-4 mb-3">
          <Button variant="secondary" 
          // onClick={handleItemByUserClose}
          >
            Close
          </Button>
        </div>

        {/* <!-- Find user button --> */}        
        <div className="col-md-4 mb-3">
          <Button type="submit" variant="primary" >
            Find
          </Button>
        </div>
              
      </form>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* <!-- Items List Data --> */}
          <div className="col-md-12 mt-3">
            <div className="card shadow-sm border-0 mb-3">
              <div className="card-header text-bg-dark text-center">
                Items List
              </div>
              <table className="table table-sm small table-bordered align-middle mb-0">
                {/* <!-- Table Header --> */}
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Item Name</th>
                    <th>Item Type</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>User ID</th>
                  </tr>
                </thead>

                {itemByUserData.map((item) => (
                  <tbody key={item.id}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.description}</td>
                      <td>{item.quantity}</td>
                      <td>{item.userId}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>

          
        </div>
      </div>

    </Modal.Body>
  </Modal>
  );
};

export default ItemModalList;