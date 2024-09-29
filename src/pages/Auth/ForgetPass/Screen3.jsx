import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "../../../styles/Screen1.css";

const PasswordReset = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate("/forget-password3");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h3 className="mb-3">Password reset</h3>
        <p className="text-muted mb-4">
          Your password has been successfully reset. <br />
          Click confirm to set a new password.
        </p>

        <button
          className="btn btn-primary btn-block"
          style={{
            backgroundColor: "#E86924",
            borderColor: "#E86924",
            fontFamily: "Open Sans",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "8px",
            padding: "10px 20px",
          }}
          onClick={handleConfirmClick}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PasswordReset;
