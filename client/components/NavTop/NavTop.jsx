import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiSolidDownArrow } from "react-icons/bi";

const NavTop = () => {
  return (
    <div className="flex justify-between  items-center max-h-14 mt-2 -ml-10 lg:ml-4 mb-4">
      <p className="lg:text-2xl text-base  font-poppins font-semibold text-[#393939]">
        Dua Page
      </p>
      <div className="flex ml-[100px] gap-x-56">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="border text-sm mx-2 lg:text-base lg:min-w-96 w-52 border-gray-300 rounded-lg lg:px-4 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <div className="absolute inset-y-0 text-gray-500 text-xl right-0 lg:right-2 m-1 mr-3 lg:m-1 rounded pl-3 flex items-center pointer-events-none bg-gray-200  lg:p-2">
            <IoSearchSharp />
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <div className="text-4xl">
            <CgProfile />
          </div>
          <BiSolidDownArrow />
        </div>
      </div>
    </div>
  );
};

export default NavTop;
