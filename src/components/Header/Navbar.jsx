import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../../storage/cartContext'

export default function Navbar() {

const {totalProducts} = useContext(cartContext)

  return (
    <>
        <header className="header">
          <Link to="/">
            <div className="logo">
                <img src={logo} alt="Logo de la marca"/>
            </div>
          </Link>
            <nav>
            <ul className="nav-links">
                    <li>
                      <Link to="/">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/category/Marvel">Comics</Link>
                    </li>
                    <li>
                      <Link to="/category/Funko">Funkos</Link>
                    </li>
                    <li>
                      <Link to="/">Nosotros</Link>
                      </li>
                    <li>
                      <Link to="/">Contacto</Link>
                    </li>
            </ul>            
            </nav>
            <Link to="/carrito">
              <button className="btn" >Carrito</button>
              <span>{totalProducts() || ''}</span>
            </Link>
        </header>
    </>
  )
}