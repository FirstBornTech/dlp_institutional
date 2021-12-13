import AppBodySidebar from './AppBodySidebar';
import AppBodyContent from './AppBodyContent';
import './AppBody.scss';

const AppBody = ({type="default"}) =>{
    const appBodyClassName = 'app-body-'+type;
    return(
        <div className={appBodyClassName}>
            <AppBodySidebar/>
            <AppBodyContent/>
        </div>
    )
}

export default AppBody;