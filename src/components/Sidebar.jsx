import React, { useState } from "react";
import { Search } from "lucide-react"; // Assuming you're using the 'lucide-react' icon package

const Sidebar = ({ patients, onSelectPatient }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to calculate age from dateOfBirth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    if (
      month < birthDate.getMonth() ||
      (month === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  // Filter patients based on search query
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white h-screen flex flex-col">
      {/* Search bar */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Patients"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
          />
          <Search
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* Patient list with scroll effect */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {filteredPatients.length === 0 ? (
          <p className="text-center text-gray-500">No patients found</p>
        ) : (
          filteredPatients.map((patient) => (
            <li
              key={patient.id}
              className="p-2 cursor-pointer hover:bg-emerald-100 rounded-lg flex items-center space-x-4"
              onClick={() => onSelectPatient(patient)}
            >
              {/* Profile Image */}
              <img
                src={patient.profilePicture}
                alt={patient.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-medium">{patient.name}</h2>
                <p className="text-sm text-gray-500">
                  Gender: {patient.gender} | Age:{" "}
                  {calculateAge(patient.dateOfBirth)}
                </p>
              </div>
            </li>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
