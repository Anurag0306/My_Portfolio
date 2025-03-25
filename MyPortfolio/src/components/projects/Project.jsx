import React,{useState} from 'react'
import './project.css'
import image1 from '../../assets/shorturl.jpg'
import image2 from '../../assets/email.jpg'
import image3 from '../../assets/stockphoto.jpg'
import image4 from '../../assets/dataanalysis1.jpg'
import image5 from '../../assets/dataanalysis2.jpg'



const Project = () => {

  const [toogleState, setToogleState] = useState(0);

  const toogleTab = (index) =>{
    setToogleState(index);
    
  }
  return (
    <section className="project section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work</span>
      <div className="project__container container grid">
        {/* first */}
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={image1} alt="" />
          </div>
          <h3>URL Shortener Application</h3>
          <div className="project__item-cta">
            <span
             className='project__button' 
              onClick={
                ()=>toogleTab(1)
                }>
                  View More
              <i className='uil uil-arrow-right project__button-icon '></i>
            </span>
             {/* pop page */}
              <div className={toogleState===1?"projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                  <i onClick={() => setToogleState(0)} className='uil uil-times projects__modal-close'></i>

                  <h3 className="projects__modal-title">URL Shortener Application</h3>
                    <p className="projects__modal-description">
                      A Url-shortner, with data analysis and graphical representation
                    </p>
                  <ul className="projects__modal-projects grid">
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">application web page</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                  </ul>
                </div>
              </div>
            <a href="http://jocular-medovik-2cf099.netlify.app" className='project__button' target='_blank'>
              Live Demo
              <i className='ui uil-angle-double-right project__button-icon '></i>
            </a>
          </div>
        </article>
        {/* second */}
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={image2} alt="" />
          </div>
          <h3>URL Shortener Application</h3>
          <div className="project__item-cta">
            <span
             className='project__button' 
              onClick={
                ()=>toogleTab(1)
                }>
                  View More
              <i className='uil uil-arrow-right project__button-icon '></i>
            </span>
             {/* pop page */}
              <div className={toogleState===1?"projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                  <i onClick={() => setToogleState(0)} className='uil uil-times projects__modal-close'></i>

                  <h3 className="projects__modal-title">Email Assistant</h3>
                    <p className="projects__modal-description">
                      A Url-shortner, with data analysis and graphical representation
                    </p>
                  <ul className="projects__modal-projects grid">
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">application web page</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                  </ul>
                </div>
              </div>
            <a href="http://jocular-medovik-2cf099.netlify.app" className='project__button' target='_blank'>
              Live Demo
              <i className='ui uil-angle-double-right project__button-icon '></i>
            </a>
          </div>
        </article>
        {/* third */}
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={image3} alt="" />
          </div>
          <h3>URL Shortener Application</h3>
          <div className="project__item-cta">
            <span
             className='project__button' 
              onClick={
                ()=>toogleTab(1)
                }>
                  View More
              <i className='uil uil-arrow-right project__button-icon '></i>
            </span>
             {/* pop page */}
              <div className={toogleState===1?"projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                  <i onClick={() => setToogleState(0)} className='uil uil-times projects__modal-close'></i>

                  <h3 className="projects__modal-title">Stock Photo Generator</h3>
                    <p className="projects__modal-description">
                      A Url-shortner, with data analysis and graphical representation
                    </p>
                  <ul className="projects__modal-projects grid">
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">application web page</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                  </ul>
                </div>
              </div>
            <a href="http://jocular-medovik-2cf099.netlify.app" className='project__button' target='_blank'>
              Live Demo
              <i className='ui uil-angle-double-right project__button-icon '></i>
            </a>
          </div>
        </article>
        {/* fourth */}
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={image4} alt="" />
          </div>
          <h3>URL Shortener Application</h3>
          <div className="project__item-cta">
            <span
             className='project__button' 
              onClick={
                ()=>toogleTab(1)
                }>
                  View More
              <i className='uil uil-arrow-right project__button-icon '></i>
            </span>
             {/* pop page */}
              <div className={toogleState===1?"projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                  <i onClick={() => setToogleState(0)} className='uil uil-times projects__modal-close'></i>

                  <h3 className="projects__modal-title">Data Analysis</h3>
                    <p className="projects__modal-description">
                      A Url-shortner, with data analysis and graphical representation
                    </p>
                  <ul className="projects__modal-projects grid">
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">application web page</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                  </ul>
                </div>
              </div>
            <a href="http://jocular-medovik-2cf099.netlify.app" className='project__button' target='_blank'>
              Live Demo
              <i className='ui uil-angle-double-right project__button-icon '></i>
            </a>
          </div>
        </article>
        {/* fifth */}
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={image5} alt="" />
          </div>
          <h3>URL Shortener Application</h3>
          <div className="project__item-cta">
            <span
             className='project__button' 
              onClick={
                ()=>toogleTab(1)
                }>
                  View More
              <i className='uil uil-arrow-right project__button-icon '></i>
            </span>
             {/* pop page */}
              <div className={toogleState===1?"projects__modal active-modal" : "projects__modal"}>
                <div className="projects__modal-content">
                  <i onClick={() => setToogleState(0)} className='uil uil-times projects__modal-close'></i>

                  <h3 className="projects__modal-title">Data Analysis</h3>
                    <p className="projects__modal-description">
                      A Url-shortner, with data analysis and graphical representation
                    </p>
                  <ul className="projects__modal-projects grid">
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">application web page</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                    <li className='projects__modal-project'>
                      <i className='uil uil-check-circle projects__modal-icon'></i>
                      <p className="projects__modal-info">Develop the url shortner</p>
                    </li>
                  </ul>
                </div>
              </div>
            <a href="http://jocular-medovik-2cf099.netlify.app" className='project__button' target='_blank'>
              Live Demo
              <i className='ui uil-angle-double-right project__button-icon '></i>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project