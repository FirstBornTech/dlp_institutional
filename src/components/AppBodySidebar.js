import { useState } from 'react';
import './AppBodySidebar.scss'
const AppBodySidebar = ({type="default"}) => {
    const sidebarClassName = 'app-sidebar-'+type;
    const sidebarData = [
        {
            key: 1,
            title: 'Home'
        },
        {
            key: 2,
            title: 'Introduction'
        },
        {
            key: 3,
            title: 'Reading'
        },
        {
            key: 4,
            title: 'Writing'
        },
        {
            key: 5,
            title: 'Speaking'
        },
        {
            key: 6,
            title: 'Listening'
        },
        {
            key: 7,
            title: 'Support'
        },
        {
            key: 8,
            title: 'Contact Us'
        }
    ]

    const [selectedItem, setSelectedItem]= useState(0);

    const renderSidebarData = () =>{
        return sidebarData.map((data,index)=>{
            return(
                <div 
                    key={index} 
                    className={selectedItem === index ? sidebarClassName+'-selected' : sidebarClassName+'-unselected'}
                    onClick={()=>setSelectedItem(index)}>
                    {data.title}
                </div>
            )
        })
    }
    return(
        <div className={sidebarClassName}>
            {renderSidebarData()}
        </div>
    )
}

export default AppBodySidebar;