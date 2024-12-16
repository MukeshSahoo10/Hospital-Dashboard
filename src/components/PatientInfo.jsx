import React from "react";
import { Calendar, Phone, Shield } from "lucide-react";

export const PatientInfo = ({
  name,
  dateOfBirth,
  phone,
  emergencyContact,
  insuranceProvider,
  profilePicture,
}) => {
  return (
    <div className="bg-white mt-19 p-6 rounded-xl">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <img
          src={profilePicture || "default-profile.png"} // Fallback if no profile picture is provided
          alt={name}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h2 className="text-2xl font-bold mb-6">{name}</h2>

        <div className="w-full space-y-4">
          {/* Date of Birth */}
          <div className="flex items-center space-x-3">
            <Calendar size={20} className="text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Date Of Birth</div>
              <div>{dateOfBirth || "Not Available"}</div> {/* Fallback */}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-3">
            <Phone size={20} className="text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Contact Info</div>
              <div>{phone || "Not Available"}</div> {/* Fallback */}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="flex items-center space-x-3">
            <Phone size={20} className="text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Emergency Contact</div>
              <div>{emergencyContact || "Not Available"}</div> {/* Fallback */}
            </div>
          </div>

          {/* Insurance Provider */}
          <div className="flex items-center space-x-3">
            <Shield size={20} className="text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Insurance Provider</div>
              <div>{insuranceProvider || "Not Available"}</div> {/* Fallback */}
            </div>
          </div>
        </div>

        {/* Show all information button */}
        <button className="mt-6 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors">
          Show All Information
        </button>
      </div>
    </div>
  );
};
