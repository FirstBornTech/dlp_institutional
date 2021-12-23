import AppNavbar from "../components/AppNavbar"
import AppBody from "../components/AppBody";
import Offcanvas from "react-bootstrap/Offcanvas";
import './Dashboard.scss';
import { useEffect, useState } from "react";
import { getCourseDetail, getUserDetail,getContentById } from "../services/api.services";
import { sidebarData, contentType } from '../config/courseData';
import Notification from "./Notifications";
import Profile from "./Profile";

const Dashboard = () => {
    const [showProfileSetting, setShowProfileSetting] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [userDetail, setUserDetail] = useState({});
    const [allCourseDetail,setAllCourseDetail] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState({});
    const [selectedSidebarData, setSelectedSidebarData] = useState(0);
    const [selectedContentType, setSelectedContentType] = useState(0);
    const [sidebarDataContent, setSidebarDataContent] = useState([])
    const [selectedSidebarDataContent, setSelectedSidebarDataContent]= useState(0);
    const [selectedSidebarDataSubcontent, setSelectedSidebarDataSubcontent]= useState(0);

    useEffect(()=>{
        appInitialisation();
    },[]);

    useEffect(()=>{
        getCourseData();
    },[selectedSidebarData,selectedContentType,selectedCourse])

    const appInitialisation = () =>{
        getUser();
    }
    
    const getUser = async() => {
        const user = await getUserDetail();
        if(user.status !== 'error'){
            setUserDetail(user);
            getCourses(user.userId);
        }
    }

    const getCourses = async(userId) =>{
        const courses = await getCourseDetail(userId);
        if(courses.status !== 'error'){
            setAllCourseDetail(courses);
            setSelectedCourse(courses[0]);
        }
    }

    const getCourseData = async()=>{
        if(sidebarData[selectedSidebarData].key === 3 || sidebarData[selectedSidebarData].key === 4 || sidebarData[selectedSidebarData].key === 5 || sidebarData[selectedSidebarData].key === 6 ){
            const content = await getContentById(sidebarData[selectedSidebarData].title,contentType[selectedContentType].path,selectedCourse.id);
            setSidebarDataContent(content);
        }
        else{
            setSidebarDataContent([]);
        }
    }

    return (
        <div className="app-dashboard">
            <AppNavbar 
                allCourseDetail={allCourseDetail}
                selectedCourse= {selectedCourse}
                changeCourse={(e)=>setSelectedCourse(e)}
                openNotification={()=>setShowNotifications(true)} 
                openProfile={()=>setShowProfileSetting(true)}/>
            <AppBody 
                sidebarData={sidebarData}
                selectedSidebarData={selectedSidebarData}
                sidebarDataContent={sidebarDataContent}
                selectedSidebarDataContent={selectedSidebarDataContent}
                selectedSidebarDataSubcontent={selectedSidebarDataSubcontent}
                changeSidebarData={(e)=>setSelectedSidebarData(e)}
                changeSidebarDataContent={(e)=>setSelectedSidebarDataContent(e)}
                changeSidebarDataSubcontent={(e)=>setSelectedSidebarDataSubcontent(e)}
                selectedContentType={selectedContentType}
                changeContentType={(e)=>setSelectedContentType(e)}
            />
            <Notification showNotifications={showNotifications} closeNotifications={()=>setShowNotifications(false)}>

            </Notification>
            <Profile 
                showProfileSetting={showProfileSetting} 
                closeProfileSetting={()=>setShowProfileSetting(false)}
                userDetail={userDetail}>

            </Profile>
        </div>
    )
}

export default Dashboard;