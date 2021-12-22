import './AppCard.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AppCard = ({ type = 'default', size = 'small', header, description, children, contentType, onCardClick}) => {
    const cardClassName = "app-card-" + type;
    return (
        <div className={`${cardClassName} ${size}`}>
            {header && <div className={cardClassName + '__header'}>{header}</div>}
            {description && <div className={cardClassName + '__description'}>{description}</div>}
            {contentType &&
                <div className={cardClassName + '__cards-section'} onClick={()=>onCardClick()}>
                    <div className={cardClassName + '__cards-type'}>
                    <div>
                        <img 
                            className={cardClassName + '__cards-type-logo'} 
                            src={type==='default'?contentType.selectedIcon:contentType.unselectedIcon} 
                            alt={'icon'}/>
                    </div>
                    <div className={cardClassName + '__cards-type-title'}>{contentType.name}</div>
                    </div>
                    <div className={cardClassName + '__cards-progress'}>
                        {type==='default'
                        ?<div className={cardClassName + '__cards-progress-bar'}>
                            <CircularProgressbar value={30} strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt', trailColor: 'rgba(0,0,0,0.7)' })} />
                        </div>
                        :<div className={cardClassName + '__cards-progress-bar'}>
                            <CircularProgressbar value={30} strokeWidth={15} styles={buildStyles({ strokeLinecap: 'butt', trailColor: 'rgba(0,0,0,0.7)' })} />
                        </div>}
                    </div>
                </div>
            }
            {children}
        </div>
    )
}

export default AppCard;