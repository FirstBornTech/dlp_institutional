import AppCard from "../components/AppCard";
import { contentType } from "../config/courseData";
import './Reading.scss';

const Reading = ({type='default'}) => {
    const homeClassName = 'reading-'+type;
    return(
        <div className={homeClassName}>
            <div className={homeClassName+'__cards'}>
                <AppCard contentType={contentType[0]}/>
                <AppCard type={'secondary'} contentType={contentType[1]}/>
                <AppCard type={'secondary'} contentType={contentType[2]}/>
            </div>
        </div>
    )
}
export default Reading;