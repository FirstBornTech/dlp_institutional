import { useState } from 'react';
import { Link } from "react-router-dom";
import './AppBodySidebar.scss'
const AppBodySidebar = ({ type = "default" ,sidebarData, selectedSidebarData, sidebarDataContent, selectedSidebarDataContent, selectedSidebarDataSubcontent,changeSidebarData,changeSidebarDataContent,changeSidebarDataSubcontent,changeContentType}) => {
    const sidebarClassName = 'app-sidebar-' + type;

    const renderSidebarDataSubcontent = (key, content) => {
        return content.map((data, index) => {
            return (
                <div key={index}>
                    {data.status !== 'incompleted' && <div
                        className={selectedSidebarDataSubcontent === index ? sidebarClassName + '-subcontent-selected' : sidebarClassName + '-subcontent-unselected'}
                        onClick={() => changeSidebarDataSubcontent(index)}>
                        {key}.{data.key}.{data.title}
                    </div>}
                    {data.status === 'incompleted' && <div
                        className={sidebarClassName + '-subcontent-unselected disabled'}>
                        {key}.{data.key}.{data.title}
                    </div>}
                </div>
            )
        })
    }

    const renderSidebarDataContent = (content) => {
        return content.map((data, index) => {
            return (
                <div key={index}>
                    {data.status !== 'incompleted' && <div
                        className={(selectedSidebarDataContent === index && !data?.subcontent) ? sidebarClassName + '-content-selected' : sidebarClassName + '-content-unselected'}
                        onClick={() => { changeSidebarDataContent(index); changeSidebarDataSubcontent(0) }}>
                        {data.key}.{data.title}
                    </div>}
                    {data.status === 'incompleted' && <div
                        className={sidebarClassName + '-content-unselected disabled'}>
                        {data.key}.{data.title}
                    </div>}
                    {(selectedSidebarDataContent === index && data?.subcontent) &&
                        <div className={sidebarClassName + '-container-subcontent'}>
                            {renderSidebarDataSubcontent(data.key, data.subcontent)}
                        </div>}
                </div>
            )
        })
    }

    const renderSidebarData = () => {
        return sidebarData.map((data, index) => {
            return (
                <div key={index}>
                    <Link to={data.path} className={sidebarClassName + '-link'}>
                        <div
                            className={selectedSidebarData === index ? sidebarClassName + '-selected' : sidebarClassName + '-unselected'}
                            onClick={() => { changeSidebarData(index); changeSidebarDataContent(0); changeSidebarDataSubcontent(0); changeContentType(0) }}>
                            <img className={sidebarClassName + '-icon'} src={selectedSidebarData === index ? data.selectedIcon : data.unselectedIcon} alt={'Home'} />
                            {data.title}
                        </div>
                    </Link>
                    {(selectedSidebarData === index && sidebarDataContent.length>0) &&
                        <div className={sidebarClassName + '-container-subcontent'}>
                            {renderSidebarDataContent(sidebarDataContent)}
                        </div>}
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