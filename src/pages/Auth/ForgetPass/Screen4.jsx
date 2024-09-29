import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/Screen1.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      navigate("/forget-password4");
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center" style={{ maxWidth: "350px", width: "100%" }}>
        <h3 className="mb-3">Set a new password</h3>
        <p className="text-muted mb-4">
          Create a new password. Ensure it differs from previous ones for
          security
        </p>

        <form>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label"
              style={{
                fontFamily: "Open Sans",
                fontWeight: "bold",
                color: "#343A40",
              }} // لون أغمق
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                fontFamily: "Open Sans",
                borderColor: "#E1E1E1",
                color: "#6C757D",
                textAlign: "center",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label"
              style={{
                fontFamily: "Open Sans",
                fontWeight: "bold",
                color: "#343A40",
              }} // لون أغمق
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                fontFamily: "Open Sans",
                borderColor: "#E1E1E1",
                color: "#6C757D",
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
              borderRadius: "8px",
              padding: "10px 20px",
            }}
            onClick={handleClick}
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
