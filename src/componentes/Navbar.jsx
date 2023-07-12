import React from 'react'
import CardWidget from './CardWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <a className="logo" href="#"><h1>Veggie</h1></a>
        <ul className="menu">
            <li><a className="menu-link" href="#">Inicio</a></li>
            <li><a className="menu-link" href="#">Tratamientos</a></li>
            <li><a className="menu-link" href="#">Productos</a></li>
            <li><a className="menu-link" href="#">Contacto</a></li>
            <li><CardWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar