import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { emailSignInStart, googleSignInStart } from '../../redux/user/user-action';
import "./sign-in.styles.scss";
import { connect } from "react-redux";



const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [userData, setUserData] = useState({ email: '', password: '', })
  const { email, password } = userData;
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userData;
    emailSignInStart(email, password)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };



  return (
    <div className="signin">
      <h1>Please login</h1>
      <span>signin into your account</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          value={email}
          label="email"
          type="email"
          name="email"
          required
        />

        <FormInput
          handleChange={handleChange}
          value={password}
          label="password"
          type="password"
          name="password"
          required
        />

        <div className="signin-btns">
          <CustomButton type="submit"> Login</CustomButton>
          <CustomButton type='button' googleSignIn onClick={googleSignInStart}>
            {" "}
            Login With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
