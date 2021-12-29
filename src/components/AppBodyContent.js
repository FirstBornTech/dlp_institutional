import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "../views/Contact";
import Home from '../views/Home';
import Introduction from "../views/Introduction";
import Subject from '../views/Subject';
import Support from "../views/Support";

const AppBodyContent = ({ selectedContentType, changeContentType, displayContent }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Introduction" element={<Introduction />} />
                <Route path="/Reading"
                    element={
                        <Subject
                            selectedContentType={selectedContentType}
                            displayContent={displayContent}
                            changeContentType={(e) => changeContentType(e)} />} />
                <Route path="/Writing" element={<Subject
                            selectedContentType={selectedContentType}
                            displayContent={displayContent}
                            changeContentType={(e) => changeContentType(e)} />} />
                <Route path="/Speaking" element={<Subject
                            selectedContentType={selectedContentType}
                            displayContent={displayContent}
                            changeContentType={(e) => changeContentType(e)} />} />
                <Route path="/Listening" element={<Subject
                            selectedContentType={selectedContentType}
                            displayContent={displayContent}
                            changeContentType={(e) => changeContentType(e)} />} />
                <Route path="/Support" element={<Support />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<Navigate to ="/" />}/>
            </Routes>
        </>
    )
}

export default AppBodyContent;