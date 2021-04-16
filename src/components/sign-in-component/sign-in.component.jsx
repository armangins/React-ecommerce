import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custome-button/custom-button.component';
import {SignInWithGoogle }from '../../firebase/firebaseConfig';
import './sign-in.styles.scss'

class Signin extends React.Component{

    constructor(props){

        super(props);

        this.state=({
            email:'',
            password:'',
        })
    }


    handleSubmit = event =>{

        event.preventDefault();
        this.setState({
            email:'',
            password:'',
        })
        console.log('was submited')
    }

    handleChange= event =>{

        const {name,value} = event.target;
        this.setState({[name]:value})

    }


    render(){
        return(
            <div className="signin">

                <form onSubmit={this.handleSubmit}> 
                    <FormInput handleChange={this.handleChange} label="email" type="email" name="email" value={this.state.email} required/>
                    <FormInput handleChange={this.handleChange} label="password"  type="email" name="password" value={this.state.password} required/>
                    <CustomButton type="submit"> Login</CustomButton>
                    <CustomButton onClick={SignInWithGoogle} > Login With Google</CustomButton>

                </form>

            </div>
        )
    }
}

export default Signin