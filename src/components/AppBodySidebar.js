import { useState } from 'react';
import { Link } from "react-router-dom";
import './AppBodySidebar.scss'
const AppBodySidebar = ({ type = "default" }) => {
    const sidebarClassName = 'app-sidebar-' + type;
    const sidebarData = [
        {
            key: 1,
            title: 'Home',
            path: '/'
        },
        {
            key: 2,
            title: 'Introduction',
            path: '/Introduction'
        },
        {
            key: 3,
            title: 'Reading',
            path: '/Reading'
        },
        {
            key: 4,
            title: 'Writing',
            path: '/Writing'
        },
        {
            key: 5,
            title: 'Speaking',
            path: '/Speaking'
        },
        {
            key: 6,
            title: 'Listening',
            path: '/Listening'
        },
        {
            key: 7,
            title: 'Support',
            path: '/Support'
        },
        {
            key: 8,
            title: 'Contact Us',
            path: '/Contact'
        }
    ]

    const [selectedItem, setSelectedItem] = useState(0);

    const renderSidebarData = () => {
        return sidebarData.map((data, index) => {
            return (
                <div
                    key={index}
                    className={selectedItem === index ? sidebarClassName + '-selected' : sidebarClassName + '-unselected'}
                    onClick={() => setSelectedItem(index)}>
                    <Link to={data.path} className={sidebarClassName+'-link'}>{data.title}</Link>
                </div>
            )
        })
    }
    return (
        <div className={sidebarClassName}>
            {renderSidebarData()}
        </div>
    )
}

export default AppBodySidebar;