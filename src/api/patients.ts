const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';

// Basic Authentication credentials
const username = 'coalition';
const password = 'skills-test';

// Encode the credentials in base64
const base64Credentials = btoa(username + ':' + password);

// Fetch patients data
export const fetchPatients = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response

    const formattedPatients = data.map((patient) => ({
      id: patient.id,
      name: patient.name,
      gender: patient.gender,
      age: patient.age,
      profilePicture: patient.profile_picture,
      dateOfBirth: patient.date_of_birth,
      phone: patient.phone_number,
      emergencyContact: patient.emergency_contact,
      insuranceProvider: patient.insurance_type,
      bloodPressure: patient.diagnosis_history.map((history) => ({
        date: `${history.month} ${history.year}`,
        systolic: history.blood_pressure?.systolic?.value || 0,
        diastolic: history.blood_pressure?.diastolic?.value || 0,
      })),
      vitals: {
        respiratoryRate: patient.vitals?.respiratory_rate || 0,
        temperature: patient.vitals?.temperature || 0,
        heartRate: patient.vitals?.heart_rate || 0,
      },
      diagnosticList: patient.diagnostic_list.map((diagnostic) => ({
        problem: diagnostic.name,
        description: diagnostic.description,
        status: diagnostic.status,
      })),
      labResults: patient.lab_results.map((result) => ({
        type: result,
        results: [],
      })),
    }));

    return formattedPatients; // Return the formatted data
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
};
