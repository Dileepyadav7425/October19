import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import TopContent from "../component/TopContent";
import { AiFillEyeInvisible, AiFillFilePdf } from "react-icons/ai";
import { ImDownload3 } from "react-icons/im";
import { FaRegEdit, FaAngleUp, FaAngleDown } from "react-icons/fa";

function Home() {
  const [activeRow, setActiveRow] = useState(1);
  const [activeTab, setActiveTab] = useState(1)
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="pageWrapper">
      <Sidebar isMenuOpen={isMenuOpen} />
      <div className="contentWreapper">
        <TopContent handleMenuOpen={() => handleMenuOpen()} />

        <div className="midSection">
          <div className="secRow">
            <h5>
              <AiFillFilePdf />
              Locus Films Private Limited
            </h5>
            <button>Edit</button>
          </div>
          <div className="midRowTwo">
            <div class="singleDetail">
              <span>company role</span>
              <h6>LUCF</h6>
              <span>Company Logo</span>
              <h6>unavailable</h6>
            </div>
            <div class="singleDetail">
              <span>Domain</span>
              <h6>@lucasfils.com</h6>
              <h6>@lucastower.com</h6>
              <h6>@lucastower.com</h6>
              <h6>+5 others</h6>
            </div>
          </div>
        </div>
        <div className="tabWrapper">
          <h6 className={activeTab == 1 && "active"} onClick={() => setActiveTab(1)}>entity</h6>
          <h6 className={activeTab == 2 && "active"} onClick={() => setActiveTab(2)}>invoice codes</h6>
          <h6 className={activeTab == 3 && "active"} onClick={() => setActiveTab(3)}>users</h6>
        </div>
        <div className="tableWrapper">
          <div className="tableWrapperHead">
            <h6>billing location</h6>
            <h6>entity name</h6>
            <h6>entity code</h6>
            <h6>msla valid through</h6>
            <h6>file sharing</h6>
          </div>
          <div className="tableBody">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <>
                <div
                  className="collapseWrapper"
                  onClick={() => setActiveRow(item)}
                >
                  <h6>riyaddh, kingdom of saudi arabia</h6>
                  <h6>lucas filsm private limited</h6>
                  <h6>lucf01</h6>
                  <h6>3 june 2022 - 5 june 2030</h6>
                  <h6>external</h6>
                  <span className="collapseBtn">
                    {activeRow == item ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
                {activeRow === item && (
                  <div className="collapseDetails">
                    <div className="detailsWrapper">
                      <div className="singleDetail">
                        <span>address</span>
                        <h6>line 1</h6>
                        <h6>line 2</h6>
                        <h6>city country</h6>
                        <h6>zip code</h6>
                        <span>charge code / PO number</span>
                        <h6>required</h6>
                      </div>
                      <div className="singleDetail">
                        <span>company registration number</span>
                        <h6>UICE98984D</h6>
                        <span>company registration validity</span>
                        <h6>5 june 2025</h6>
                        <span>duration of file storage</span>
                        <h6>90 days</h6>
                      </div>
                      <div className="singleDetail">
                        <span>TAX registration number</span>
                        <h6>AHR435454FF454</h6>
                        <span>TRN Validity</span>
                        <h6>5 june 2025</h6>
                        <span>currency</span>
                        <h6>US dollar($)</h6>
                      </div>
                      <div className="singleDetail">
                        <h4 className="editBtn">
                          <FaRegEdit />
                        </h4>
                      </div>
                    </div>
                    <div className="detailsWrapper">
                      <div className="singleDetail w-70">
                        <span>MSLA</span>
                        <h6>
                          20200916 EXlucasfils_signed by geory.pdf
                          <span>
                            <AiFillEyeInvisible />
                          </span>
                          <span>
                            <ImDownload3 />
                          </span>
                        </h6>
                      </div>
                      <div className="singleDetail w-30">
                        <span>VAT-WAT</span>
                        <h6>5% + 5%</h6>
                      </div>
                    </div>
                    <div className="detailsWrapper">
                      <div className="w-100">
                        <span>corporate price as per MSLA</span>
                        <div className="table">
                          <div className="tableHeade">
                            <div className="tableRow">
                              <p>service</p>
                              <p>units</p>
                              <p>list price</p>
                              <p>offered price</p>
                              <p>discount</p>
                            </div>
                          </div>
                          <div className="tableBody">
                            <div className="tableRow">
                              <p>arabic language translator</p>
                              <p>words</p>
                              <p>0.2 AED</p>
                              <p>0.09 AED</p>
                              <p>10% (19%)</p>
                            </div>
                            <div className="tableRow">
                              <p>arabic language translator</p>
                              <p>words</p>
                              <p>0.2 AED</p>
                              <p>0.09 AED</p>
                              <p>10% (19%)</p>
                            </div>
                            <div className="tableRow">
                              <p>arabic language translator</p>
                              <p>words</p>
                              <p>0.2 AED</p>
                              <p>0.09 AED</p>
                              <p>10% (19%)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
