import AppNavbar from "../components/AppNavbar"
import AppBody from "../components/AppBody";
import './Dashboard.scss';

const Dashboard = () =>{
    return(
        <div className="app-dashboard">
            <AppNavbar/>
            <AppBody/>
        </div>
    )
}

export default Dashboard;