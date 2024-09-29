import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGoogle as faGoogleBrand } from "@fortawesome/free-brands-svg-icons";
import "../../styles/Signup.css";

const SignUp = () => {
  return (
    <div
      className="container-fluid "
      style={{ backgroundColor: "transparent" }}
    >
      <div className="row vh-100">
        <div className="col-lg-6 d-flex align-items-center justify-content-center mt-5 ">
          <div className="w-75">
            <h2 className="text-center">Welcome</h2>

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
                <label>Username</label>
                <input type="text" className="form-control" />
              </div>

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

              <div className="form-group mb-3">
                <label>Confirm Password</label>
                <div className="input-group">
                  <input type="password" className="form-control" />
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                </div>
              </div>
              <div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="entrepreneur"
                    name="userType"
                    style={{ accentColor: "#E86924" }}
                  />
                  <label htmlFor="entrepreneur" className="ms-2">
                    Entrepreneur
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    id="investor"
                    name="userType"
                    style={{ accentColor: "#E86924" }}
                  />
                  <label htmlFor="investor" className="ms-2">
                    Investor
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-block"
                style={{
                  backgroundColor: "#E86924",
                  color: "white",
                  width: "100%",
                  padding: "8px 12px",
                  textAlign: "center",
                  borderRadius: "20px",
                }}
              >
                Sign up
              </button>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <Link
                  style={{
                    Color: "#091F46",
                  }}
                  to="/sign-in"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="col-lg-6 d-none d-lg-block p-0">
          <div className="signup-image">
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

export default SignUp;
