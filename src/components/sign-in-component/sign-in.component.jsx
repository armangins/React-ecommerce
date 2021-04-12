import React from 'react';

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
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} type="email" name="email" value={this.state.email} required/>

                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange}  type="email" name="password" value={this.state.password} required/>

                    <input type="submit" name="login"/>
                </form>

            </div>
        )
    }
}

export default Signin