import { useState, useEffect } from "react";
import { getAllMedicines } from "../../apis/Interceptor";
import "./MedicineForm.css";

export default function MedicineForm({
  isOpen,
  onClose,
  selectedPrescription,
}) {
  console.log(selectedPrescription);
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
    suggestedMedicines: [],
  });

  useEffect(() => {
    if (selectedPrescription) {
      setPatientDetails({
        name: selectedPrescription.name || "",
        age: selectedPrescription.age || "",
        address: selectedPrescription.address || "",
        contact: selectedPrescription.contact || "",
        date: selectedPrescription.date || "",
        description: selectedPrescription.description || "",
        medicineDetails: {
          name: "",
        },
        suggestedMedicines: [],
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

    if (name === "name" && value.trim() !== "") {
      console.log("Calling getAllMedicines with value:", value.trim());
      getAllMedicines(value.trim())
        .then((data) => {
          console.log("API response:", data.significantLink); // Log the API response
          setPatientDetails((prevDetails) => ({
            ...prevDetails,
            suggestedMedicines: data.significantLink || [],
          }));
        })
        .catch((error) => {
          console.error("Error fetching suggested medicines:", error.message);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", patientDetails);
    onClose(); // Close the form after submission
  };

  const handleConfirmOrder = () => {};

  const handleSelectedMedicineChange = (e) => {
    const selectedMedicineName = e.target.value;
    setPatientDetails((prevDetails) => ({
      ...prevDetails,
      medicineDetails: {
        ...prevDetails.medicineDetails,
        name: selectedMedicineName,
      },
    }));
    // Additional logic if needed
  };

  return (
    <div className={`medicine-form-${isOpen ? "open" : ""}`}>
      <div className="form-content">
        {12 && (
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
                  {patientDetails.suggestedMedicines.length > 0 && (
                    <div className="suggested-meds-container">
                      <label htmlFor="selectedMedicine">Select Medicine:</label>
                      <select
                        id="selectedMedicine"
                        name="selectedMedicine"
                        value={patientDetails.medicineDetails.name} // Set the value to the selected medicine
                        onChange={(e) => handleSelectedMedicineChange(e)}
                      >
                        <option value="">Select a medicine</option>
                        {patientDetails.suggestedMedicines.map((medicine) => (
                          <option key={medicine.id} value={medicine.name}>
                            {medicine.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
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
              <div className="order-btns">
                <button type="submit" onClick={() => handleConfirmOrder()}>
                  Confirm Order
                </button>
                <button type="reject">Reject Order</button>
              </div>
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
