import AppCard from "../components/AppCard";
import { contentType } from "../config/courseData";
import './Subject.scss';

const Subject = ({ type = 'default', selectedContentType, changeContentType }) => {
    const homeClassName = 'subject-' + type;
    return (
        <div className={homeClassName}>
            <div className={homeClassName + '__cards'}>
                <AppCard type={`${selectedContentType !== 0 ? 'secondary' : 'default'}`} contentType={contentType[0]} onCardClick={() => changeContentType(0)} />
                <AppCard type={`${selectedContentType !== 1 ? 'secondary' : 'default'}`} contentType={contentType[1]} onCardClick={() => changeContentType(1)} />
                <AppCard type={`${selectedContentType !== 2 ? 'secondary' : 'default'}`} contentType={contentType[2]} onCardClick={() => changeContentType(2)} />
            </div>
            <div className={homeClassName + '__content'}>
            </div>
        </div>
    )
}
export default Subject;