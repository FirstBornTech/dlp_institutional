import './SignIn.scss'
import SignInContainer from '../components/SignInContainer';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import AppButton from '../components/AppButton';
const SignIn = ({ type = "default" }) => {
    const signInPageClassName = 'sign-in-' + type;
    const [signInPage, setSignInPage] = useState(true);

    return (
        <div className={signInPageClassName}>
            <SignInContainer signInPage={signInPage} changePage={() => setSignInPage(!signInPage)}>
                {signInPage &&
                    <Form className={signInPageClassName + '-form'}>
                        <div className={signInPageClassName + '-header'}>Sign In</div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className={signInPageClassName + '-input'} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className={signInPageClassName + '-input'} type="password" placeholder="Password" />
                        </Form.Group>
                        <AppButton label='LOGIN' />
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