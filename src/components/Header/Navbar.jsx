import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
  return (
    <>
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo de la marca"/>
            </div>
            <nav>
            <ul className="nav-links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Comics</a></li>
                    <li><a href="/">Informatica</a></li>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Contacto</a></li>
            </ul>            
            </nav>
            <a className="btn" href="/"><button>Carrito</button></a>
        </header>
    </>
  )
}
