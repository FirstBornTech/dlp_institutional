import React from "react";
import Button from "react-bootstrap/Button";
import './AppButton.scss';

const AppButton = ({type='default'}) =>{
    return (  
        <Button className={'app-btn-'+type}>App Button</Button>
    );
}



export default AppButton;