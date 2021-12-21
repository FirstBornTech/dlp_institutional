import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AppDropdown from "./AppDropdown";
import AppLogo from '../images/AppLogo.png';
import NotificationLogo from '../images/icons/bell-fill.svg';
import ProfileLogo from '../images/icons/person-fill.svg';
import './AppNavbar.scss';
import { useState } from "react";

const AppNavbar = ({ type = "default", openNotification, openProfile, allCourseDetail, selectedCourse, changeCourse }) => {
    const navbarClassName = 'app-navbar-' + type;

    return (
        <Navbar className={navbarClassName}>
            <Container className={navbarClassName + '__container'}>
                <Navbar.Brand href="#home" className={navbarClassName + '__container-brand'}>
                    <img className={navbarClassName + '__container-brand-logo'} src={AppLogo} alt='logo' />
                    <div>Acute <br /> Study</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={navbarClassName + '__container-settings'}>
                        <AppDropdown 
                            options={allCourseDetail} 
                            selectedOption={selectedCourse} 
                            isOptionObject={true}
                            objectOptionValue={'courseTitle'}
                            onChange={(option) => changeCourse(option)} />
                        <Nav.Item><img className={navbarClassName + '__container-settings-item'} src={NotificationLogo} alt={'notify'} onClick={() => openNotification()} /></Nav.Item>
                        <Nav.Item><img className={navbarClassName + '__container-settings-item'} src={ProfileLogo} alt={'profile'} onClick={() => openProfile()} /></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;