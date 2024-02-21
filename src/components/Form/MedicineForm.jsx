import { useState ,useEffect} from "react";
import "./MedicineForm.css"; // Add your CSS file for styling

export default function MedicineForm({
  isOpen,
  onClose,
  selectedPrescription,
}) {
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    age: "",
    address: "",
    contact: "",
    date: "",
    description: "",
    medicineDetails: {
      name: "",
      dosage: "",
      frequency: "",
    },
  });

  useEffect(() => {
    if (selectedPrescription) {
      // Use the patient information from selectedPrescription to populate the form
      setPatientDetails({
        name: selectedPrescription.name || "",
        age: selectedPrescription.age || "",
        address: selectedPrescription.address || "",
        contact: selectedPrescription.contact || "",
        date: selectedPrescription.date || "",
        description: selectedPrescription.description || "",
        medicineDetails: {
          name: "",
          dosage: "",
          frequency: "",
        },
      });
    }
  }, [selectedPrescription]);

  const handlePatientChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleMedicineChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      medicineDetails: {
        ...prevDetails.medicineDetails,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with patientDetails, e.g., make an API call to update details
    console.log("Form submitted:", patientDetails);
    onClose(); // Close the form after submission
  };

  return (
    <div className={`medicine-form-${isOpen ? "open" : ""}`}>
      <div className="form-content">
        {selectedPrescription && (
          <>
            <form onSubmit={handleSubmit} className="form-inputs">
              <div className="patient-info">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={patientDetails.name}
                    onChange={handlePatientChange}
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="text"
                    name="age"
                    value={patientDetails.age}
                    onChange={handlePatientChange}
                  />
                </label>
                <label>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={patientDetails.address}
                    onChange={handlePatientChange}
                  />
                </label>
                <label>
                  Contact:
                  <input
                    type="text"
                    name="contact"
                    value={patientDetails.contact}
                    onChange={handlePatientChange}
                  />
                </label>
                <label>
                  Date:
                  <input
                    type="text"
                    name="date"
                    value={patientDetails.date}
                    onChange={handlePatientChange}
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    name="description"
                    value={patientDetails.description}
                    onChange={handlePatientChange}
                  />
                </label>
              </div>
              <div className="medicine-info">
                <label>
                  Medicine Name:
                  <input
                    type="text"
                    name="name"
                    value={patientDetails.medicineDetails.name}
                    onChange={handleMedicineChange}
                  />
                </label>
                <label>
                  Dosage:
                  <input
                    type="text"
                    name="dosage"
                    value={patientDetails.medicineDetails.dosage}
                    onChange={handleMedicineChange}
                  />
                </label>
                <label>
                  Frequency:
                  <input
                    type="text"
                    name="frequency"
                    value={patientDetails.medicineDetails.frequency}
                    onChange={handleMedicineChange}
                  />
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
      {selectedPrescription && (
        <img
          src={`data:image/png;base64,${selectedPrescription.image}`}
          alt="prescription"
          className="prescription-image"
        />
      )}
    </div>
  );
}
