import { useState, useEffect } from "react";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const response = await fetch("/api/patients"); // Modify this URL based on your API endpoint
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        setError("Failed to load patients");
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Patients Details</h1>
      <div className="space-y-4">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md"
          >
            <h2 className="font-semibold text-xl">{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            {/* Render more patient information */}
            <div>{/* Render blood pressure chart or other diagnostics */}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsList;
