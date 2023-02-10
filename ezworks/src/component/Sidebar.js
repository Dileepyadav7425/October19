import React from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

function Sidebar({isMenuOpen}) {
  return (
    <div className={`sideBar ${isMenuOpen && 'openSidebar'} `}>
      <div className="sidebarFix">
        <div className="sideBarLeft">
          <ul>
            <li>
              <a href="">
                <img src="/imgs/logo.png" className="logo" />
              </a>
            </li>
            <li className="emptyBox"></li>
            <li className="emptyBox"></li>
            <li className="emptyBox"></li>
          </ul>
        </div>
        <div className="sideBarContent">
          <div className="bgWhite">
            <div className="contentTop">
              <div className="logoContainer">
                <h4>Clients</h4>
                <span>Creation Time</span>
              </div>
              <span className="topIcon">
                <AiOutlinePlus />
              </span>
            </div>
            <div className="searchInput">
              <input placeholder="Company, Entity, User, Domain, Service, Location" />
              <span>
                <AiOutlineSearch />
              </span>
            </div>
          </div>

          <div className="listWrapper">
            <select>
              <option selected>April 2021</option>
              <option>April 2022</option>
              <option>April 2023</option>
              <option>April 2024</option>
            </select>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            ].map((item, index) => (
              <div className="sideContentCard">
                <div className="cardRow">
                  <h6>company name</h6>
                  <h6>code</h6>
                </div>
                <div className="cardRow">
                  <h6>8 entities</h6>
                  <h6>64 users</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
