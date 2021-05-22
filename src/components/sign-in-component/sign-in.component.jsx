import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebaseConfig';
import './sign-in.styles.scss'


// Has a state to manage the form 
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            email: '',
            password: '',
        })
    }

// method to handle the form submition
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });

        } catch (error) {
            console.log('there was an error');
        }

        event.preventDefault();
        this.setState({
            email: '',
            password: '',
        })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="signin">
                <h1>Please login</h1>
                <form onSubmit={this.handleSubmit}>

                    <FormInput handleChange={this.handleChange} 
                    value={this.state.email}
                    label="email"
                    type="email"
                    name="email"
                    required 
                    />

                    <FormInput handleChange={this.handleChange}
                    value={this.state.password}
                    label="password"
                    type="password"
                    name="password"
                    required
                     />

                    <CustomButton type="submit"> Login</CustomButton>
                    <CustomButton className="g-button"
                     onClick={SignInWithGoogle} > Login With Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn