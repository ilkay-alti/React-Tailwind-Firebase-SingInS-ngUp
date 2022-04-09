import React from "react";

const UserRegister = () => {
  return (
    <div className="flex h-screen">
      <div className=" w-0  md:w-[50%] lg:w-[60%] bg-gradient-to-t from-[#021B79] to-[#0575E6] justify-between flex flex-col">
        <div className="m-1 md:m-auto  lg:mx-24 text-white">
          <div className="md:text-3xl lg:text-5xl font-bold">GoFinance</div>
          <div className="md:text-sm lg:text-lg mt-2 mb-8">
            The most popular peer to peer lending at SEA
          </div>
          <button
            className="bg-[#0575E6] md:px-6 lg:px-8 text-xs rounded-full py-2"
            type="button w-[20px]"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="w-full md:w-[50%] lg:w-[40%] bg-white flex flex-col justify-between ">
        <div className="w-[307px] m-auto">
          <div className="text-4xl lg:text-5xl mb-[3px] font-extrabold">
            Hello !
          </div>
          <div className="text-xs lg:text-sm text-current mb-[40px] ">
            Sign Up to Get Started
          </div>

          <input
            className="w-[307px] h-[57px]  my-[16px] border-4 border-[#EEE] focus:border-[#0575E6] focus:outline-none focus:shadow-outline rounded-full px-4 "
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-[307px] h-[57px]  my-[16px] border-4 border-[#EEE] focus:border-[#0575E6] focus:outline-none focus:shadow-outline rounded-full px-4 "
            type="email"
            placeholder="Email Address"
          />
          <input
            className="w-[307px] h-[57px]  my-[16px] border-4 border-[#EEE] focus:border-[#0575E6] focus:outline-none focus:shadow-outline rounded-full px-4 "
            type="password"
            placeholder="Password"
          />

          <button className="w-[307px] h-[57px] rounded-full text-white bg-[#0575E6]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
