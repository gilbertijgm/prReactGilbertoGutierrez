import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const CardWidget = () => {
  
  const { cantidadEnCarrito } = useContext(CartContext)

  return (
    <div>
        <li className="menu-link">
            Carrito
            <span className="numerito">{0}</span>
        </li>
    </div>
  )
}

export default CardWidget