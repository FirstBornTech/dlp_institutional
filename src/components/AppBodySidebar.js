import './AppBodySidebar.scss'
const AppBodySidebar = ({type="default"}) => {
    const sidebarClassName = 'app-sidebar-'+type;
    return(
        <div className={sidebarClassName}>

        </div>
    )
}

export default AppBodySidebar;