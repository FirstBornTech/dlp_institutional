import AppCard from "../components/AppCard";
import { contentType } from "../config/courseData";
import AppButton from "../components/AppButton";
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
                <h1>Course Content</h1>
                <p>
                    Morbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudin
                    Morbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudinMorbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudin
                </p>
                <br />
                <div style={{textAlign:'center'}}>
                <iframe width="420" height="315" title="youtube" 
                    src="https://www.youtube.com/embed/6ncL7kUFBsI">
                </iframe>
                </div>
                <br/>
                <p>
                    Morbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudin
                    Morbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudinMorbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudin
                </p>
            </div>
            <div className={homeClassName + '__btn-section'}>
                <AppButton className={homeClassName + '__btn-section-button'} label="Click here to move to next module"></AppButton>
            </div>
        </div>
    )
}
export default Subject;