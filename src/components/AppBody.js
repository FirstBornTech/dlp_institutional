import AppBodySidebar from './AppBodySidebar';
import AppBodyContent from './AppBodyContent';
import './AppBody.scss';

const AppBody = ({ type = "default" }) => {
    const appBodyClassName = 'app-body-' + type;
    return (
        <div className={appBodyClassName}>
            <div className={appBodyClassName + '__design'}></div>
            <div className={appBodyClassName + '__content'}>
                <AppBodySidebar />
                <AppBodyContent />
            </div>
        </div>
    )
}

export default AppBody;