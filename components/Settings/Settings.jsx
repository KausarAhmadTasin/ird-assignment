import React from "react";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineWidgets } from "react-icons/md";
import { TfiLayersAlt } from "react-icons/tfi";
import { PiToggleLeftFill } from "react-icons/pi";

const Settings = () => {
  return (
    <div className="lg:block w-[23rem] lg:w-[16.5rem] m-2 bg-white p-5 mt-3 rounded-3xl relative lg:mr-0 mr-9 right-14 lg:right-0 lg:h-[52.125rem]">
      <h2 className="text-center font-bold text-xl text-[#393939] mb-3">
        Settings
      </h2>
      <div className="flex items-center h-14 gap-3 font-normal mb-3 text-[#868686] pt-4 text-base bg-gray-100 rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 text-xl rounded-full w-8 h-8 ">
          <IoLanguageOutline className="text-gray-400" />
        </div>
        <p>Language Settings</p>
      </div>

      <div className="flex items-center h-14 gap-3 font-normal mb-3 text-[#868686] pt-4 text-base bg-gray-100 rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 text-xl rounded-full w-8 h-8 ">
          <TfiLayersAlt className="text-gray-400" />
        </div>
        <p>General Settings</p>
      </div>

      <div className="flex items-center h-14 gap-3 font-normal mb-3 text-[#868686] pt-4 text-base bg-gray-100 rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 text-xl rounded-full w-8 h-8 ">
          <MdOutlineWidgets className="text-gray-400" />
        </div>
        <p>Font Settings</p>
      </div>

      <div className="flex border-l-4 h-14  border-[#1FA45B] items-center gap-3 pt-4 font-medium text-[#1FA45B] text-base bg-gray-100 rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 text-xl rounded-full w-8 h-8 ">
          <MdOutlineWidgets />
        </div>
        <p>Appearance Settings</p>
      </div>

      <div className="border border-gray-200 flex items-center justify-between pt-8 pb-4 pl-4 pr-4 text-gray-600">
        <p>Night Mode</p>
        <PiToggleLeftFill className="text-2xl" />
      </div>
    </div>
  );
};

export default Settings;
