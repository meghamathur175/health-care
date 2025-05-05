import React from 'react';
import "../styles/footer.css";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <h4>Life+ Ambulance</h4>
          <p>Helping you in emergencies with quick and reliable ambulance services, anytime, anywhere.</p>
        </div>

        {/* Social Media Links (replacing Quick Links) */}
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul className="social-links">
            <li><i className="fab fa-facebook-f"></i> Facebook</li>
            <li><i className="fab fa-twitter"></i> Twitter</li>
            <li><i className="fab fa-instagram"></i> Instagram</li>
            <li><i className="fab fa-linkedin-in"></i> LinkedIn</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: support@lifeplus.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Bangalore, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Life+. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
