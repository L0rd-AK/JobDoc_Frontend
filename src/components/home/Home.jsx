import { useState } from "react";
import Bonus1 from "../accessories/Bonus1";
import Bonus2 from "../accessories/Bonus2";
import Testimonial from "../accessories/Testimonial";
import Banner from "./Banner";
import JobCatagory from "./JobCatagory";

const Home = () => {
    const [searchJob,setSearchJob]=useState([]);
    return (
        <div>
            <Banner setSearchJob={setSearchJob}></Banner>
            <JobCatagory searchJob={searchJob}></JobCatagory>
            <Bonus1></Bonus1>
            <Testimonial></Testimonial>
            <Bonus2></Bonus2>
        </div>
    );
};

export default Home;