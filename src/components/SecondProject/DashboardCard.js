import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

//Contains the graphical components in html
const DashboardCard = (props) => {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault(); //avoids reloading the page when submitting
    //validation logic
    if((isNaN(+username)) & (!isNaN(+age)) & (+age>0))
    {
      props.onAddUser(username,age);//call the onAddUser() function that receives two fields as arguments
    }
    else
    {
      setError({
        errorTitle: "Invalid Input",
        errorMessage: "Check the data input, please enter a name and a valid age"
      });
      console.log("Error in data type")
    }
    

    //setForm(event.target.value)
  };

  const UsernameChangeHandler = (event) => {
    setUsername(event.target.value);//asigns the input to the variable setUsername
  };

  const AgeChangeHandler = (event) => {
    setAge(event.target.value);//asigns the input to the variable setAge
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    
    <div>
      {error && <ErrorModal onConfirm={errorHandler} errorTitle={error.errorTitle} errorMessage={error.errorMessage}/>}
      
      
      <div className="container">

        <div className="row justify-content-center align-items-center">

          <div className="col-md-8">

            <div className="card shadow-lg mt-5">
              {/* Header */}
              <div className="card-header text-bg-dark">Add New User</div>

              {/* Card Body */}
              <div className="card-body">

                <form 
                  className="row g-3 align-items-center justify-content-center"
                  onSubmit={AddUserHandler}>

                  {/* <!-- Username prompt --> */}
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="Username">Username</label>
                      <input
                        type="text"
                        className="form-control form-control-sm mt-2"
                        placeholder="Username"
                        id="Username"
                        onChange={UsernameChangeHandler}
                        value={username}
                        required
                      ></input>
                    </div>
                  </div>

                  {/* <!-- Age prompt --> */}
                  <div className="col-md-12 ">
                    <div className="mb-3">
                      <label htmlFor="Age">Age (Years)</label>
                      <input
                        type="num"
                        className="form-control form-control-sm mt-2"
                        placeholder="Age"
                        id="Age"
                        onChange={AgeChangeHandler}
                        value={age}
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="card-footer">
                    {/* <!-- Submit data --> */}
                    <div className="col-md-2">
                      <div className="d-grid">
                        <button type="submit" className="btn btn-sm btn-primary">
                          Add User
                        </button>
                      </div>
                    </div>
                  </div>

                  

                </form>

              </div>


            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default DashboardCard;
