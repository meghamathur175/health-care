import React from 'react'
import Navbar from '../components/navbar'
import FooterSection from '../components/footer'
import bannerPage from "../images/Landing.png"
import "../styles/landing.css"; 

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div className="landing-wrapper">
        <div className="banner-container">
          <img src={bannerPage} alt="Landing Banner" className="banner-image" />
        </div>
      </div>

      <FooterSection />
    </>
  );
}

export default LandingPage;
