import Banner from "./Banner";
import JobCatagory from "./JobCatagory";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <JobCatagory></JobCatagory>
        </div>
    );
};

export default Home;