import Marquee from "react-fast-marquee";
// 
const Bonus2 = () => {
    return (
       <div className="mt-20">
        <h1 className="text-4xl text-black text-center font-bold mb-10">Companies that uses JobDoc</h1>
         <div className="bg-[#016551] w-full h-[200px] flex flex-col justify-center">
            <div className="">
                <Marquee>
                    <div className="mr-40"><img src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/brand/fitbit-white.svg" alt="" /></div>
                    <div className="mr-40"><img src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/brand/forbes-white.svg" alt="" /></div>
                    <div className="mr-40"><img src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/brand/layar-white.svg" alt="" /></div>
                    <div className="mr-40"><img src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/brand/mailchimp-white.svg" alt="" /></div>
                    <div className="mr-40"><img src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/brand/vidados-white.svg" alt="" /></div>
                </Marquee>
            </div>
        </div>
       </div>
    );
};

export default Bonus2;