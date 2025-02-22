import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const imageSets = [
  Array.from({length: 6}, (_, i) => ({
    src: `/images/image${i+1}.jpg`,
    alt: `Tour Image ${i+1}`,
  })),
  Array.from({length: 6}, (_, i) => ({
    src: `/images/Image${i+1}Set2.jpg`,
    alt: `Tour Image ${i+1}`,
  })),
  Array.from({length: 5}, (_, i) => ({
    src: `/images/Image${i+1}Set3.jpg`,
    alt: `Tour Image ${i+1}`,
  }))
];

const ImageGallery = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);       

  const openLightbox = (setIndex, imageIndex) => {
    setCurrentSetIndex(setIndex);
    setPhotoIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <div className="main-container">
      <Container className="gallery-container py-5 mt-5">
        {imageSets.map((set, setIndex) => (
          <Row className="mb-5 justify-content-center" key={setIndex}>
            {set.map((image, imageIndex) => (
              <Col key={imageIndex} lg={4} md={6} className="mb-4">
                <Card className="image-card shadow-sm" onClick={() => openLightbox(setIndex, imageIndex)}>
                  <div className="image-wrapper">
                    <Card.Img 
                      src={image.src} 
                      alt={image.alt} 
                      className="gallery-image"
                    />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={imageSets[currentSetIndex].map(img => ({ src: img.src }))}
        index={photoIndex}
        styles={{ 
          container: { backgroundColor: "rgba(0, 0, 0, 0.85)" },
          button: { 
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" }
          }
        }}
      />

      <style jsx global>{`
        .main-container {
          margin: 0 auto;
          max-width: 1200px; 
        }

        .gallery-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .image-card {
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .image-card:hover {
          transform: translateY(-5px); /* Subtle hover effect */
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Deepen shadow on hover */
        }

        .image-wrapper {
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .image-card:hover .gallery-image {
          transform: scale(1.05); /* Slight zoom effect */
        }

        @media (max-width: 767px) {
          .gallery-image {
            object-position: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
