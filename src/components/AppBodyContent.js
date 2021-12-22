import { Routes, Route, Link } from "react-router-dom";
import Home from '../views/Home';
import Reading from '../views/Reading';

const AppBodyContent = ({selectedContentType,changeContentType}) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Introduction" element={<Home />} />
                <Route path="/Reading" 
                element={
                    <Reading 
                        selectedContentType={selectedContentType}
                        changeContentType={(e)=>changeContentType(e)}/>} />
                <Route path="/Writing" element={<Home />} />
                <Route path="/Speaking" element={<Home />} />
                <Route path="/Listening" element={<Home />} />
                <Route path="/Support" element={<Home />} />
                <Route path="/Contact" element={<Home />} />
                {/* <Route path="about" element={<About />} /> */}
            </Routes>
        </>
    )
}

export default AppBodyContent;