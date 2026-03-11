import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'About', path: '/', hash: '#about' },
    { name: 'Experience', path: '/', hash: '#experience' },
    { name: 'Projects', path: '/', hash: '#projects' },
    { name: 'Skills', path: '/', hash: '#skills' },
    { name: 'Freelancing Team', path: '/freelancing-team' },
    { name: 'Contact', path: '/', hash: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);

    // If navigating to a hash on the same page
    if (link.hash && location.pathname === link.path) {
      const element = document.querySelector(link.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // If navigating to a different page with hash
    else if (link.hash && location.pathname !== link.path) {
      navigate(link.path + link.hash);
    }
    // If navigating to a page without hash
    else {
      navigate(link.path);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-display font-bold">
            <span className="text-white">Prashant</span>
            <span className="text-primary"> Raj</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path + (link.hash || '')}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-gray-300 hover:text-primary transition-colors ${
                  location.pathname === link.path && !link.hash ? 'text-primary' : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-dark-card rounded-lg mt-2 py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path + (link.hash || '')}
                onClick={(e) => handleNavClick(e, link)}
                className="block px-4 py-2 text-gray-300 hover:text-primary hover:bg-dark-lighter transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
