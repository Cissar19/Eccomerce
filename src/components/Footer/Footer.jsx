import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
      return (
        <footer>
          <div className="grid-container">
            <div className="grid-item">
              <h3>Nosotros</h3>
              <p>Somos una joven tienda de comics y funkos!</p>
            </div>
            <div className="grid-item">
              <h3>Contactate</h3>
              <p>Phone: 569 9496 0258</p>
              <p>Email: contacto@gmail.com</p>
            </div>
            <div className="grid-item">
              <h3>Siguenos en:</h3>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>
        </footer>
      );
    }
    

