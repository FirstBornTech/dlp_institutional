import './SignIn.scss'
import SignInContainer from '../components/SignInContainer';
import { useState } from 'react';

const SignIn = ({type="default"}) =>{
    const signInPageClassName = 'sign-in-'+type;
    const [signInPage, setSignInPage] = useState(true);

    return(
        <div className={signInPageClassName}>
            <SignInContainer signInPage={signInPage} changePage={()=>setSignInPage(!signInPage)}/>
        </div>
    )
}

export default SignIn;