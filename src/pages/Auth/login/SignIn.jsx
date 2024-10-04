import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGoogle as faGoogleBrand } from "@fortawesome/free-brands-svg-icons";
import "./Signin.css";

const SignIn = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "transparent" }}>
      <div className="row vh-100">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2 className="text-center mt-4">Welcome Back!</h2>

            <form>
              <div className="text-center my-3">
                <button className="btn btn-light btn-block shadow-sm">
                  <FontAwesomeIcon icon={faGoogleBrand} className="me-2" />
                  Sign in with Google
                </button>
              </div>
              <p className="text-center">Or</p>
            </form>
            <form>
              <div className="form-group mb-3">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>

              <div className="form-group mb-3">
                <label>Password</label>
                <div className="input-group">
                  <input type="password" className="form-control" />
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    style={{ accentColor: "#E86924" }}
                  />
                  <label htmlFor="rememberMe" className="ms-2">
                    Remember Me
                  </label>
                </div>

                <Link to="/forget-password" style={{ color: "#091F46" }}>
                  Forgot your password?
                </Link>
              </div>

              <button type="submit" className="update-button">
                Sign In
              </button>

              <p className="d-flex justify-content-between mt-3 mb-4">
                <span>Don't have an account?</span>
                <Link to="/sign-up" style={{ color: "#091F46" }}>
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="col-lg-6 d-none d-lg-block p-0">
          <div className="signin-image">
            <div className="overlay">
              <h2 style={{ textAlign: "left", color: "white" }}>
                Invest with us
              </h2>
              <p style={{ textAlign: "left", color: "white" }}>
                You should use all caps for the name of each character you
                introduce. You then include their age and some information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
