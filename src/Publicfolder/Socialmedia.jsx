import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div>
      {/* Internal CSS */}
      <style jsx>{`
        .header {
            backgroundColor: linear-gradient(90deg, #0d1b2a, #1b263b, #0d6efd);
          color: white;
          font-family: Arial, sans-serif;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 50px;
          background: #2a2b4c;
        }

        .contact-info {
          display: flex;
          gap: 25px;
          align-items: center;
        }

        .contact-info span {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: white;
          font-weight: 500;
        }

        .contact-icon {
          color: white;
        }

        /* Social Icons Styles */
        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          border: 1px solid white;
          transition: all 0.3s ease;
          font-size: 14px;
          cursor: pointer;
        }

        .social-icon svg {
          width: 14px;
          height: 14px;
        }

        /* Hover Effects - White background with colored icon */
        .social-icon.facebook:hover {
          background-color: white;
          color: #1877F2;
          border-color: white;
          transform: scale(1.1);
        }

        .social-icon.twitter:hover {
          background-color: white;
          color: #1DA1F2;
          border-color: white;
          transform: scale(1.1);
        }

        .social-icon.linkedin:hover {
          background-color: white;
          color: #0077B5;
          border-color: white;
          transform: scale(1.1);
        }

        .social-icon.instagram:hover {
          background-color: white;
          color: #E4405F;
          border-color: white;
          transform: scale(1.1);
        }

        /* 📱 Mobile Responsive Styles */
        @media (max-width: 768px) {
          .top-bar {
            flex-direction: column;
            gap: 12px;
            padding: 12px 20px;
            text-align: center;
          }
          
          .contact-info {
            flex-direction: column;
            gap: 8px;
          }
          
          .social-icons {
            gap: 10px;
          }
          
          .social-icon {
            width: 30px;
            height: 30px;
          }

          .social-icon svg {
            width: 12px;
            height: 12px;
          }
        }

        @media (max-width: 480px) {
          .top-bar {
            padding: 10px 15px;
          }
          
          .contact-info span {
            font-size: 12px;
          }
          
          .social-icon {
            width: 28px;
            height: 28px;
          }

          .social-icon svg {
            width: 11px;
            height: 11px;
          }
        }
      `}</style>

      {/* Header JSX */}
      <header className="header">
        <div className="top-bar">
          <div className="contact-info">
            <span className="phone">
              <FaPhone className="contact-icon" />
              +1 (805) 538-2647
            </span>
            <span className="email">
              <FaEnvelope className="contact-icon" />
              sales@aimarklabs.com
            </span>
          </div>
          
          <div className="social-icons">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Socialmedia;