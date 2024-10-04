import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Screen4.css";

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
          security.
        </p>

        <form>
          <div className="mb-3">
            <label htmlFor="password" className="form-label password-label">
              Password
            </label>
            <input
              type="password"
              className="form-control password-input"
              id="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label password-label"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control password-input"
              id="confirmPassword"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn  btn-block update-button"
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
