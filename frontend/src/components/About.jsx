import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-section text-white text-center d-flex align-items-center justify-content-center" 
        style={{ 
          background: 'url(/images/beach.jpg) center/cover no-repeat', 
          height: '70vh', 
          position: 'relative' 
        }}
      >
        <div className="overlay bg-dark bg-opacity-50 position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
          <h1 className="display-3 fw-bold text-uppercase">Discover Sri Lanka with Us</h1>
        </div>
      </section>
      
      {/* About Section */}
      <Container fluid className="about-section py-5 bg-light">
        <Row className="justify-content-center text-center">
          <Col md={10} lg={8}>
            <p className="lead fs-4 mb-4">
              Welcome to <strong>Kushan Lanka Tours</strong>, your trusted guide to exploring the wonders of Sri Lanka! With years of experience traveling across this beautiful island, we offer firsthand knowledge of its top destinations, hidden gems, and authentic experiences.
            </p>
            <p className="fs-5 mb-5">
              From stunning beaches and lush rainforests to ancient temples and vibrant cities, our team of local experts is here to help you uncover the best of Sri Lanka. Whether you're an adventure seeker, a culture lover, or a nature enthusiast, we provide tailored travel tips to make your journey unforgettable.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          position: relative;
          background-size: cover;
          background-position: center;
          height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-section h1 {
          z-index: 2;
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-section {
          padding-top: 60px;
          padding-bottom: 60px;
          background-color: #f9f9f9;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2rem;
          }

          .about-section p {
            font-size: 1.125rem;
          }
        }

        @media (min-width: 992px) {
          .hero-section h1 {
            font-size: 4rem;
          }

          .about-section p {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;
