import AppNavbar from "../components/AppNavbar"
import AppBody from "../components/AppBody";
import Offcanvas from "react-bootstrap/Offcanvas";
import './Dashboard.scss';
import { useEffect, useState } from "react";
import { getCourseDetail } from "../services/api.services";

const Dashboard = () => {
    const [showProfileSetting, setShowProfileSetting] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [allCourseDetail,setAllCourseDetail] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState({});

    useEffect(()=>{
        getCourses();
    },[]);

    const getCourses = async() =>{
        const courses = await getCourseDetail();
        setAllCourseDetail(courses);
        setSelectedCourse(courses[0]);
    }
    return (
        <div className="app-dashboard">
            <AppNavbar 
                allCourseDetail={allCourseDetail}
                selectedCourse= {selectedCourse}
                changeCourse={(e)=>setSelectedCourse(e)}
                openNotification={()=>setShowNotifications(true)} 
                openProfile={()=>setShowProfileSetting(true)}/>
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