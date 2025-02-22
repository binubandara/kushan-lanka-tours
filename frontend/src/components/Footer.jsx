import React from 'react';
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="py-3 my-4 bg-light border-top">
      <Container>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-body-secondary">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-body-secondary">About</a>
          </li>
          <li className="nav-item">
            <a href="/tours" className="nav-link px-2 text-body-secondary">Tours</a>
          </li>
          <li className="nav-item">
            <a href="/gallery" className="nav-link px-2 text-body-secondary">Gallery</a>
          </li>
          <li className="nav-item">
            <a href="/signup" className="nav-link px-2 text-body-secondary">Sign Up</a>
          </li>
        </ul>

        <div className="text-center mb-3">
          <h5>Contact Us</h5>
          <p>Email: <a href="mailto:kushanc403@gmail.com" className="text-body-secondary text-decoration-none">kushanc403@gmail.com</a></p>
          <p>Phone: <a href="tel:+94765752342" className="text-body-secondary text-decoration-none">0765752342</a></p>
          <p>Contact Person: Kushan Chathuranga</p>
        </div>

        <p className="text-center text-body-secondary">© 2025 Kushan Lanka Tours, Inc</p>
      </Container>
    </footer>
  );
};

export default Footer;
