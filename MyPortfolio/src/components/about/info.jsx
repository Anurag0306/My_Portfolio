import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <spam className="about__subtitle">2+ Years</spam>
        </div>
        <div className="about__box">
            <i class="bx bx-briefcase about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <spam className="about__subtitle">10+ Projects</spam>
        </div>
        <div className="about__box">
            <i class="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
            <spam className="about__subtitle">Online 24/7</spam>
        </div>
    </div>
  )
}

export default info