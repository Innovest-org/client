import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/Screen1.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/forget-password1");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h3 className="mb-3">Forgot password</h3>
        <p className="text-muted mb-4">
          Please enter your email to reset the password
        </p>

        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              style={{
                fontFamily: "Open Sans",
                borderColor: "#E1E1E1",
                color: "#E1E1E1",
                textAlign: "center",
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block"
            style={{
              backgroundColor: "#E86924",
              borderColor: "#E86924",
              fontFamily: "Open Sans",
              width: "100%",
              maxWidth: "350px",
              borderRadius: "8px",
              padding: "8px 20px",
            }}
            onClick={handleClick}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
