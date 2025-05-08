import React from 'react';
import { ArrowRight, CheckCircle, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SnorkelingTour = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/login');  // Redirect to the login page
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="card border-0 bg-light rounded-4 p-4">
            <h1 className="display-6 fw-bold mb-4 text-primary">Snorkeling & Diving Adventure</h1>
            <img 
              src="/images/reef.jpg" 
              className="rounded-4 w-100 mb-4"
              alt="Snorkeling adventure"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            
            <div className="mb-4">
              <h2 className="h4 fw-bold mb-3 text-primary">Dive into the Wonders of the Deep Blue!</h2>
              <p>Explore the vibrant underwater world with an incredible snorkeling experience! If you've ever dreamed of swimming alongside exotic marine life but didn't want the complexities of diving gear, this tour is your perfect chance to experience it all.</p>
            </div>

            <div className="mb-4">
              <h3 className="h5 fw-bold mb-3 text-primary">Our Comprehensive Snorkeling Package Includes:</h3>
              <ul className="list-group">
                {[ 
                  "Professional-grade diving mask for clear, unobstructed views",
                  "Comfortable, easy-to-use snorkel for effortless breathing",
                  "High-performance swim fins for better mobility underwater",
                  "Optional wetsuits to keep you comfortable",
                  "Expert instructors to guide you"
                ].map((item, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center gap-2">
                    <CheckCircle size={18} className="text-success" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="h5 fw-bold mb-3 text-primary">Highlights of the Experience:</h3>
              <ul className="list-group">
                {[
                  "Swim with vibrant fish, sea turtles, and other fascinating creatures",
                  "Perfect for beginners and seasoned snorkelers alike",
                  "Explore the best spots in Sri Lanka, like Mirissa's serene waters"
                ].map((highlight, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center gap-2">
                    <Activity size={18} className="text-primary" /> {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-4 p-4 mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="h5 fw-bold mb-1">Ready to Explore the Underwater Paradise?</h4>
                  <p className="mb-0 text-muted">Secure your spot today!</p>
                </div>
                <div className="text-end">
                  <div className="h4 fw-bold mb-1">$30 USD</div>
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
    </div>
  );
};

export default SnorkelingTour;
