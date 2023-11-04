import Banner from "./Banner";
import JobCatagory from "./JobCatagory";
import JobTable from "./JobTable";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <JobCatagory></JobCatagory>
            <JobTable></JobTable>
        </div>
    );
};

export default Home;