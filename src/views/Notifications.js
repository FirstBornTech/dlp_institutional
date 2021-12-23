import AppOffcanvas from "../components/AppOffcanvas";
import './Notifications.scss';

const Notification = ({ type = 'default', showNotifications, closeNotifications }) => {
    const notificationClassName = 'notifications-' + type;
    return (
        <AppOffcanvas className={notificationClassName} header={'Notification'} showCanvas={showNotifications} closeCanvas={() => closeNotifications()}>
            <div className={notificationClassName + '__content'}>
                No New Notification !
            </div>
        </AppOffcanvas>
    )
}
export default Notification;