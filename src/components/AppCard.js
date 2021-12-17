import './AppCard.scss';

const AppCard = ({type = 'default', size = 'small', header, description, children}) => {
    const cardClassName = "app-card-"+type;
    return(
        <div className={`${cardClassName} ${size}`}>
            {header && <div className={cardClassName+'__header'}>{header}</div>}
            {description && <div className={cardClassName+'__description'}>{description}</div>}
            {children}
        </div>
    )
}

export default AppCard;