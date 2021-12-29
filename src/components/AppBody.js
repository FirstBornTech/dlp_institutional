import AppBodySidebar from './AppBodySidebar';
import AppBodyContent from './AppBodyContent';
import './AppBody.scss';

const AppBody = ({ 
        type = "default", 
        sidebarData, 
        selectedSidebarData, 
        sidebarDataContent, 
        selectedSidebarDataContent, 
        selectedSidebarDataSubcontent,
        changeSidebarData,
        changeSidebarDataContent,
        changeSidebarDataSubcontent,
        selectedContentType,
        changeContentType,
        displayContent
     }) => {
    const appBodyClassName = 'app-body-' + type;
    return (
        <div className={appBodyClassName}>
            <div className={appBodyClassName + '__design'}></div>
            <div className={appBodyClassName + '__content'}>
                <AppBodySidebar
                    sidebarData={sidebarData}
                    selectedSidebarData={selectedSidebarData}
                    sidebarDataContent={sidebarDataContent}
                    selectedSidebarDataContent={selectedSidebarDataContent}
                    selectedSidebarDataSubcontent={selectedSidebarDataSubcontent}
                    changeSidebarData={(e)=>changeSidebarData(e)}
                    changeSidebarDataContent={(e)=>changeSidebarDataContent(e)}
                    changeSidebarDataSubcontent={(e)=>changeSidebarDataSubcontent(e)}
                    changeContentType={(e)=>changeContentType(e)}
                />
                <AppBodyContent 
                    selectedContentType={selectedContentType}
                    displayContent={displayContent}
                    changeContentType={(e)=>changeContentType(e)}
                />
            </div>
        </div>
    )
}

export default AppBody;