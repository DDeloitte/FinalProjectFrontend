import React from "react";

const ErrorModal = (props) => {

  return (
      
    <div className="container">

      <div className="row justify-content-center align-items-center">

        <div className="col-md-8">

          <div className="card shadow-lg mt-5">
            {/* Header */}
            <div className="card-header text-bg-dark"><h2>{props.errorTitle}</h2></div>

            {/* Card Body */}
            <div className="card-body">

              <p>{props.errorMessage}</p>

            </div>

            {/* <!-- Card Footer --> */}
            <div className="card-footer">
              <div class="col-md-2">
                <div class="d-grid">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Cancel"
                    onClick={props.onConfirm}
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ErrorModal;
