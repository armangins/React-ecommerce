import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserDoc } from "../../firebase/firebaseConfig";
import "./sign-up.styles.scss";
import { signUpStart } from "../../redux/user/user-action";
import { connect } from "react-redux";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {

    const { displayName, email, password, confirmPassword } = this.state;
    const  {signUpStart} = this.props

    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords didn't match");
      return;
    }

    signUpStart({email,password,displayName})

  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="signUp">
        <h1>I don't have an account</h1>
        <span>Sign up with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            type="text"
            name="displayName"
            value={displayName}
            label="display name"
            required
          />

          <FormInput
            onChange={this.handleChange}
            type="email"
            name="email"
            value={email}
            label="email"
            required
          />

          <FormInput
            onChange={this.handleChange}
            type="password"
            name="password"
            value={password}
            label="password"
            required
          />

          <FormInput
            onChange={this.handleChange}
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
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    signUpStart: userData => dispatch(signUpStart(userData))
  }

}

export default connect(null,mapDispatchToProps)(SignUp);
