import React from "react";

const GetByIdForm = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {/* <!-- Employee Data --> */}
        <div className="col-md-10 mt-3">
          <div className="card shadow-sm border-0 mb-3">
            <div className="card-header text-bg-dark text-center">
              Get By ID Employee 
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
                </tr>
              </thead>

              {/* {props.items.map(user => 
                <tbody key={user.id}>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.fName}</td>
                    <td>{user.lName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.user}</td>
                  </tr>
                </tbody>
              )} */}
            </table>
          </div>
        </div>

        {/* <!-- Employee Data --> */}
      </div>
    </div>
  );
};

export default GetByIdForm;
