import Banner from '../Banner/Banner';
import CatagoryList from '../CatagoryList/CatagoryList';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJob></FeaturedJob>
            <h2>This is home..</h2>
        </div>
    );
};

export default Home;