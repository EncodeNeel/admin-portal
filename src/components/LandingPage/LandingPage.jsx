import { useState } from "react";
import "./LandingPage.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function LandingPage() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const items = ["One", "Two", "Three", "Four", "Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"];
  return (
    <div className="list-container">
      <div className="langingPage-container ">
        <nav id="navbar" className={isNavVisible ? "show" : "hide"}>
          <div className="container-menus">
            <div className="menu-item">Recent Orders</div>
            <div className="menu-item">Pending Orders</div>
            <div className="menu-item">Completed Order</div>
          </div>
          <ul className="list-items-container">
            {items.map((item, index) => (
              <div key={index} className="list-item">
                {item}
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
      <div>
        <div className="content">
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            provident, quibusdam, doloribus, quas voluptates quae quia
            exercitationem quidem quod tempore aperiam. Quod, voluptatum
            exercitationem. Quos, voluptates. Quod, voluptatum exercitationem.
          </p>
        </div>
      </div>
    </div>
  );
}
