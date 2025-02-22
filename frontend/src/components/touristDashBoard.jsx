import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import sigiriya from '../assets/sigiriya.jpg';
import adamsPeak from '../assets/adams.jpg';
import nineArch from '../assets/nine.jpg';
import bcImage from '../assets/bc2.jpg';
import galleFort from '../assets/galle.jpg'; // Add image imports
import yala from '../assets/yala.jpg';

import 'bootstrap-icons/font/bootstrap-icons.css';

const TouristDashboard = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section with Background Image */}
      <div
        className="d-flex justify-content-center align-items-center vh-100 position-relative"
        style={{
          backgroundImage: `url(${bcImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#f8f9fa", // Light color for text
        }}
      >
        {/* Overlay to improve text readability */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0, 0, 0, 0.5)", // Dark transparent overlay
          }}
        ></div>

        <div className="text-center p-5 rounded position-relative" style={{ zIndex: 1 }}>
          <h1 className="display-3 mb-3" style={{ color: "#0d6efd" }}>Explore Sri Lanka</h1>
          <p className="lead" style={{ color: "#B0E0E6" }}>Discover the beauty of Sri Lanka’s incredible destinations.</p>
          <a href="#attractions" className="btn btn-light btn-lg mt-3 shadow-lg" style={{ color: "#4682B4" }}>
            Get Started
          </a>
        </div>
      </div>

      {/* Tourist Attractions Section */}
      <div id="attractions" className="container py-5">
        <h2 className="text-center mb-5" style={{ color: "#0d6efd", fontWeight: "bold" }}>
          Sri Lankan Tourist Attractions
        </h2>
        <div className="row g-4">
          {/* Card 1: Sigiriya Rock Fortress */}
          <div className="col-md-4">
            <div className="card shadow-lg h-100 border-0">
              <div className="overflow-hidden" style={{ borderRadius: "10px 10px 0 0" }}>
                <img src={sigiriya} className="card-img-top" alt="Sigiriya Rock Fortress" style={{ transition: "transform 0.5s ease", height: "250px", objectFit: "cover" }} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: "#2980B9", fontWeight: "bold" }}>Sigiriya Rock Fortress</h5>
                <p className="card-text">
                  Known as the "Eighth Wonder of the World," Sigiriya is an ancient rock fortress that boasts rich history, stunning frescoes, and breathtaking views.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Ella Nine Arch Bridge */}
          <div className="col-md-4">
            <div className="card shadow-lg h-100 border-0">
              <div className="overflow-hidden" style={{ borderRadius: "10px 10px 0 0" }}>
                <img src={nineArch} className="card-img-top" alt="Ella Nine Arch Bridge" style={{ transition: "transform 0.5s ease", height: "250px", objectFit: "cover" }} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: "#2980B9", fontWeight: "bold" }}>Ella Nine Arch Bridge</h5>
                <p className="card-text">
                  A beautiful blend of architectural brilliance and nature, the Nine Arch Bridge offers scenic train rides through lush landscapes.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Adam's Peak */}
          <div className="col-md-4">
            <div className="card shadow-lg h-100 border-0">
              <div className="overflow-hidden" style={{ borderRadius: "10px 10px 0 0" }}>
                <img src={adamsPeak} className="card-img-top" alt="Adam's Peak" style={{ transition: "transform 0.5s ease", height: "250px", objectFit: "cover" }} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: "#2980B9", fontWeight: "bold" }}>Adam's Peak</h5>
                <p className="card-text">
                  A spiritual pilgrimage site, Adam's Peak offers an awe-inspiring sunrise view from its summit, revered by multiple faiths.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Galle Fort */}
          <div className="col-md-4">
            <div className="card shadow-lg h-100 border-0">
              <div className="overflow-hidden" style={{ borderRadius: "10px 10px 0 0" }}>
                <img src={galleFort} className="card-img-top" alt="Galle Fort" style={{ transition: "transform 0.5s ease", height: "250px", objectFit: "cover" }} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: "#2980B9", fontWeight: "bold" }}>Galle Fort</h5>
                <p className="card-text">
                  A UNESCO World Heritage Site, Galle Fort offers stunning views of the Indian Ocean and a walk through centuries-old colonial architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Yala National Park */}
          <div className="col-md-4">
            <div className="card shadow-lg h-100 border-0">
              <div className="overflow-hidden" style={{ borderRadius: "10px 10px 0 0" }}>
                <img src={yala} className="card-img-top" alt="Yala National Park" style={{ transition: "transform 0.5s ease", height: "250px", objectFit: "cover" }} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: "#2980B9", fontWeight: "bold" }}>Yala National Park</h5>
                <p className="card-text">
                  Experience the wilderness at Yala, Sri Lanka’s most famous national park, known for its wildlife and the highest density of leopards in the world.
                </p>
              </div>
            </div>
          </div>

         
         

        </div>
      </div>

      {/* New Experience Section */}
      <div id="experience" className="container py-5 bg-light text-center">
        <h2 className="text-center mb-5" style={{ color: "#0d6efd" }}>We Stand With Many Stories And Experience</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card border-0">
              <div className="card-body">
                <i className="bi bi-people display-4 text-primary"></i>
                <h5 className="card-title mt-3" style={{ color: "#4682B4" }}>200 Tourists</h5>
                <p className="card-text">Welcoming hundreds of tourists every year.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0">
              <div className="card-body">
                <i className="bi bi-globe display-4 text-primary"></i>
                <h5 className="card-title mt-3" style={{ color: "#4682B4" }}>Over 50 Destinations</h5>
                <p className="card-text">Tourists visit from more than 50 destinations around the Sri lanka.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0">
              <div className="card-body">
                <i className="bi bi-star display-4 text-primary"></i>
                <h5 className="card-title mt-3" style={{ color: "#4682B4" }}>Top-Rated Destination</h5>
                <p className="card-text">Ranked as one of the most sought-after travel destinations.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0">
              <div className="card-body">
                <i className="bi bi-heart display-4 text-primary"></i>
                <h5 className="card-title mt-3" style={{ color: "#4682B4" }}>Unforgettable Memories</h5>
                <p className="card-text">Creating memories that last a lifetime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TouristDashboard;
