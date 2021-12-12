import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AppLogo from '../images/AppLogo.png';
import NotificationLogo from '../images/icons/bell-fill.svg';
import ProfileLogo from '../images/icons/person-fill.svg';
import './AppNavbar.scss';

const AppNavbar = ({type="default"}) => {
    const navbarClassName = 'app-navbar-'+type
    return (
        <Navbar className={navbarClassName}>
            <Container className={navbarClassName+'__container'}>
                <Navbar.Brand href="#home" className={navbarClassName+'__container-brand'}>
                    <img className={navbarClassName+'__container-brand-logo'} src={AppLogo} alt='logo'/>
                    <div>Acute <br/> Study</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={navbarClassName+'__container-settings'}>
                        <Nav.Link href="#link"><img src={NotificationLogo} alt={'notify'}/></Nav.Link>
                        <Nav.Link href="#link"><img src={ProfileLogo} alt={'profile'}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;