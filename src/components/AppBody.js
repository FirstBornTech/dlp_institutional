import './AppBody.scss';

const AppBody = ({type="default"}) =>{
    const appBodyClassName = 'app-body-'+type;
    return(
        <div className={appBodyClassName}>

        </div>
    )
}

export default AppBody;