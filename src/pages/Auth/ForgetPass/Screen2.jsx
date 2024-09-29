import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // استيراد useNavigate و Link
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/Screen1.css";

const VerifyEmail = () => {
  const [code, setCode] = useState(new Array(5).fill(""));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (element.value.match(/[0-9]/)) {
      const newCode = [...code];
      newCode[index] = element.value;
      setCode(newCode);

      if (element.nextSibling && element.value !== "") {
        element.nextSibling.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = code.join("");
    console.log("Entered Code:", enteredCode);

    if (enteredCode.length === 5) {
      navigate("/forget-password2");
    } else {
      alert("Please enter a valid 5-digit code.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h3 className="mb-3">Check your email</h3>
        <p className="text-muted mb-4">
          We sent a reset link to alpha...@gmail.com <br />
          Enter the 5-digit code mentioned in the email
        </p>

        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center mb-3">
            {code.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="form-control mx-1"
                value={value}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                style={{
                  width: "50px",
                  height: "50px",
                  fontSize: "24px",
                  textAlign: "center",
                  borderColor: "#E1E1E1",
                  fontFamily: "Open Sans",
                }}
              />
            ))}
          </div>

          <button
            type="submit"
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
          >
            Verify Code
          </button>
        </form>

        <p className="mt-3">
          Haven't got the email yet?{" "}
          <Link to="/resend" className="text-primary">
            Resend email
          </Link>{" "}
          {/* استبدال a بـ Link */}
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
