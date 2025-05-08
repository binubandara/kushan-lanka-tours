import React from 'react';
import { ArrowRight, CheckCircle, MapPin, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BicycleTour = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/login');  // Redirect to the login page
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="col-12 col-lg-8 mx-auto">
        <div className="card border-0 bg-light rounded-4 p-4">
          <h1 className="display-6 fw-bold mb-4 text-primary">Tour de Galle – Full Day Adventure</h1>
          <img 
            src="/images/plantation.jpg" 
            className="rounded-4 w-100 mb-4"
            alt="Bicycle tour"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />

          <div className="mb-4">
            <h2 className="h4 fw-bold mb-3 text-primary">Explore the Charm of Galle on Two Wheels!</h2>
            <p>Embark on a full-day cycling journey through the scenic landscapes of Galle, Sri Lanka. Pedal through picturesque villages, lush plantations, and captivating historical sites. Get ready for a truly immersive experience in the heart of Sri Lanka's natural beauty and rich culture!</p>
          </div>

          <div className="mb-4">
            <h3 className="h5 fw-bold mb-3 text-primary">Our Fascinating Route Includes:</h3>
            <ul className="list-group">
              {["Milidduwa", "Ettilegoda", "Nugaduwa", "Polhena", "Kataluwa", "Koggala Lake", "Cinnamon Island (Walking Tour)", "Unawatuna Beach for lunch", "Galle Fort"].map((place, index) => (
                <li key={index} className="list-group-item d-flex align-items-center gap-2">
                  <MapPin size={18} className="text-danger" /> {place}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="h5 fw-bold mb-3 text-primary">Highlights of the Experience:</h3>
            <ul className="list-group">
              {[
                "Cycle through expansive paddy fields and tea estates",
                "Ride past rubber plantations and marshlands",
                "Discover serene lagoons and enjoy a boat ride on Koggala Lake",
                "Visit a local tea factory and stroll through the Cinnamon Plantation",
                "Explore Rumassala Nature Resort and soak in the natural beauty",
                "End your day with a tour of the historic Galle Fort"
              ].map((highlight, index) => (
                <li key={index} className="list-group-item d-flex align-items-center gap-2">
                  <Activity size={18} className="text-primary" /> {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="h5 fw-bold mb-3 text-primary">What's Included:</h3>
            <ul className="list-group">
              {[
                "Boat tour on Koggala Lake",
                "Lunch at Unawatuna Beach",
                "Expert guidance from Kushan Chathuranga, a licensed tour guide",
                "Fully licensed by Sri Lanka Tourism"
              ].map((item, index) => (
                <li key={index} className="list-group-item d-flex align-items-center gap-2">
                  <CheckCircle size={18} className="text-success" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-4 p-4 mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h5 fw-bold mb-1">Ready for an Unforgettable Cycling Adventure?</h4>
                <p className="mb-0 text-muted">Secure your spot today!</p>
              </div>
              <div className="text-end">
                <div className="h4 fw-bold mb-1">$85 USD</div>
                <div className="small text-muted">per person</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={handleBookNowClick}
              className="btn btn-primary rounded-pill px-5 py-3 d-inline-flex align-items-center gap-2"
            >
              Book Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BicycleTour;
