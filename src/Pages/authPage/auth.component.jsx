import React from 'react';
import './auth.styles.scss';
import Signin from '../../components/sign-in-component/sign-in.component';
import SignUp from '../../components/sign-up-component/sign-up.component'

const authPage = () => (

    <div className="auth-page">
        <div className="sign-in">
            <Signin/>
        </div>
        <div className="sign-up">
            <SignUp/>
        </div>
    </div>

)

export default authPage;