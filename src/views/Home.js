import AppCard from "../components/AppCard";
import './Home.scss';

const Home = ({ type = 'default' }) => {
    const homeClassName = 'home-' + type;
    return (
        <div className={homeClassName}>
            <div className={homeClassName + '__cards'}>
                <AppCard size={'medium'} header={'Statistics'}>
                    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</div>
                </AppCard>
                <AppCard size={'medium'} type={'secondary'} header={'Announcements'}>
                    <div>Morbi dictum. Vestibulum adipiscing
                        pulvinar quam. In aliquam rhoncus sem.
                        In mi erat, sodaleseget, pretium interdum,
                        malesuada ac, augue. Aliquam sollicitudin</div>
                </AppCard>
            </div>
            <div className={homeClassName + '__content'}>
                <h1>Welcome to Acute Study!</h1>
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
        </div>
    )
}
export default Home;