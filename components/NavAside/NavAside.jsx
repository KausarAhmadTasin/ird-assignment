import Image from "next/image";
import React from "react";
import { IoHome, IoBulbOutline, IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineWidgets } from "react-icons/md";
import { PiBookmarkSimple } from "react-icons/pi";
import { TbMedicineSyrup } from "react-icons/tb";
import { IoMdBook } from "react-icons/io";
import { BiSolidDonateHeart } from "react-icons/bi";

const NavAside = () => {
  return (
    <div className="w-[6.25rem] flex items-center justify-between flex-col text-2xl ml-6 mt-4  h-[57.9375rem] rounded-3xl pb-8 pt-8 bg-white">
      <div>
        {" "}
        <Image
          src={`https://i.ibb.co/W6HsS9n/f49d5cb63d9a02588cddba5d7357d8ab.png`}
          alt=""
          width={65}
          height={65}
        />
      </div>
      <div className="flex flex-col gap-y-9   text-[#868686]">
        <div className="bg-[#E8F0F5] rounded-full w-10 h-10 text-xl flex items-center justify-center">
          {" "}
          <IoHome />
        </div>
        <div className="bg-[#E8F0F5] rounded-full w-10 h-10 text-xl flex items-center justify-center">
          <MdOutlineWidgets />
        </div>
        <div className="bg-[#E8F0F5] rounded-full w-10 h-10 text-xl flex items-center justify-center">
          {" "}
          <IoBulbOutline />
        </div>
        <div className="bg-[#E8F0F5] rounded-full w-10 h-10 text-xl flex items-center justify-center">
          {" "}
          <PiBookmarkSimple />
        </div>
        <div className="bg-[#E8F0F5] rounded-full w-10 h-10 text-xl flex items-center justify-center">
          <TbMedicineSyrup />
        </div>
        <div className="bg-[#E8F0F5] rounded-full w-10 h-10 text-xl flex items-center justify-center">
          {" "}
          <IoChatbubblesOutline />
        </div>
        <div className="bg-[#E8F0F5] rounded-full w-10 h-10 text-xl flex items-center justify-center">
          {" "}
          <IoMdBook />
        </div>
      </div>
      <div className="bg-[#1FA45B] w-14 text-white p-4 rounded-lg text-2xl">
        <BiSolidDonateHeart />
      </div>
    </div>
  );
};

export default NavAside;
