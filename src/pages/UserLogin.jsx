import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEmail, changePassword, login } from "../redux/authSlice";

const UserLogin = () => {
  //read the user from the store
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const err = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.target.value));
  };
  const handleSubmit = (e) => {
    dispatch(login({ email, password }));
  };

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
            Hello Again!
          </div>
          <div className="text-sm lg:text-xs text-current mb-[40px] ">
            Welcome Back
          </div>
          {err && <div className="text-red-500">{err}</div>}

          <input
            className="w-[307px] h-[57px]  my-[16px] border-4 border-[#EEE] focus:border-[#0575E6] focus:outline-none focus:shadow-outline rounded-full px-4 "
            type="text"
            placeholder="Email Address"
            onChange={handleEmailChange}
            value={email}
          />
          <input
            className="w-[307px] h-[57px]  my-[16px] border-4 border-[#EEE] focus:border-[#0575E6] focus:outline-none focus:shadow-outline rounded-full px-4 "
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />

          <button
            onClick={handleSubmit}
            className="w-[307px] h-[57px] rounded-full text-white bg-[#0575E6]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
