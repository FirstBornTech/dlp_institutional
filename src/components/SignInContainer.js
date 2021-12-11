import './SignInContainer.scss';
import AppButton from './AppButton';
import SignInDesignImage from '../images/SignInPageDesign3.png';
import SignUpDesignImage from '../images/SignInPageDesign2.png';
import { signInPageHeader, signInPageDescription, signUpPageHeader, signUpPageDescription } from '../config';


const SignInContainer = ({ type = "default", signInPage = true, changePage, children }) => {
    const signInContainerClassName = 'sign-in-container-' + type;
    return (
        <div className={signInContainerClassName}>
            {signInPage &&
                <div className={signInContainerClassName + `-sign-in-form`}>
                    {children}
                </div>
            }
            {signInPage &&
                <div className={signInContainerClassName + `-sign-in-design`}>
                    <div className={signInContainerClassName + '-sign-in-design-header'}>
                        {signInPageHeader}
                    </div>
                    <div className={signInContainerClassName + '-sign-in-design-description'}>
                        {signInPageDescription}
                    </div>
                    <AppButton
                        className={signInContainerClassName + '-sign-in-design-button'}
                        label='SIGN UP'
                        onClick={() => changePage()} />
                    <img className={signInContainerClassName + '-sign-in-design-img'} src={SignInDesignImage} alt={'img'} />
                </div>
            }
            {!signInPage &&
                <div className={signInContainerClassName + '-sign-up-design'}>
                    <div className={signInContainerClassName + '-sign-up-design-header'}>
                        {signUpPageHeader}
                    </div>
                    <div className={signInContainerClassName + '-sign-up-design-description'}>
                        {signUpPageDescription}
                    </div>
                    <AppButton
                        className={signInContainerClassName + '-sign-up-design-button'}
                        label='SIGN IN'
                        onClick={() => changePage()} />
                    <img className={signInContainerClassName + '-sign-up-design-img'} src={SignUpDesignImage} alt={'img'} />
                </div>
            }
            {!signInPage &&
                <div className={signInContainerClassName + '-sign-up-form'}>
                    {children}
                </div>
            }
        </div>
    )
}

export default SignInContainer;