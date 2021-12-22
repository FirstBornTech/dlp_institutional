import AppCard from "../components/AppCard";
import { contentType } from "../config/courseData";
import './Reading.scss';

const Reading = ({type='default',selectedContentType,changeContentType}) => {
    const homeClassName = 'reading-'+type;
    return(
        <div className={homeClassName}>
            <div className={homeClassName+'__cards'}>
                <AppCard type={`${selectedContentType!==0 ? 'secondary':'default'}`} contentType={contentType[0]} onCardClick={()=>changeContentType(0)}/>
                <AppCard type={`${selectedContentType!==1 ? 'secondary' :'default'}`} contentType={contentType[1]} onCardClick={()=>changeContentType(1)}/>
                <AppCard type={`${selectedContentType!==2 ? 'secondary':'default'}`} contentType={contentType[2]} onCardClick={()=>changeContentType(2)}/>
            </div>
        </div>
    )
}
export default Reading;