import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo de la marca"/>
            </div>
            <nav>
            <ul className="nav-links">
                    <li>
                      <Link to="/">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/detalle">Comics</Link>
                    </li>
                    <li>
                      <Link to="/">Funkos</Link>
                    </li>
                    <li>
                      <Link to="/">Nosotros</Link>
                      </li>
                    <li>
                      <Link to="/">Contacto</Link>
                    </li>
            </ul>            
            </nav>
            <Link className="btn" to="/"><button>Carrito</button> </Link>
        </header>
    </>
  )
}