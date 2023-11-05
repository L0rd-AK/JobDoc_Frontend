import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const { signIn,auth,setToogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const provider= new GoogleAuthProvider();
    const HandelSignInWithGoogle=()=>{
        
        signInWithPopup(auth,provider)
        .then((result) => 
                {toast.success(`successfully loged in`);
                navigate(location?.state ? location.state : '/');
                setToogle(false);
                console.log("user found",result.user)}
            )
            .catch(error => {
                toast.error(`${error.code}`);
                console.error(error)
            })
        
            
    }
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
       
        signIn(email, password)
            .then(result => {
                toast.success(`successfully loged in`);
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error(`wrong Email or Password`);
                console.error(error)
            })

    }
    return (
        <>
            <section className="bg-white">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-10">
                                Sign in to your account
                            </h1>
                            <namem className="space-y-4 md:space-y-6" action="#">
                                <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label name="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="mt-5 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                  <button type="submit" className="mt-5 w-full text-white bg-[#1CA774] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                </form>
                                <div className="text-center"><button onClick={HandelSignInWithGoogle} className="flex items-center text-center gap-5 w-full text-white border-[#1CA774] border-2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 "><FcGoogle className="ml-8 lg:ml-20 text-2xl"></FcGoogle>Sign in with Google</button></div>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Dont have an account yet? <Link to='/register'><a href="#" className="font-medium text-[#1CA774] hover:underline dark:text-primary-500">Sign up</a></Link>
                                </p>
                            </namem>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;