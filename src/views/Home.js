import AppCard from "../components/AppCard";
import './Home.scss';

const Home = ({type='default'}) => {
    const homeClassName = 'home-'+type;
    return(
        <div className={homeClassName}>
            <div className={homeClassName+'__cards'}>
                <AppCard header={'Statistics'}/>
                <AppCard type={'secondary'} header={'Statistics'}/>
                <AppCard size={'medium'} header={'Statistics'}/>
                <AppCard size={'medium'} type={'secondary'} header={'Statistics'}/>
            </div>
        </div>
    )
}
export default Home;