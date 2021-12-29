import './SignIn.scss'
import SignInContainer from '../components/SignInContainer';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import AppButton from '../components/AppButton';
import { getUserDetail } from '../services/api.services';

const SignIn = ({ type = "default" ,signInSuccess}) => {
    const signInPageClassName = 'sign-in-' + type;
    const [signInPage, setSignInPage] = useState(true);
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (event) =>{
        setError('')
        setEmailId(event.target.value)
    }

    const handlePasswordChange = (event) =>{
        setError('')
        setPassword(event.target.value)
    }

    const handleSignIn = async() => {
        const userDetail = await getUserDetail();
        if(emailId === userDetail.emailId && password === userDetail.password)
            signInSuccess(true)
        else{
            if(emailId === '' || password === '')
                setError('Please fill all the details.')
            else 
                setError('User Not Found!')
        }
            
    }

    return (
        <div className={signInPageClassName}>
            <SignInContainer signInPage={signInPage} changePage={() => setSignInPage(!signInPage)}>
                {signInPage &&
                    <Form className={signInPageClassName + '-form'}>
                        <div className={signInPageClassName + '-header'}>Sign In</div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className={signInPageClassName + '-input'} type="email" placeholder="Enter email" onChange={(e)=>handleEmailChange(e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className={signInPageClassName + '-input'} type="password" placeholder="Password" onChange={(e)=>handlePasswordChange(e)}/>
                        </Form.Group>
                        {error!=='' && <div className={signInPageClassName + '-error'}>{error}</div>}
                        <AppButton label='LOGIN' onClick={()=>handleSignIn()}/>
                    </Form>
                }
                {!signInPage &&
                    <Form className={signInPageClassName + '-form'}>
                        <div className={signInPageClassName + '-header'}>Sign Up</div>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control className={signInPageClassName + '-input'} type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className={signInPageClassName + '-input'} type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className={signInPageClassName + '-input'} type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className={signInPageClassName + '-input'} type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <AppButton label='SIGN UP' />
                    </Form>
                }
            </SignInContainer>
        </div>
    )
}

export default SignIn;