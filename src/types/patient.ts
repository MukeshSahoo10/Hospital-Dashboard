// types/patient.js

export const BloodPressure = {
  systolic: {
    value: 0,
  },
  diastolic: {
    value: 0,
  },
};

export const Diagnostic = {
  name: '',
  description: '',
  status: '',
};

export const LabResult = {
  type: '',
  results: [], // Can be more specific if needed
};

export const Vitals = {
  respiratoryRate: 0,
  temperature: 0,
  heartRate: 0,
};

export const Patient = {
  id: 0,
  name: '',
  gender: '',
  age: 0,
  profilePicture: '',
  dateOfBirth: '',
  phone: '',
  image: '',
  emergencyContact: '',
  insuranceProvider: '',
  bloodPressure: [
    {
      date: '',
      systolic: 0,
      diastolic: 0,
    },
  ],
  vitals: Vitals,
  diagnosticList: [Diagnostic],
  labResults: [LabResult],
};
