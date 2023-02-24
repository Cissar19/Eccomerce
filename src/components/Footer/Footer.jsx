import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
      return (
        <footer>
          <div className="grid-container">
            <div className="grid-item">
              <h3>About Us</h3>
              <p>Some text about who we are and what we do.</p>
            </div>
            <div className="grid-item">
              <h3>Contact Us</h3>
              <p>Phone: 123-456-7890</p>
              <p>Email: info@example.com</p>
            </div>
            <div className="grid-item">
              <h3>Follow Us</h3>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>
        </footer>
      );
    }
    

