import React from 'react'

const Projects = () => {
  return (
    <section className="projects section " id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work</span>
      <div className="projects__container container grid">
        <div className="projects__content">
          <i className='uil uil projects__icon'></i>
          <h3 className="projects__title">Project 1</h3>
        </div>
        <span className='projects__buttton'>View More
          <i className='uil uil-arrow-right projects__button-icon '></i>
          {/* pop page */}
          <div className="projects__modal">
            <div className="projects__modal-content">
              <i className='uil uil-times projects__modal-close'></i>

              <h3 className="projects__modal-title"></h3>
              <p className="projects__modal-description">
                A Url-shortner, with data analysis and graphical representation
              </p>
              <ul className="projects__modal-projects grid">
                <li className='projects__modal-projects'>
                  <i className='uil uil-circle-check projects__modal-icon'></i>
                  <p className="projects__modal-info">Develop the url shortner</p>
                </li>
                <li className='projects__modal-projects'>
                  <i className='uil uil-circle-check projects__modal-icon'></i>
                  <p className="projects__modal-info">application web page</p>
                </li>
                <li className='projects__modal-projects'>
                  <i className='uil uil-circle-check projects__modal-icon'></i>
                  <p className="projects__modal-info">Develop the url shortner</p>
                </li>
                <li className='projects__modal-projects'>
                  <i className='uil uil-circle-check projects__modal-icon'></i>
                  <p className="projects__modal-info">Develop the url shortner</p>
                </li>
                <li className='projects__modal-projects'>
                  <i className='uil uil-circle-check projects__modal-icon'></i>
                  <p className="projects__modal-info">Develop the url shortner</p>
                </li>
              </ul>
            </div>
          </div>
        </span>
      </div>
    </section>
  )
}

export default Projects