import { useState } from 'react';
import { Link } from "react-router-dom";
import HomeSelectedIcon from '../images/icons/home-black.svg';
import HomeUnselectedIcon from '../images/icons/home-white.svg';
import IntroSelectedIcon from '../images/icons/intro-black.svg';
import IntroUnselectedIcon from '../images/icons/intro-white.svg';
import ReadSelectedIcon from '../images/icons/read-black.svg';
import ReadUnselectedIcon from '../images/icons/read-white.svg';
import WriteSelectedIcon from '../images/icons/write-black.svg';
import WriteUnselectedIcon from '../images/icons/write-white.svg';
import SpeakSelectedIcon from '../images/icons/speak-black.svg';
import SpeakUnselectedIcon from '../images/icons/speak-white.svg';
import ListenSelectedIcon from '../images/icons/listen-black.svg';
import ListenUnselectedIcon from '../images/icons/listen-white.svg';
import SupportSelectedIcon from '../images/icons/support-black.svg';
import SupportUnselectedIcon from '../images/icons/support-white.svg';
import ContactSelectedIcon from '../images/icons/contact-black.svg';
import ContactUnselectedIcon from '../images/icons/contact-white.svg';
import './AppBodySidebar.scss'
const AppBodySidebar = ({ type = "default" }) => {
    const sidebarClassName = 'app-sidebar-' + type;
    const sidebarData = [
        {
            key: 1,
            title: 'Home',
            path: '/',
            selectedIcon: HomeSelectedIcon,
            unselectedIcon: HomeUnselectedIcon
        },
        {
            key: 2,
            title: 'Introduction',
            path: '/Introduction',
            selectedIcon: IntroSelectedIcon,
            unselectedIcon: IntroUnselectedIcon
        },
        {
            key: 3,
            title: 'Reading',
            path: '/Reading',
            selectedIcon: ReadSelectedIcon,
            unselectedIcon: ReadUnselectedIcon
        },
        {
            key: 4,
            title: 'Writing',
            path: '/Writing',
            selectedIcon: WriteSelectedIcon,
            unselectedIcon: WriteUnselectedIcon,
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
            path: '/Speaking',
            selectedIcon: SpeakSelectedIcon,
            unselectedIcon: SpeakUnselectedIcon
        },
        {
            key: 6,
            title: 'Listening',
            path: '/Listening',
            selectedIcon: ListenSelectedIcon,
            unselectedIcon: ListenUnselectedIcon
        },
        {
            key: 7,
            title: 'Support',
            path: '/Support',
            selectedIcon: SupportSelectedIcon,
            unselectedIcon: SupportUnselectedIcon
        },
        {
            key: 8,
            title: 'Contact Us',
            path: '/Contact',
            selectedIcon: ContactSelectedIcon,
            unselectedIcon: ContactUnselectedIcon
        }
    ]

    const [selectedItem, setSelectedItem] = useState(0);
    const [selectedItemContent, setSelectedItemContent] = useState(0);
    const [selectedItemSubcontent, setSelectedItemSubcontent] = useState(0);

    const renderSidebarDataSubcontent = (key, content) => {
        return content.map((data, index) => {
            return (
                <div key={index}>
                    <div
                        className={selectedItemSubcontent === index ? sidebarClassName + '-subcontent-selected' : sidebarClassName + '-subcontent-unselected'}
                        onClick={() => setSelectedItemSubcontent(index)}>
                        {key}.{data.key}.{data.title}
                    </div>
                </div>
            )
        })
    }

    const renderSidebarDataContent = (content) => {
        return content.map((data, index) => {
            return (
                <div key={index}>
                    <div
                        className={(selectedItemContent === index && !data?.subcontent) ? sidebarClassName + '-content-selected' : sidebarClassName + '-content-unselected'}
                        onClick={() => { setSelectedItemContent(index); setSelectedItemSubcontent(0) }}>
                        {data.key}.{data.title}
                    </div>
                    {(selectedItemContent === index && data?.subcontent) &&
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
                            className={selectedItem === index ? sidebarClassName + '-selected' : sidebarClassName + '-unselected'}
                            onClick={() => { setSelectedItem(index); setSelectedItemContent(0); setSelectedItemSubcontent(0) }}>
                            <img className={sidebarClassName + '-icon'} src={selectedItem === index ? data.selectedIcon : data.unselectedIcon} alt={'Home'} />
                            {data.title}
                        </div>
                    </Link>
                    {(selectedItem === index && data?.content) &&
                        <div className={sidebarClassName + '-container-subcontent'}>
                            {renderSidebarDataContent(data.content)}
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