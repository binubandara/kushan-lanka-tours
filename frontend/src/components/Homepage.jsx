import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="homepage-banner position-relative d-flex align-items-center text-center">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        <div className="container position-relative">
          <div className="hero-content py-5">
            <h1 
              className="text-white display-4 mb-4" 
              style={{
                fontFamily: "'Georgia', serif",
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                padding: '10px',
                marginTop: '3rem'
              }}
            >
              Unveil the Beauty of Sri Lanka – Where Every Journey Becomes a Story.
            </h1>
            <p className="text-white lead px-3 mb-4">
              Discover breathtaking landscapes, rich culture, and unforgettable adventures with Kushan Lanka Tours—your trusted local guide.
            </p>
          </div>
        </div>
      </div>

      {/* Discover Sri Lanka Section */}
      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom text-center text-primary ">Discover Sri Lanka</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* Cultural Heritage */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="/images/culture.jpg" className="card-img-top" alt="Cultural Heritage" />
              <div className="card-body">
                <p className="card-text">
                  Explore ancient cities, sacred temples, and UNESCO World Heritage Sites like Sigiriya and Anuradhapura.
                </p>
              </div>
            </div>
          </div>
          {/* Stunning Beaches */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="/images/beach.jpg" className="card-img-top" alt="Stunning Beaches" />
              <div className="card-body">
                <p className="card-text">
                  From the golden shores of Bentota to the surfing paradise of Arugam Bay, Sri Lanka’s coastline has something for everyone.
                </p>
              </div>
            </div>
          </div>
          {/* Breathtaking Nature */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="/images/nature.jpg" className="card-img-top" alt="Breathtaking Nature" />
              <div className="card-body">
                <p className="card-text">
                  Wander through misty mountains, lush tea plantations, and wildlife-filled rainforests in Ella and Nuwara Eliya.
                </p>
              </div>
            </div>
          </div>
          {/* Wildlife & Safari Adventures */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="/images/safari.jpg" className="card-img-top" alt="Wildlife Safari" />
              <div className="card-body">
                <p className="card-text">
                  Witness elephants, leopards, and rare birds in national parks like Yala and Udawalawe.
                </p>
              </div>
            </div>
          </div>
          {/* Authentic Cuisine */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="/images/food.jpg" className="card-img-top" alt="Sri Lankan Cuisine" />
              <div className="card-body">
                <p className="card-text">
                  Experience the rich flavors of Sri Lankan cuisine, from spicy rice and curry to fresh seafood delights.
                </p>
              </div>
            </div>
          </div>
          {/* Adventure Activities */}
          <div className="col">
            <div className="card shadow-sm">
              <img src="/images/adventure.jpg" className="card-img-top" alt="Adventure" />
              <div className="card-body">
                <p className="card-text">
                  Whether it's hiking, white-water rafting, or surfing, Sri Lanka offers thrilling adventures for every traveler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tours Section */}
      <Container className="my-5">
        <h2 className="pb-2 border-bottom text-center text-primary mb-5 ">Featured Tours</h2>
        <Row className="g-4 text-center justify-content-center">
          <Col md={5}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/images/snorkeling.jpg" alt="Snorkeling Tour" />
              <Card.Body>
                <Card.Title>Snorkeling & Diving</Card.Title>
                <Card.Text>Explore the underwater beauty of Sri Lanka’s coral reefs.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/images/bicycle.jpg" alt="Bicycle Tour" />
              <Card.Body>
                <Card.Title>Tour de Galle</Card.Title>
                <Card.Text>Discover Galle’s history and nature on a cycling adventure.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Link to="/tours">
            <Button variant="primary" className="px-4 py-2">View More Tours</Button>
          </Link>
        </div>
      </Container>

      {/* Experience Section */}
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
                <p className="card-text">Tourists visit from more than 50 destinations around Sri Lanka.</p>
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

export default Home;
