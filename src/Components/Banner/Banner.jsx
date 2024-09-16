

const Banner = () => {
    return (
        <div className="flex mt-16" >
            <div className="p-6" >
              <h1 className="text-7xl mt-8 font-medium">One Step Closer To Your<br /> 
                  <span className="text-sky-400 ">Dream Job</span>
              </h1> 
              <br />
              <p className="font-medium">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it.
                 <br />
                Manage all your job application from start to finish.
             </p>

                <button className="btn btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold mt-4"> Get Started</button>

            </div>
            <div>
                <img className="w-[1100px] my-[-32px]" src="https://i.ibb.co.com/dQQ0KFG/Whats-App-Image-2023-09-27-at-14-54-28.jpg" alt="" />
            </div>

        </div>
    );
};

export default Banner;