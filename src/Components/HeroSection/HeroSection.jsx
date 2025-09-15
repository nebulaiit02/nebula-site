import React from 'react'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <>
            <div className="hero-wrapper">
                <div className="hero-section"></div>

                <div className="hero-circle"></div>

                <div className="hero-boxes hero-box1"></div>
                <div className="hero-boxes hero-box2"></div>
                
                <div className="content-box">
                    <h2>Amazing Websites, Hassle Free</h2>
                    <p>Nebula empowers businesses and learners with IT services & EdTech solutions.</p>
                    <button>Schedule your consultation now</button>
                </div>
            </div>
        </>
    )
}
