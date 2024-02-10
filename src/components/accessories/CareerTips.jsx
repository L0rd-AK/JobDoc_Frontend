import { FaRegArrowAltCircleRight } from "react-icons/fa";
const CareerTips = () => {
    return (
        <div className="max-w-7xl mx-auto mt-32">
            <h1 className="text-4xl text-black text-center font-bold mb-3">Quick Career Tips</h1>
            <p className="text-center mb-20">Found by employers communicate directly with hiring managers and recruiters.</p>
            <div className="grid grid-cols-3 gap-5">
                <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer">
                    <figure><img src="https://i.ibb.co/9b7ZPFT/career-Tips-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Attract Sales And Profits</h2>
                        <p>A job ravenously while Far much that one rank <br />beheld after outside....</p>
                        <div className="card-actions justify-center">
                            <p className="text-red-600 flex items-center gap-2">Read more <FaRegArrowAltCircleRight className="mt-1"></FaRegArrowAltCircleRight ></p>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer">
                    <figure><img src="https://i.ibb.co/hgJkXVb/career-Tips-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">5 Tips For Your Job Interviews</h2>
                        <p>Think back over your life. Think about the <br />people that had a....</p>
                        <div className="card-actions justify-end">
                            <p className="text-red-600 flex items-center gap-2">Read more <FaRegArrowAltCircleRight className="mt-1"></FaRegArrowAltCircleRight ></p>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer">
                    <figure><img src="https://i.ibb.co/7K29mNx/career-Tips-3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">An Overworked Newspaper Editor</h2>
                        <p>Ravenously while Far much that one rank beheld after <br />outside ignobly more....</p>
                        <div className="card-actions justify-center inline">
                            <p className="text-red-600 flex items-center gap-2">Read more <FaRegArrowAltCircleRight className="mt-1"></FaRegArrowAltCircleRight ></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CareerTips;