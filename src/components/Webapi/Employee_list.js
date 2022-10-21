import React, { useState, useSyncExternalStore } from "react";

const Employee_list = () => {
  //states for modals buttons
  const [modal, setModal] = useState(false);

  const Toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      {/* <!-- Employee Dashboard --> */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Add New User */}
          <div className="col-md-8">
            <div className="card shadow-lg mt-5">
              <div className="card-header text-bg-dark">Add New User</div>
              <div className="card-body">
                <form
                  //onSubmit={submitHandler}
                  className="row g-3 align-items-center justify-content-center"
                >
                  {/* <!-- First name prompt --> */}
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="First Name"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Last name prompt --> */}
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Last Name"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Email prompt --> */}
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        placeholder="Email ID"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Phone prompt --> */}
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="tel"
                        class="form-control form-control-sm"
                        placeholder="Phone"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Select Type of user --> */}
                  <div class="col-md-4">
                    <div class="mb-3">
                      <select
                        class="form-select form-select-sm"
                        aria-label="Job Assigned"
                      >
                        <option selected>Select User Type</option>
                        <option value="User">User</option>
                        <option value="Administrator">Administrator</option>
                        <option value="SystemAdmin">SystemAdmin</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Add Date --> */}
                  <div class="col-md-4">
                    <div class="mb-3">
                      <input
                        type="date"
                        class="form-control form-control-sm"
                        value="07-25-2022"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Submit data --> */}
                  <div class="col-md-2">
                    <div class="d-grid">
                      <button type="submit" class="btn btn-sm btn-primary">
                        Add
                      </button>
                    </div>
                  </div>

                  {/* <!-- Cancel data --> */}
                  <div class="col-md-2">
                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-sm btn-danger"
                        data-bs-dismiss="modal"
                        aria-label="Cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Update User */}
          <div className="col-md-8">
            <div className="card shadow-lg mt-5">
              <div className="card-header text-bg-dark">Edit User Details</div>
              <div className="card-body">
                <form
                  //onSubmit={submitHandler}
                  className="row g-3 align-items-center justify-content-center"
                >
                  {/* <!-- ID prompt --> */}
                  <div class="col-md-12">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="User ID"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- First name prompt --> */}
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="First Name"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Last name prompt --> */}
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Last Name"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Email prompt --> */}
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        placeholder="Email ID"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Phone prompt --> */}
                  <div class="col-md-6">
                    <div class="mb-3">
                      <input
                        type="tel"
                        class="form-control form-control-sm"
                        placeholder="Phone"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Select Type of user --> */}
                  <div class="col-md-4">
                    <div class="mb-3">
                      <select
                        class="form-select form-select-sm"
                        aria-label="Job Assigned"
                      >
                        <option selected>Select User Type</option>
                        <option value="User">User</option>
                        <option value="Administrator">Administrator</option>
                        <option value="SystemAdmin">SystemAdmin</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Add Date --> */}
                  <div class="col-md-4">
                    <div class="mb-3">
                      <input
                        type="date"
                        class="form-control form-control-sm"
                        value="07-25-2022"
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Submit data --> */}
                  <div class="col-md-2">
                    <div class="d-grid">
                      <button type="submit" class="btn btn-sm btn-primary">
                        Update
                      </button>
                    </div>
                  </div>

                  {/* <!-- Cancel data --> */}
                  <div class="col-md-2">
                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-sm btn-danger"
                        data-bs-dismiss="modal"
                        aria-label="Cancel"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Delete User */}
          <div className="col-md-8">
            <div className="card shadow-lg mt-5">
              <div className="card-header text-bg-dark">Delete User</div>
              <div className="card-body">
                <form
                  //onSubmit={submitHandler}
                  className="row g-3 align-items-center justify-content-center"
                >
                  {/* <!-- ID prompt --> */}
                  <div class="col-md-12">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="User ID"
                        required
                      ></input>
                    </div>
                  </div>

                  <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-sm btn-primary">
                      Delete
                    </button>

                    <button
                      type="button"
                      class="btn btn-sm btn-light"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <!-- Employee Data --> */}
          <div className="col-md-8 mt-3">
            <div className="card shadow-sm border-0 mb-3">
              <div className="card-header text-bg-dark text-center">
                Employees List
              </div>
              <table className="table table-sm small table-bordered align-middle mb-0">
                {/* <!-- Table Header --> */}
                <tr>
                  <th>ID</th>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Email</th>
                  <th>Details</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>

                {/* <!-- Table Body --> */}

                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>David</td>
                  <td>0</td>
                  <td>email1@email.com</td>
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_detail"
                      >
                        Details
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_edit"
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
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_delete"
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
                </tr>

                <tr>
                  <td>2</td>
                  <td>2</td>
                  <td>Guillermo</td>
                  <td>2</td>
                  <td>email2@email.com</td>
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_detail"
                      >
                        Details
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_edit"
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
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_delete"
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
                </tr>

                <tr>
                  <td>3</td>
                  <td>3</td>
                  <td>Daniel</td>
                  <td>2</td>
                  <td>email3@email.com</td>
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_detail"
                      >
                        Details
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_edit"
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
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_delete"
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
                </tr>

                <tr>
                  <td>4</td>
                  <td>4</td>
                  <td>Oscar</td>
                  <td>2</td>
                  <td>email4@email.com</td>
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_detail"
                      >
                        Details
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_edit"
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
                  <td>
                    <div className="d-grid">
                      <a
                        href="#"
                        className="btn btn-sm btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#employee_delete"
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
                </tr>
              </table>
            </div>
          </div>
          {/* <!-- Employee Data --> */}
        </div>
      </div>

      {/* <!-- Add Employee Data --> */}
      <div
        className="modal fade"
        id="add_employee"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        //style="backdrop-filter: blur(5px);"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-bg-dark">
              <h5 className="model-title">Add Employee Details</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => Toggle()}
              ></button>
            </div>

            {/* <!-- Adding data format --> */}

            <div className="modal-body">
              <form>
                <div className="container">
                  <div className="row gx-3">
                    {/* <!-- Beginning of the add data form --> */}
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="date"
                          className="form-control form-control-sm"
                          required
                        ></input>
                      </div>
                    </div>

                    {/* <!-- First name prompt --> */}
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="First Name"
                          required
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
                        ></input>
                      </div>
                    </div>

                    {/* <!-- Select Type of user --> */}
                    <div className="col-md-8">
                      <div className="mb-3">
                        <select
                          className="form-select form-select-sm"
                          aria-label="Job Assigned"
                        >
                          <option>Select a Job for the employee</option>
                          <option value="User">User</option>
                          <option value="Administrator">Administrator</option>
                          <option value="SystemAdmin">SystemAdmin</option>
                        </select>
                      </div>
                    </div>

                    {/* <!-- Submit data --> */}
                    <div className="col-md-2">
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                        >
                          Add
                        </button>
                      </div>
                    </div>

                    {/* <!-- Cancel data -->  */}
                    <div className="col-md-2">
                      <div className="d-grid">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          data-bs-dismiss="modal"
                          aria-label="Cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Add Employee Data --> */}

      {/* <!-- Details Employee --> */}
      <div
        className="modal fade"
        id="employee_detail"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        //style="backdrop-filter: blur(5px);"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-bg-dark">
              <h5 className="model-title">Employee Details</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* <!-- Consulting data table --> */}
            <div className="modal-body p-0">
              <table className="table table-bordered small mb-0">
                <tbody>
                  <tr>
                    <th className="w-50">ID</th>
                    <td>1</td>
                  </tr>

                  <tr>
                    <th>Employee ID</th>
                    <td>741</td>
                  </tr>

                  <tr>
                    <th>First Name</th>
                    <td>Auflauf</td>
                  </tr>

                  <tr>
                    <th>Last Name</th>
                    <td>Auflauf</td>
                  </tr>

                  <tr>
                    <th>Type</th>
                    <td>0</td>
                  </tr>

                  <tr>
                    <th>Email</th>
                    <td>email@email.com</td>
                  </tr>

                  <tr>
                    <th>Phone</th>
                    <td>458574565</td>
                  </tr>

                  <tr>
                    <th>Joining Data</th>
                    <td>25/06/2022</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="modal-footer">
              <a
                href="#"
                className="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#employee_edit"
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
                Edit Details
              </a>

              <a
                href="#"
                className="btn btn-sm btn-danger"
                data-bs-toggle="modal"
                aria-label="Close"
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
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Details Employee --> */}

      {/* <!-- Edit Employee --> */}
      <div
        className="modal fade"
        id="employee_edit"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        //style="backdrop-filter: blur(5px);"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-bg-dark">
              <h5 className="model-title">Edit Employee Details</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* <!-- Adding data format --> */}
            <div className="modal-body">
              <form>
                <div className="container">
                  <div className="row gx-3">
                    {/* <!-- Beginning of the add data form --> */}
                    <div className="col-md-12">
                      <div className="mb-3">
                        <input
                          type="date"
                          className="form-control form-control-sm"
                          value="07-25-2022"
                          required
                        ></input>
                      </div>
                    </div>

                    {/* <!-- First name prompt --> */}
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="First Name"
                          value="David"
                          required
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
                          value="Fuentes"
                          required
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
                          value="email1@email.com"
                          required
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
                          value="4428759987"
                          required
                        ></input>
                      </div>
                    </div>

                    {/* <!-- Select Type of user --> */}
                    <div className="col-md-8">
                      <div className="mb-3">
                        <select
                          className="form-select form-select-sm"
                          aria-label="Job Assigned"
                        >
                          <option>Select a Job for the employee</option>
                          <option value="User">User</option>
                          <option value="Administrator">Administrator</option>
                          <option value="SystemAdmin">SystemAdmin</option>
                        </select>
                      </div>
                    </div>

                    {/* <!-- Submit data --> */}
                    <div className="col-md-2">
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                        >
                          Update
                        </button>
                      </div>
                    </div>

                    {/* <!-- Cancel data --> */}
                    <div className="col-md-2">
                      <div className="d-grid">
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          data-bs-dismiss="modal"
                          aria-label="Cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Edit Employee --> */}

      {/* <!-- Delete Employee --> */}
      <div
        className="modal fade"
        id="employee_delete"
        data-bs-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        //style="backdrop-filter: blur(5px);"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* <!-- Consulting data table --> */}
            <div className="modal-body bg-dark text-white text-center d-flex justify-content-between align-items-center">
              <h4 className="fw-light m-0">
                Do you want to delete{" "}
                <strong>
                  <q>David Fuentes</q>
                </strong>
                ?
              </h4>
              <button
                type="button"
                className=" btn btn-close ms-auto bg-light btn-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-footer d-flex justify-content-center">
              <button type="button" className="btn btn-sm btn-primary">
                Delete
              </button>

              <button
                type="button"
                className="btn btn-sm btn-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Delete Employee --> */}
    </div>
  );
};

export default Employee_list;
