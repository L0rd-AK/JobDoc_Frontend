import Bonus1 from "../accessories/Bonus1";
import Testimonial from "../accessories/Testimonial";
import Banner from "./Banner";
import JobCatagory from "./JobCatagory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCatagory></JobCatagory>
            <Bonus1></Bonus1>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;