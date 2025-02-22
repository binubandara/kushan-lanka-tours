import React from 'react';
import { Link } from 'react-router-dom';

const Tours = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row g-4">
        {/* First Tour Card */}
        <div className="col-12 col-md-6">
          <div className="card rounded-4 border-0 bg-light h-100">
            <div className="row g-0 h-100 flex-column flex-md-row">
              <div className="col-12 col-md-5">
                <img 
                  src="/images/snorkeling.jpg" 
                  className="img-fluid rounded-top rounded-md-start h-100 w-100 object-fit-cover" 
                  alt="Snorkeling Tour" 
                  style={{ aspectRatio: { xs: '16/9', md: '1/1' } }}
                />
              </div>
              <div className="col-12 col-md-7">
                <div className="card-body p-3 d-flex flex-column h-100">
                  <h5 className="card-title mt-2 mb-1 fw-bold text-primary">Snorkeling & Diving Tour</h5>
                  <p className="card-text small text-muted mb-3 mt-4">
                  Dive into the crystal-clear waters of Sri Lanka with our Snorkeling & Diving Adventure! 
                  Swim alongside sea turtles, colorful fish, and explore vibrant coral reefs. Perfect for all skill levels, 
                  this tour offers an unforgettable underwater experience.
                  </p>
                  <div className="text-center mt-2 mb-4 mb-md-0">
                    <Link to="/tours/snorkeling-diving" className="btn btn-primary rounded-pill px-4">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Tour Card */}
        <div className="col-12 col-md-6">
          <div className="card rounded-4 border-0 bg-light h-100">
            <div className="row g-0 h-100 flex-column flex-md-row">
              <div className="col-12 col-md-5">
                <img 
                  src="/images/bicycle.jpg" 
                  className="img-fluid rounded-top rounded-md-start h-100 w-100 object-fit-cover" 
                  alt="Bicycle Tour" 
                  style={{ aspectRatio: { xs: '16/9', md: '1/1' } }}
                />
              </div>
              <div className="col-12 col-md-7">
                <div className="card-body p-3 d-flex flex-column h-100">
                  <h5 className="card-title mt-2 mb-1 fw-bold text-primary">Tour de Galle: Full Day Bicycle Tour</h5>
                  <p className="card-text small text-muted mb-3 mt-4">
                  Pedal through Sri Lanka’s charming countryside, explore vibrant plantations, and uncover the cultural gems of Galle. 
                  From Koggala Lake to the historic Galle Fort, this full-day adventure offers a perfect blend of nature and heritage.
                  </p>
                  <div className="text-center mt-2 mb-4 mb-md-0">
                    <Link to="/tours/tour-de-galle" className="btn btn-primary rounded-pill px-4">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;