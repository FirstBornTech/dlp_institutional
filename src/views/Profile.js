import AppOffcanvas from "../components/AppOffcanvas";
import ProfileAvatar from "../images/profile-avatar.png";
import { userDetail } from "../services/api.staticData";
import './Profile.scss';

const Profile = ({ type = 'default', showProfileSetting, closeProfileSetting, userDetail }) => {
    const profileClassName = 'profile-' + type;
    return (
        <AppOffcanvas className={profileClassName} header={'Profile'} showCanvas={showProfileSetting} closeCanvas={() => closeProfileSetting()}>
            <div className={profileClassName + '__content'}>
                <div>
                    <img className={profileClassName + '__content-avatar'} src={ProfileAvatar} alt={'profile'} />
                </div>
                <div className={profileClassName + '__content-name'}>
                    {userDetail.firstName} {userDetail.lastName}
                </div>
                <div className={profileClassName + '__content-email'}>
                    {userDetail.emailId}
                </div>
            </div>
        </AppOffcanvas>
    )
}
export default Profile;