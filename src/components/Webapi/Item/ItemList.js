import React from "react";

const ItemList = (props) => {

  return (

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* <!-- Items List Data --> */}
          <div className="col-md-10 mt-3">
            <div className="card shadow-sm border-0 mb-3">
              {/* <!-- Card Header --> */}
              <div className="card-header text-bg-dark text-center">
                <h5 className="card-header d-flex justify-content-between align-items-center">

                  Items List

                </h5>
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

                {props.items && props.items.map((item) => (
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


  );
};

export default ItemList;