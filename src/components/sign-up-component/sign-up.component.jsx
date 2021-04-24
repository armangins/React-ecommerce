import React from 'react';
import CustomButton from '../custome-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, createUserDoc } from '../../firebase/firebaseConfig';
import './sign-up.styles.scss';


class SignUp extends React.Component {

    constructor() {
        super();

        this.state = ({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }

handleSubmit = async event=>{

    const { displayName , email, password , confirmPassword} = this.state;

    event.preventDefault();

    if(password != confirmPassword){
        alert("passwords didn't match");
        return;
    }

    try {

        const { user } = await auth.createUserWithEmailAndPassword(emai,password);
        
    } catch (error) {
        
    }
     

}


    render() {

        const { displayName , email, password , confirmPassword} = this.state;

        return(
            <div className="signUp">
                <h1>I dont have an account</h1>
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
       <CustomButton type="submit">
Sign Up
       </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp