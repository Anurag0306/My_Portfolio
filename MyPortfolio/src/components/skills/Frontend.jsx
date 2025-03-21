import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
            {/* First Column */}
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills_level">Advance</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills_level">Advance</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">TailwindCSS</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>

            {/* Second Column */}
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">TypeScript</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend
