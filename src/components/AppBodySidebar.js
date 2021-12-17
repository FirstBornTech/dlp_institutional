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
            path: '/Writing',
            content: [
                {
                    key: 1,
                    title: 'Introduction'
                },
                {
                    key: 2,
                    title: 'Understanding questions ',
                    subcontent: [
                        {
                            key: 1,
                            title: 'Vistiqulum'
                        },
                        {
                            key: 2,
                            title: 'Triqulum'
                        },
                        {
                            key: 3,
                            title: 'Aliquam'
                        }
                    ]
                },
                {
                    key: 3,
                    title: 'Identify Keywords',
                    subcontent: [
                        {
                            key: 1,
                            title: 'Vistiqulum'
                        },
                        {
                            key: 2,
                            title: 'Triqulum'
                        }
                    ]
                },
                {
                    key: 4,
                    title: 'The six questions',
                    subcontent: [
                        {
                            key: 1,
                            title: 'One'
                        },
                        {
                            key: 2,
                            title: 'Two'
                        },
                        {
                            key: 3,
                            title: 'Three'
                        },
                        {
                            key: 4,
                            title: 'Four'
                        },
                        {
                            key: 5,
                            title: 'Five'
                        },
                        {
                            key: 6,
                            title: 'Six'
                        }
                    ]
                },
                {
                    key: 5,
                    title: 'Categorise case note'
                },
            ],
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
    const [selectedItemContent, setSelectedItemContent] = useState(0);
    const [selectedItemSubcontent, setSelectedItemSubcontent] = useState(0);

    const renderSidebarDataSubcontent = (key, content) => {
        return content.map((data, index) => {
            return (
                <>
                    <div
                        key={index}
                        className={selectedItemSubcontent === index ? sidebarClassName + '-subcontent-selected' : sidebarClassName + '-subcontent-unselected'}
                        onClick={() => setSelectedItemSubcontent(index)}>
                        {key}.{data.key}.{data.title}
                    </div>
                </>
            )
        })
    }

    const renderSidebarDataContent = (content) => {
        return content.map((data, index) => {
            return (
                <>
                    <div
                        key={index}
                        className={(selectedItemContent === index && !data?.subcontent) ? sidebarClassName + '-content-selected' : sidebarClassName + '-content-unselected'}
                        onClick={() => { setSelectedItemContent(index); setSelectedItemSubcontent(0) }}>
                        {data.key}.{data.title}
                    </div>
                    {(selectedItemContent === index && data?.subcontent) &&
                        <div className={sidebarClassName + '-container-subcontent'}>
                            {renderSidebarDataSubcontent(data.key, data.subcontent)}
                        </div>}
                </>
            )
        })
    }

    const renderSidebarData = () => {
        return sidebarData.map((data, index) => {
            return (
                <>
                    <Link to={data.path} className={sidebarClassName + '-link'}>
                        <div
                            key={index}
                            className={selectedItem === index ? sidebarClassName + '-selected' : sidebarClassName + '-unselected'}
                            onClick={() => { setSelectedItem(index); setSelectedItemContent(0); setSelectedItemSubcontent(0) }}>
                            {data.title}
                        </div>
                    </Link>
                    {(selectedItem === index && data?.content) &&
                        <div className={sidebarClassName + '-container-subcontent'}>
                            {renderSidebarDataContent(data.content)}
                        </div>}
                </>
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