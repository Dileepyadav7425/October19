import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function TopContent({handleMenuOpen}) {
  return (
    <div className="contentTop">
        <button className="mobileMenuIcon" onClick={() => handleMenuOpen()}>
          <AiOutlineMenuUnfold />
        </button>
      <div className="dropdownWrapper">
        <div className="profileDropdown">
          <span>Hi Abhishek</span>
          <img className="" src="/imgs/profile.jpg" />
        </div>
        <ul className="doropdownMenu">
          <li>Account</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default TopContent;
