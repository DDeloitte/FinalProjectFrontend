import React, { useState } from "react";

const UpdateUserForm = (props) => {
  const [enteredFName, setEnteredFName] = useState("");
  const [enteredLName, setEnteredLName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Definition of states
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
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    // assigns input to the values
    const userData = {
      fName: enteredFName,
      lName: enteredLName,
      email: enteredEmail,
      phone: enteredPhone,
      user: enteredUser,
      date: new Date(enteredDate),
    };

    //Exports the input data
    props.onUpdateUser(userData);

    // Sets the default values, deletes previous input
    setEnteredFName("");
    setEnteredLName("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredUser("");
    setEnteredDate("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {/* Update User */}
        <div className="col-md-8">
          <div className="card shadow-lg mt-5">
            <div className="card-header text-bg-dark">Edit User Details</div>
            <div className="card-body">
              <form
                onSubmit={submitHandler}
                className="row g-3 align-items-center justify-content-center"
              >
                {/* <!-- ID prompt --> */}
                <div className="col-md-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="User ID"
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
                      onChange={fNameChangeHandler}
                      value={enteredFName}
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
                      defaultValue={'DEFAULT'}
                    >
                      <option value={"DEFAULT"} disabled>Select User Type</option>
                      <option value="User">User</option>
                      <option value="Administrator">Administrator</option>
                      <option value="SystemAdmin">SystemAdmin</option>
                    </select>
                  </div>
                </div>

                {/* <!-- Add Date --> */}
                <div className="col-md-4">
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      required
                      onChange={dateChangeHandler}
                      value={enteredDate}
                    ></input>
                  </div>
                </div>

                {/* <!-- Submit data --> */}
                <div className="col-md-2">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-sm btn-primary">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserForm;

// <div className="container">
//   <div className="row justify-content-center align-items-center">
//     {/* Add New User */}
//     <div className="col-md-8">
//       <div className="card shadow-lg mt-5">
//         <div className="card-header text-bg-dark">Add New User</div>
//         <div className="card-body">
//           <form
//             onSubmit={submitHandler}
//             className="row g-3 align-items-center justify-content-center"
//           >
//             {/* <!-- First name prompt --> */}
//             <div className="col-md-6">
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   placeholder="First Name"
//                   required
//                   onChange={fNameChangeHandler}
//                   value={enteredFName}
//                 ></input>
//               </div>
//             </div>

//             {/* <!-- Last name prompt --> */}
//             <div className="col-md-6">
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control form-control-sm"
//                   placeholder="Last Name"
//                   required
//                   onChange={lNameChangeHandler}
//                   value={enteredLName}
//                 ></input>
//               </div>
//             </div>

//             {/* <!-- Email prompt --> */}
//             <div className="col-md-6">
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control form-control-sm"
//                   placeholder="Email ID"
//                   required
//                   onChange={emailChangeHandler}
//                   value={enteredEmail}
//                 ></input>
//               </div>
//             </div>

//             {/* <!-- Phone prompt --> */}
//             <div className="col-md-6">
//               <div className="mb-3">
//                 <input
//                   type="tel"
//                   className="form-control form-control-sm"
//                   placeholder="Phone"
//                   required
//                   onChange={phoneChangeHandler}
//                   value={enteredPhone}
//                 ></input>
//               </div>
//             </div>

//             {/* <!-- Select Type of user --> */}
//             <div className="col-md-4">
//               <div className="mb-3">
//                 <select
//                   className="form-select form-select-sm"
//                   aria-label="Job Assigned"
//                 >
//                   <option selected>Select User Type</option>
//                   <option value="User">User</option>
//                   <option value="Administrator">Administrator</option>
//                   <option value="SystemAdmin">SystemAdmin</option>
//                 </select>
//               </div>
//             </div>

//             {/* <!-- Add Date --> */}
//             <div className="col-md-4">
//               <div className="mb-3">
//                 <input
//                   type="date"
//                   className="form-control form-control-sm"
//                   onChange={dateChangeHandler}
//                   value={enteredDate}
//                   required
//                 ></input>
//               </div>
//             </div>

//             {/* <!-- Submit data --> */}
//             <div className="col-md-2">
//               <div className="d-grid">
//                 <button type="submit" className="btn btn-sm btn-primary">
//                   Add
//                 </button>
//               </div>
//             </div>

//             {/* <!-- Cancel data --> */}
//             <div className="col-md-2">
//               <div className="d-grid">
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-danger"
//                   data-bs-dismiss="modal"
//                   aria-label="Cancel"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
