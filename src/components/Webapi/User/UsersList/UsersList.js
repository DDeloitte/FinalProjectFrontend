import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CustomeModal.css'

const UsersList = (props) => {

  //*************ADD USER MODAL AND STATE*************\\
  const [addEnteredFName, setAddEnteredFName] = useState("");
  const [addEnteredLName, setAddEnteredLName] = useState("");
  const [addEnteredEmail, setAddEnteredEmail] = useState("");
  const [addEnteredPhone, setAddEnteredPhone] = useState("");
  const [addEnteredUser, setAddEnteredUser] = useState("User");

  // Definition of states
  const fNameAddChangeHandler = (event) => {
    setAddEnteredFName(event.target.value);
  };
  const lNameAddChangeHandler = (event) => {
    setAddEnteredLName(event.target.value);
  };
  const emailAddChangeHandler = (event) => {
    setAddEnteredEmail(event.target.value);
  };
  const phoneAddChangeHandler = (event) => {
    setAddEnteredPhone(event.target.value);
  };
  const userAddChangeHandler = (event) => {
    setAddEnteredUser(event.target.value);
  };
  const submitAddHandler = (event) => {
    event.preventDefault();

    // assigns input to the values
    const userData = {
      fName: addEnteredFName,
      lName: addEnteredLName,
      email: addEnteredEmail,
      phone: addEnteredPhone,
      userType: addEnteredUser
    };
    //Exports the input data
    props.onAddUser(userData);

    // Sets the default values, deletes previous input
    setAddEnteredFName("");
    setAddEnteredLName("");
    setAddEnteredEmail("");
    setAddEnteredPhone("");
    setAddEnteredUser("");
  };

  const [showAdd, setShowAdd] = useState(false);
  const handleAddClose = () => setShowAdd(false);
  const handleAddShow = () => setShowAdd(true);

  //*************UPDATE MODAL AND STATE*************\\
  
  const [enteredId, setEnteredId] = useState("");
  const [enteredFName, setEnteredFName] = useState("");
  const [enteredLName, setEnteredLName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredUser, setEnteredUser] = useState("");

  // Definition of states

  const idChangeHandler = event => {
    setEnteredId(event.target.value);
  };
  const fNameChangeHandler = (event) => {
    setEnteredFName(event.target.value);
  };
  const lNameChangeHandler = (event) => {
    setEnteredLName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };
  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    // assigns input to the values
    const userData = {
      userId: enteredId,
      fName: enteredFName,
      lName: enteredLName,
      email: enteredEmail,
      phone: enteredPhone,
      userType: enteredUser,
    };

    //Exports the input data
    props.onUpdateUser(userData);

    // Sets the default values, deletes previous input
    setEnteredId("");
    setEnteredFName("");
    setEnteredLName("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredUser("");

  };

  //Update Modal
  const [showUpdate, setShowUpdate] = useState(false);
  const handleUpdateClose = () => setShowUpdate(false);
  const handleUpdateShow = (user) => {
    setShowUpdate(true)
    setEnteredId(user.id)
    setEnteredFName(user.fName)
    setEnteredLName(user.lName)
    setEnteredEmail(user.email)
    setEnteredPhone(user.phone)
    setEnteredUser(user.user)
  };



  //*************DELETE MODAL AND STATE*************\\

  //Delete Modal
  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = (userId) => {
    setShowDelete(true)
    setDeleteId(userId);
  };

  //Delete props method
  const [deleteId, setDeleteId] = useState("");
  const idDeleteChangeHandler = event => {
    setDeleteId(event.target.value);
  };
  const submitDeleteHandler = (event) => {
    event.preventDefault();

    // assigns input to the values
    const userData = {
      userId: deleteId
    };

    //Exports the input data
    props.onDeleteUser(userData);

    // Sets the default values, deletes previous input
    setEnteredId("");

  };


  //*************ITEM BY USER MODAL AND STATE*************\\

  //Item By user Modal
  const [showItemByUser, setShowItemByUser] = useState(false);
  const handleItemByUserClose = () => setShowItemByUser(false);
  const handleItemByUserShow = (userId) => {
    setShowItemByUser(true);
    setItemUserId(userId);
  };

  //Item by user props method
  const [itemUserId, setItemUserId] = useState("");
  const itemByUserChangeHandler = event => {
    setItemUserId(event.target.value);
  };
  const submitItemByUserHandler = (event) => {
    event.preventDefault();

    // assigns input to the values
    const userData = {
      userId: itemUserId
    };

    //Exports the input data
    props.onItemByUser(userData);

    // Sets the default values, deletes previous input
    setEnteredId("");

  };
  useEffect(()=>{
    if(itemUserId != ""){
      const userData = {
        userId: itemUserId
      };
      props.onItemByUser(userData);
    }
  }, [itemUserId])

  //*************TRADING MODAL AND STATE*************\\

  //Trading user Modal
  const [showTrading, setShowTrading] = useState(false);
  const handleTradingClose = () => setShowTrading(false);
  const handleTradingShow = () => {
    setShowTrading(true);
  };

  //Trading
  const [itemId, setItemId] = useState("");
  const [qty, setQty] = useState("");
  const [newUser, setNewUser] = useState("");

  const itemIdHandler = event => {
    setItemId(event.target.value);
  };
  const qtyChangeHandler = (event) => {
    setQty(event.target.value);
  };
  const newUserChangeHandler = (event) => {
    setNewUser(event.target.value);
  };

  const submitTradingHandler = (event) => {
    event.preventDefault();

    // assigns input to the values
    const userData = {
      ItemId: itemId,
      Qty: qty,
      NewUser: newUser
    };
    

    //Exports the input data
    props.onTrading(userData);

    // Sets the default values, deletes previous input
    setItemId("");
    setQty("");
    setNewUser("");

  };



  return (
    <div>
      {/* List prompt */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* <!-- Employee Data --> */}
          <div className="col-md-10 mt-3">
            <div className="card shadow-sm border-0 mb-3">

              {/* <!-- Card Header --> */}
              <div className="card-header text-bg-dark text-center">
                <h5 className="card-header d-flex justify-content-between align-items-center">

                  Users List
                  <Button 
                    variant="primary"
                    onClick={handleAddShow}>
                    Add new user
                  </Button>

                </h5>
              </div>

              <table className="table table-sm small table-bordered align-middle mb-0">
                {/* <!-- Table Header --> */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>User</th>
                    <th>Trade</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Items</th>
                  </tr>
                </thead>

                {/* <!-- Table Body --> */}
                {props.items.map((user) => (
                  <tbody key={user.id}>
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.fName}</td>
                      <td>{user.lName}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.user}</td>

                      {/* Trade method */}
                      <td>
                        <div className="d-grid">
                          <a
                            href="#"
                            className="btn btn-sm btn-secondary"
                            onClick={() => handleTradingShow()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-shop"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                            </svg>
                          </a>
                        </div>
                      </td>

                      {/* Update method */}
                      <td>
                        <div className="d-grid">
                          <a
                            href="#"
                            className="btn btn-sm btn-primary"
                            onClick={() => handleUpdateShow(user)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path
                                fillRule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                              />
                            </svg>

                          </a>
                        </div>
                      </td>

                      {/* Delete method */}
                      <td>
                        <div className="d-grid">
                          <a
                            href="#"
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDeleteShow(user.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-x-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </a>
                        </div>
                      </td>

                      {/* Items Inventory method */}
                      <td>
                        <div className="d-grid">
                          <a
                            href="#"
                            className="btn btn-sm btn-success"
                            onClick={() => handleItemByUserShow(user.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-list"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                              />
                            </svg>

                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>

          
        </div>
      </div>

      {/* Modals prompt */}

      {/* Add User Modal */}
      <Modal show={showAdd} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form
                onSubmit={submitAddHandler}
                className="row g-3 align-items-center justify-content-center"
              >

                {/* <!-- First name prompt --> */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="First Name"
                      required
                      onChange={fNameAddChangeHandler}
                      value={addEnteredFName}
                    ></input>
                  </div>
                </div>

                {/* <!-- Last name prompt --> */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Last Name"
                      required
                      onChange={lNameAddChangeHandler}
                      value={addEnteredLName}
                    ></input>
                  </div>
                </div>

                {/* <!-- Email prompt --> */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Email ID"
                      required
                      onChange={emailAddChangeHandler}
                      value={addEnteredEmail}
                    ></input>
                  </div>
                </div>

                {/* <!-- Phone prompt --> */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control form-control-sm"
                      placeholder="Phone"
                      required
                      onChange={phoneAddChangeHandler}
                      value={addEnteredPhone}
                    ></input>
                  </div>
                </div>

                {/* <!-- Select Type of user --> */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <select
                      className="form-select form-select-sm"
                      aria-label="Job Assigned"
                      onChange={userAddChangeHandler}
                      value={addEnteredUser}
                    >
                      <option value={"DEFAULT"} disabled>
                        Select User Type
                      </option>
                      <option value="User">User</option>
                      <option value="Administrator">Administrator</option>
                      <option value="SystemAdmin">SystemAdmin</option>
                      
                    </select>
                  </div>
                </div>
                
                <div className="col-md-4 mb-3">
                  <Button variant="secondary" onClick={handleAddClose}>
                    Cancel
                  </Button>
                </div>

                <div className="col-md-4 mb-3">
                  <Button type="submit" variant="primary" onClick={handleAddClose}>
                    Add user
                  </Button>
                </div>
                
              </form>
        </Modal.Body>
      </Modal>

      {/* Update User Modal */}
      <Modal show={showUpdate} onHide={handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form
                onSubmit={submitHandler}
                className="row g-3 align-items-center justify-content-center"
              >
                {/* <!-- ID prompt --> */}
                <div className="col-md-2">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="User ID"
                      disabled
                      onChange={idChangeHandler}
                      value={enteredId}
                    ></input>
                  </div>
                </div>

                {/* <!-- First name prompt --> */}
                <div className="col-md-5">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="First Name"
                      required
                      onChange={fNameChangeHandler}
                      value={enteredFName}
                    ></input>
                  </div>
                </div>

                {/* <!-- Last name prompt --> */}
                <div className="col-md-5">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Last Name"
                      required
                      onChange={lNameChangeHandler}
                      value={enteredLName}
                    ></input>
                  </div>
                </div>

                {/* <!-- Email prompt --> */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Email ID"
                      required
                      onChange={emailChangeHandler}
                      value={enteredEmail}
                    ></input>
                  </div>
                </div>

                {/* <!-- Phone prompt --> */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control form-control-sm"
                      placeholder="Phone"
                      required
                      onChange={phoneChangeHandler}
                      value={enteredPhone}
                    ></input>
                  </div>
                </div>

                {/* <!-- Select Type of user --> */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <select
                      className="form-select form-select-sm"
                      aria-label="Job Assigned"
                      onChange={userChangeHandler}
                      value={enteredUser}
                    >
                      <option value={"DEFAULT"} disabled>
                        Select User Type
                      </option>
                      <option value="User">User</option>
                      <option value="Administrator">Administrator</option>
                      <option value="SystemAdmin">SystemAdmin</option>
                    </select>
                  </div>
                </div>
                
                <div className="col-md-4 mb-3">
                  <Button variant="secondary" onClick={handleUpdateClose}>
                    Close
                  </Button>
                </div>

                <div className="col-md-4 mb-3">
                  <Button type="submit" variant="primary" onClick={handleUpdateClose}>
                    Save Changes
                  </Button>
                </div>
                
              </form>
        </Modal.Body>
      </Modal>

      {/* Delete User Modal */}
      <Modal show={showDelete} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form
                onSubmit={submitDeleteHandler}
                className="row g-3 align-items-center justify-content-center"
              >
                {/* <!-- ID prompt --> */}
                <div className="col-md-2">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="User ID"
                      required
                      onChange={idDeleteChangeHandler}
                      value={deleteId}
                    ></input>
                  </div>
                </div>
                
                <div className="col-md-4 mb-3">
                  <Button variant="secondary" onClick={handleDeleteClose}>
                    Close
                  </Button>
                </div>

                <div className="col-md-4 mb-3">
                  <Button type="submit" variant="primary" onClick={handleDeleteClose}>
                    Delete User
                  </Button>
                </div>
                
              </form>
        </Modal.Body>
      </Modal>

      {/* Item By User Modal */}
      <Modal contentClassName="my-modal" show={showItemByUser} onHide={handleItemByUserClose}>
        <Modal.Header closeButton>
          <Modal.Title>Items by User</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="container">
            <div className="row justify-content-center align-items-center">
              {/* <!-- Items List Data --> */}
              <div className="col-md-12 mt-3">
                <div className="card shadow-sm border-0 mb-3">
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

                    {props.itemsByUser && props.itemsByUser.map((item) => (
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

      {/* Trading Modal */}
      <Modal show={showTrading} onHide={handleTradingClose}>
        <Modal.Header closeButton>
          <Modal.Title>Trading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form
          onSubmit={submitTradingHandler}
          className="row g-3 align-items-center justify-content-center">

          {/* <!-- Item ID --> */}
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="num"
                className="form-control form-control-sm"
                placeholder="Item ID"
                required
                onChange={itemIdHandler}
                value={itemId}
              ></input>
            </div>
          </div>

          {/* <!-- Quantity --> */}
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="num"
                className="form-control form-control-sm"
                placeholder="Quantity"
                required
                onChange={qtyChangeHandler}
                value={qty}
              ></input>
            </div>
          </div>

          {/* <!-- New User ID --> */}
          <div className="col-md-4">
            <div className="mb-3">
              <input
                type="num"
                className="form-control form-control-sm"
                placeholder="New User ID"
                required
                onChange={newUserChangeHandler}
                value={newUser}
              ></input>
            </div>
          </div>
          
          <div className="col-md-4 mb-3">
            <Button variant="secondary" onClick={handleTradingClose}>
              Cancel
            </Button>
          </div>

          <div className="col-md-4 mb-3">
            <Button type="submit" variant="primary" onClick={handleTradingClose}>
              Trade
            </Button>
          </div>
          
        </form>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default UsersList;
