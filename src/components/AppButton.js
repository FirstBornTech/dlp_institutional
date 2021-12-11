import React from "react";
import Button from "react-bootstrap/Button";
import './AppButton.scss';

const AppButton = ({type='default', className, label='SUBMIT', onClick}) =>{
        const buttonClassName = 'app-btn-'+type
        const appButtonClassName = className? (buttonClassName+' '+className): buttonClassName
    return (  
        <Button className={appButtonClassName} onClick={onClick}>{label}</Button>
    );
}



export default AppButton;