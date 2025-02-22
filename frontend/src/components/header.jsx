import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomepage = location.pathname === "/";

  const headerStyle = {
    transition: 'background-color 0.3s ease',
    backgroundColor: isHomepage && !isScrolled ? 'transparent' : 'white',
    boxShadow: isHomepage && !isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    color: isHomepage && !isScrolled ? 'white' : 'black',
    transition: 'color 0.3s ease'
  };

  const mobileMenuStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    padding: '1rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: isMenuOpen ? 'block' : 'none',
    zIndex: 1000
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' }
  ];

  return (
    <header className="fixed-top" style={headerStyle}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/" style={linkStyle}>
            <img
             // src="/images/logo.png"
             // alt="Kushan Lanka Tours Logo"
             // className="me-2"
              //style={{ width: "30px", height: "auto" }}
            />
            <span className="fw-bold">Kushan Lanka Tours</span>
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            style={linkStyle}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <Link
                    className="nav-link px-3 nav-link-hover"
                    to={link.path}
                    style={linkStyle}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-lg-none" style={mobileMenuStyle}>
            <ul className="navbar-nav mb-2">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.name}>
                  <Link
                    className="nav-link py-2 nav-link-hover"
                    to={link.path}
                    style={{ color: 'black' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
