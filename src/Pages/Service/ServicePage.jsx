import React from "react";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <div className="service-page">
      <section className="hero">
        <h2>sdfsgfsdgsdbhdfhdjdjdjdjdfnhdfnd fhdnrhrgsrgsdgsdgsdgsdgsdgsd</h2>
      </section>

      <section className="features">
        <div className="text-left">
          <h3>Features section</h3>
          <p>sdfsgfsdgsdbhdfhdjdjdjdfnhdfndhfdrhrgsrgsdgsdgsdgsdgsd</p>
          <p>sdgsdsvdsbsdgsddsvsggdfhfbsdgdsdgdvcxvcxbcxbxxbxfbxfbx</p>
          <p>dgsvsdhrgbsbndfhrbfsndfhrgbxbcntdfbnfcbxfbfxfbxxx</p>
        </div>
        <div className="image-box large"></div>
      </section>

      {/* Features List Section */}
      <section className="features-list">
        <h3>Features list section</h3>
        <div className="list-content">
          <div className="text-left">
            <p>sdfsgfsdgsdbhdfhdjdjdjdfnhdfndhfdrhrgsrgsdgsdgsdgsdgsd</p>
            <p>sdgsdsvdsbsdgsddsvsggdfhfbsdgdsdgdvcxvcxbcxbxxbxfbxfbx</p>
            <p>dgsvsdhrgbsbndfhrbfsndfhrgbxbcntdfbnfcbxfbfxfbxxx</p>
          </div>
          <div className="image-box medium"></div>
        </div>
      </section>


      <section className="testimonials">
        <h3>Testimonials</h3>
        <div className="cards">
          <div className="card-item">
            <div className="card"></div>
            <p>dgsvsdhrgbsbndfhrbfsndfhrgxx</p>
          </div>
          <div className="card-item">
            <div className="card"></div>
            <p>dgsvsdhrgbsbndfhrbfsndfx</p>
          </div>
          <div className="card-item">
            <div className="card"></div>
            <p>dgsvsdhrgbsbndfhrbfsndfhrg</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
