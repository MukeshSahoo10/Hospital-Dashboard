import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { Header } from "./components/Header";
import { PatientInfo } from "./components/PatientInfo";
import BloodPressureChart from "./components/BloodPressureChart";
import PatientVitals from "./components/PatientVitals";
import { fetchPatients } from "./api/patients"; // Import fetchPatients

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const fetchedPatients = await fetchPatients(); // Fetch patients data from API
        setPatients(fetchedPatients);
        setSelectedPatient(fetchedPatients[0] || null); // Default to first patient
      } catch (err) {
        setError("Failed to load patients");
        console.error("Error loading patients:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error || patients.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-red-500">{error || "No patients available"}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-4 overflow-y-auto hidden lg:block">
          <Sidebar
            patients={patients}
            onSelectPatient={(patient) => setSelectedPatient(patient)}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {selectedPatient ? (
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Left Section (BloodPressureChart + PatientVitals) */}
              <div className="lg:col-span-2 space-y-6">
                <BloodPressureChart
                  data={selectedPatient.bloodPressure || []}
                />
                <PatientVitals
                  respiratoryRate={
                    selectedPatient.vitals?.respiratoryRate || 20
                  }
                  temperature={selectedPatient.vitals?.temperature || 98.6}
                  heartRate={selectedPatient.vitals?.heartRate || 78}
                />
              </div>

              {/* Right Section (PatientInfo) */}
              <div>
                <PatientInfo
                  name={selectedPatient.name}
                  dateOfBirth={selectedPatient.dateOfBirth}
                  gender={selectedPatient.gender}
                  phone={selectedPatient.phone}
                  emergencyContact={selectedPatient.emergencyContact}
                  insuranceProvider={selectedPatient.insuranceProvider}
                  profilePicture={selectedPatient.profilePicture}
                />
              </div>
            </div>
          ) : (
            <div className="text-gray-500">
              Select a patient to view details
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
