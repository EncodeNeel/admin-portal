import { useState, useEffect } from "react";
import "./LandingPage.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { getAllOrdersByPharmacyName } from "../../apis/Interceptor";
import MedicineForm from "../Form/MedicineForm";

export default function LandingPage() {
  const [isNavVisible, setNavVisibility] = useState(true);
  const [prescriptions, setPrescriptions] = useState([]);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [isMedicineFormOpen, setMedicineFormOpen] = useState(false);

  useEffect(() => {
    fetchAllPrescriptions();
  }, []);

  const fetchAllPrescriptions = async () => {
    try {
      const response = await getAllOrdersByPharmacyName();
      setPrescriptions(response.orders || []);
    } catch (error) {
      console.error("Error fetching prescriptions:", error.message);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const handlePrescriptionClick = (prescription) => {
    setSelectedPrescription(prescription);
    setMedicineFormOpen(true);
  };

  const closeMedicineForm = () => {
    setMedicineFormOpen(false);
  };

  console.log(prescriptions);

  return (
    <div className="list-container">
      <div className="langingPage-container">
        <nav id="navbar" className={isNavVisible ? "show" : "hide"}>
          <div className="container-menus">
            <div className="menu-item">Recent Orders</div>
            <div className="menu-item">Pending Orders</div>
            <div className="menu-item">Completed Order</div>
          </div>
          <ul className="list-items-container">
            {prescriptions.map((prescription, index) => (
              <div
                key={index}
                className={`list-item ${
                  prescription === selectedPrescription ? "selected" : ""
                }`}
                onClick={() => handlePrescriptionClick(prescription)}
              >
                <p>{prescription.prescription_details.name}</p>
              </div>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <button id="navToggle" onClick={toggleNav} className="sidebar">
          {isNavVisible ? (
            <MdKeyboardArrowLeft size={40} />
          ) : (
            <MdKeyboardArrowRight size={40} />
          )}
        </button>
      </div>

      <MedicineForm
        isOpen={isMedicineFormOpen}
        onClose={closeMedicineForm}
        selectedPrescription={selectedPrescription}
      />
    </div>
  );
}
