import React from 'react';
import './auth.styles.scss';
import Signin from '../../components/sign-in-component/sign-in.component'

const authPage = ()=>{

    return(
        <div className="auth-page">
            <h1>Please login</h1>
            <Signin></Signin>
        </div>
    )
}

export default authPage;