import { useState, useEffect } from "react";
import "./LandingPage.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { getAllPrescriptions } from "../../apis/Interceptor";

export default function LandingPage() {
  const [isNavVisible, setNavVisibility] = useState(true);
  const [prescriptions, setPrescriptions] = useState([]);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  useEffect(() => {
    // Call the function to get all prescriptions
    fetchAllPrescriptions();
  }, []);

  const fetchAllPrescriptions = async () => {
    try {
      const response = await getAllPrescriptions();
      setPrescriptions(response.prescriptions || []);
    } catch (error) {
      console.error("Error fetching prescriptions:", error.message);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const handlePrescriptionClick = (prescription) => {
    setSelectedPrescription(prescription);
  };

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
                <p>{prescription.name}</p>
                {/* Display the image */}
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
      <div className="content">
        {selectedPrescription && (
          <>
            {/* <p>Name: {selectedPrescription.name}</p>
            <p>Age: {selectedPrescription.age}</p> */}

            {/* Add more details as needed */}
          </>
        )}
        {selectedPrescription && selectedPrescription.image && (
          <img
            className="prescription-image"
            src={`data:image/jpeg;base64,${selectedPrescription.image}`}
            alt="prescription"
          />
        )}
      </div>
    </div>
  );
}
