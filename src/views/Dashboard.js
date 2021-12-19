import AppNavbar from "../components/AppNavbar"
import AppBody from "../components/AppBody";
import Offcanvas from "react-bootstrap/Offcanvas";
import './Dashboard.scss';
import { useState } from "react";

const Dashboard = () => {
    const [showProfileSetting, setShowProfileSetting] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    return (
        <div className="app-dashboard">
            <AppNavbar openNotification={()=>setShowNotifications(true)} openProfile={()=>setShowProfileSetting(true)}/>
            <AppBody />
            <Offcanvas className="app-dashboard__offcanvas" show={showProfileSetting} placement={'end'} name={'end'} onHide={()=>setShowProfileSetting(false)} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Profile Settings</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            <Offcanvas className="app-dashboard__offcanvas" show={showNotifications} placement={'end'} name={'end'} onHide={()=>setShowNotifications(false)} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Notifications</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Dashboard;