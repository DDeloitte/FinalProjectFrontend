import UsersItem from "./UsersItem";

import React from "react";

const UsersList = (props) => {

  return (

    <div className="container">
      <div className="row justify-content-center align-items-center">
        {/* <!-- Employee Data --> */}
        <div className="col-md-8 mt-3">
          <div className="card shadow-sm border-0 mb-3">
            <div className="card-header text-bg-dark text-center">Employees List</div>
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
                  <th>Date</th>
                </tr>
              </thead>

              {props.items.map((user, myKey) => (
              <tbody key={myKey}>
                <tr>
                  <td>{props.id}</td>
                  <td>{props.fname}</td>
                  <td>{props.lname}</td>
                  <td>{props.email}</td>
                  <td>{props.phone}</td>
                  <td>{props.user}</td>
                  {/* <td>{props.date}</td> */}
                </tr>
              </tbody>
              // <UsersItem 
              //   key={user.key}
              //   fname={user.fName}
              //   lname={user.lName}
              //   email={user.email}
              //   phone={user.phone}
              //   user={user.user}
              //   date={user.date}
              // />
              ))}


            </table>
          </div>
        </div>

        
        {/* <!-- Employee Data --> */}
        
      </div>
    </div>

  );

};

export default UsersList;