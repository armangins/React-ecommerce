import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import { signUpStart } from "../../redux/user/user-action";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {

  const [userData, setData] = useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
  });

  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords didn't match");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({ ...userData, [name]: value });
  };

  return (
    <div className="signUp">
      <h1>I don't have an account</h1>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
          label="display name"
          required
        />

        <FormInput
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          label="email"
          required
        />

        <FormInput
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          label="password"
          required
        />

        <FormInput
          onChange={handleChange}
          type="passowrd"
          name="confirmPassword"
          value={confirmPassword}
          label="confrim password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (userData) => dispatch(signUpStart(userData)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
