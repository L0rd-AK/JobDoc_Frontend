import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <div className="w-full bg-[#016551] space-y-5 flex flex-col justify-center mt-20">
            <Helmet>
                <title>Our Blogs</title>
            </Helmet>
            <h1 className="text-white text-4xl lg:text-5xl font-bold text-center mt-10">Ckeck Out our Blogs</h1>
            <p className="text-[#b2d0ca] font-medium text-center">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum <br /> deleniti atque corrupti quos dolores</p>
            <div className="mx-5">
                <div className="grid grid-cols-1 gap-5 justify-center mx-auto">
                    <div className=" bg-[#1b7563] rounded-lg p-5 space-y-3">
                        <strong className="text-[#7bbd15] text-6xl">01.</strong>
                        <h3 className="text-white font-bold text-3xl">What is an access token and refresh token? How do they work and where should westore them on the client-side?</h3>
                        <p className="text-[#b2d0ca] font-medium text-sm"><span className="text-white font-bold">Access Tokens</span> and <span className="text-white font-bold">Refresh Tokens</span> are used to authenticate users and authorize requests without keeping session data on the server. They are analogous to digital signatures.<br />
                            <span className="text-white font-bold">Access Tokens</span> allow temporary access to restricted resources such as APIs or websites. They are valid for only a few minutes or hours, depending on the setting to safeguard the resource server. Any user with an access token is automatically authenticated, regardless of whether they are genuine or malicious.<br />
                            <span className="text-white font-bold">Refresh Tokens</span>, on the other hand, are used in OAuth 2.0 authorization frameworks to manage users sessions across native, web-based, and single-page apps. They allow users to log in and stay connected without providing their passwords for long periods. Refresh tokens can last from a few days to a few months. They dont grant the user any access but prolong the duration of the session to avoid needless re-authentication.
                            For example, if an access token is only good for 8 minutes for accessing an application, a refresh token would help to create a new set of access and refresh tokens after 8 minutes without asking users to re-enter their credentials.
                            Tokens can be stored in a cache or a secured relational database. Additionally, a set of secret keys, also known as public/private keys, are needed for signing and authenticating tokens. Access and refresh tokens are issued only to users with valid usernames and passwords.
                        </p>
                    </div>
                    <div className=" bg-[#1b7563] rounded-lg p-5 space-y-3">
                        <strong className="text-[#7bbd15] text-6xl">02.</strong>
                        <h3 className="text-white font-bold text-3xl">What is express js? What is Nest JS?</h3>
                        <p className="text-[#b2d0ca] font-medium text-sm"><span className="text-white font-bold">Express.js</span> is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your applications functionality with middleware and routing. Express.js is designed to develop Node.js web applications quickly and easily. It allows you to define application routes using HTTP methods and URLs. Its simple to set up and personalize, and includes a number of middleware modules that can be used to execute additional requests and responses activities. <br />
                            <span className="text-white font-bold">NestJS</span> is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses modern JavaScript, is built with TypeScript, and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). NestJS provides a level of abstraction above common Node.js frameworks like Express/Fastify, but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform.
                        </p>
                    </div>
                    <div className=" bg-[#1b7563] rounded-lg p-5 space-y-3">
                        <strong className="text-[#7bbd15] text-6xl">03.</strong>
                        <h3 className="text-white font-bold text-3xl">My Code Explanation</h3>
                        <p className="text-[#b2d0ca] font-medium text-sm">I tried to implement all I learend in previous two milestone. I Hosted all job data in Mongodb, and showed the data dynamically, you can create account or login using Google account, Onced loged in you can Post job or applied to job. Of course you cant apply to your own job. Then I secured my posted and applied job data using JWT(json web token).You can also update your posted job as you desire. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;