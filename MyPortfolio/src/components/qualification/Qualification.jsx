import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification" className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>
      
      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* Education Tab */}
          <div 
            className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} 
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          {/* Experience Tab */}
          <div 
            className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} 
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          {/* EDUCATION */}
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            
            {/* Java Developer - Left Side */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Java Developer</h3>
                <span className="qualification__subtitle">Online</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024-2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div> {/* Empty div to push "BBA" to right */}
            </div>

            {/* BBA - Right Side */}
            <div className="qualification__data">
              <div></div> {/* Empty div to push "BBA" to right */}
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">BBA</h3>
                <span className="qualification__subtitle">Osmania University - Hyderabad</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019-2022
                </div>
              </div>
            </div>

            {/* Intermediate - Left Side */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">Narayana Institute - Hyderabad</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017-2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div> {/* Empty div for alignment */}
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            
            {/* Business Data Analyst - Left Side */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Business Data Analyst</h3>
                <span className="qualification__subtitle">Hayden Trading Pvt Ltd</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div> {/* Empty div for alignment */}
            </div>

            {/* Paid Internship - Right Side */}
            <div className="qualification__data">
              <div></div> {/* Empty div to push to right */}
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Paid Internship</h3>
                <span className="qualification__subtitle">Online</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June - December 2024
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
