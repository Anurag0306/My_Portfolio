import React from 'react'
import "./home.css"
import Social from './social'
import ScrollDown from './ScrollDown' 
import Data from './Data'

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__conatiner container grid">
            <div className="home__content grid">
                <Social />

                <div className="home__image"></div>
                <Data />
            </div>
            <ScrollDown />
        </div>
        </section>
  )
}

export default Home