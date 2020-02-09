import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../../context/alert/alertContext";
import AuthContext from "../../../context/auth/authContext";

const Register = props => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const authContext = useContext(AuthContext);

  const { registerUser, clearErrors, error, isAuthenticated } = authContext;

  useEffect(() => {
    // if authenicated, redirect to home page
    if (isAuthenticated) {
      props.history.push("/");
    }

    // check for errors
    if (error === "User already exists") {
      setAlert(error, "danger");
      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      setTimeout(() => clearErrors(), 3000);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props]);

  const { name, email, password, confirmPassword } = user;

  const handleOnChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleOnSubmit = e => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all the fields", "danger");
    } else if (password !== confirmPassword) {
      setAlert("Password and Confirm password do not match", "danger");
    } else {
      registerUser({
        name,
        email,
        password
      });
      console.log("Registration successful");
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleOnChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
