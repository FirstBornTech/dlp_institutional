import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../views/Home';
import Subject from '../views/Subject';

const AppBodyContent = ({ selectedContentType, changeContentType }) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Introduction" element={<Home />} />
                <Route path="/Reading"
                    element={
                        <Subject
                            selectedContentType={selectedContentType}
                            changeContentType={(e) => changeContentType(e)} />} />
                <Route path="/Writing" element={<Subject
                            selectedContentType={selectedContentType}
                            changeContentType={(e) => changeContentType(e)} />} />
                <Route path="/Speaking" element={<Subject
                            selectedContentType={selectedContentType}
                            changeContentType={(e) => changeContentType(e)} />} />
                <Route path="/Listening" element={<Subject
                            selectedContentType={selectedContentType}
                            changeContentType={(e) => changeContentType(e)} />} />
                <Route path="/Support" element={<Home />} />
                <Route path="/Contact" element={<Home />} />
                <Route path="*" element={<Navigate to ="/" />}/>
            </Routes>
        </>
    )
}

export default AppBodyContent;