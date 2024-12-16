import React from "react";
import { Settings, MoreVertical } from "lucide-react";
import { Navigation } from "./Navigation";
import TestLogo from "../assests/TestLogo.svg";
import doctor from "../assests/doctor.png";

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm w-full">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto w-full">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={TestLogo} alt="Tech.Care Logo" className="h-8" />
        </div>

        {/* Navigation Section */}
        <div className="flex-1 flex justify-center">
          <Navigation />
        </div>

        {/* Profile and Actions Section */}
        <div className="flex items-center space-x-4">
          {/* Profile Information */}
          <div className="flex items-center">
            <img
              src={doctor}
              alt="Dr. Jose Simmons"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-2">
              <div className="text-sm font-medium">Dr. Jose Simmons</div>
              <div className="text-xs text-gray-500">General Practitioner</div>
            </div>
          </div>

          {/* Settings and More Actions */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings size={18} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreVertical size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};
