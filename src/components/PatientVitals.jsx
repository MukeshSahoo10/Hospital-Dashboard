import React from "react";

import HeartBPM from "../assests/HeartBPM.svg";
import Respirate from "../assests/respiratoryrate.svg";
import Temperature from "../assests/temperature.svg";

const PatientVitals = ({ respiratoryRate, temperature, heartRate }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {/* Respiratory Rate Card */}
      <div className="bg-blue-50 p-4 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <img src={Respirate} alt="Respiratory Rate" className="w-6 h-6" />
          <span className="text-sm text-gray-600">Respiratory Rate</span>
        </div>
        <div className="text-2xl font-bold">{respiratoryRate} bpm</div>
        <div className="text-sm text-gray-500">Normal</div>
      </div>

      {/* Temperature Card */}
      <div className="bg-red-50 p-4 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <img src={Temperature} alt="Temperature" className="w-6 h-6" />
          <span className="text-sm text-gray-600">Temperature</span>
        </div>
        <div className="text-2xl font-bold">{temperature}°F</div>
        <div className="text-sm text-gray-500">Normal</div>
      </div>

      {/* Heart Rate Card */}
      <div className="bg-pink-50 p-4 rounded-xl">
        <div className="flex items-center space-x-2 mb-2">
          <img src={HeartBPM} alt="Heart Rate" className="w-6 h-6" />
          <span className="text-sm text-gray-600">Heart Rate</span>
        </div>
        <div className="text-2xl font-bold">{heartRate} bpm</div>
        <div className="text-sm text-red-500">Lower than average</div>
      </div>
    </div>
  );
};

export default PatientVitals;
