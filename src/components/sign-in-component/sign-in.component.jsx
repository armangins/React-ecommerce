import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, } from "../../firebase/firebaseConfig";
import { googleSignInStart  } from '../../redux/user/user-action';
import "./sign-in.styles.scss";
import { connect } from "react-redux";


// Has a state to manage the form
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  // method to handle the form submition
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("there was an error");
    }

    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {  googleSignInStart } = this.props;
    return (
      <div className="signin">
        <h1>Please login</h1>
        <span>signin into your account</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            type="email"
            name="email"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            type="password"
            name="password"
            required
          />

          <div className="signin-btns">
            <CustomButton type="submit"> Login</CustomButton>
            <CustomButton type='button' googleSignIn onClick={ googleSignInStart }>
              {" "}
              Login With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps =dispatch => ({
  googleSignInStart:()=>dispatch( googleSignInStart())
})

export default connect(null,mapDispatchToProps)(SignIn);
