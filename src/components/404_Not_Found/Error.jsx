import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="flex justify-center">
            <div>
                <img src={`https://i.ibb.co/j49h5VL/404-error-with-people-holding-the-numbers.gif`} alt="" />
                <h1 className="text-xl text-center md:text-4xl text-black font-bold">Oops!!! Something went <span className="text-red-600">wrong!</span></h1>
              <Link to='/'><div className="flex justify-center mt-10"><button className="btn bg-[#FCB41E] font-semibold text-white text-center border-none">Go Back!</button></div></Link>
            </div>
        </div>
    );
};

export default Error;