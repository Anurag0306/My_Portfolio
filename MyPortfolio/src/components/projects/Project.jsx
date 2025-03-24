import React from 'react'

const Project = () => {
  return (
    <section className="project section" id="project">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Work</span>
      <div className="projects__container container grid">
        <article className='project__item'>
          <div className='project__item-image'>
            <img src="" alt="" />
          </div>

          <h2>This is a project title</h2>
          <a href="" className='button' target='_blank'>GitHub</a>
          <a href="" className='button button--flex buttton-primary' target='_blank'>
            Live Demo</a>

        </article>
      </div>
    </section>
  )
}

export default Project