
const Banner = ({setSearchJob}) => {
    const handelSearch=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const searchValue=form.get('home-input');
        fetch(`https://jobdoc.vercel.app/searched-jobs/${searchValue}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSearchJob(data);
        })
    }
    return (
        <div className="hero min-h-screen mt-5 lg:mt-16" style={{ backgroundImage: 'url(https://i.ibb.co/LNSL4xN/slider-5.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-white">Discover Great Job Offer <br /> With Job<span className='text-[#1CA774]'>D</span>oc</h1>
                    <p className="mb-5 text-white">Getting a new job is never easy. Check what new jobs we have in store for you on Job<span className='text-[#1CA774]'>D</span>oc.</p>
                    <div className="">
                        <form onSubmit={handelSearch}>
                        <input name="home-input" type="text" placeholder="Search Jobs..." className="input input-bordered input-accent w-full max-w-xs bg-transparent" />
                        <button  className="btn bg-[#1CA774] px-5 py-2 border-none font-bold text-white hover:btn-outline mt-5 lg:mt-0 ml-5">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;