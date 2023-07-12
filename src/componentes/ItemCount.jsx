import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';

const ItemCount = ( {item} ) => {
  
    const { carrito, setCarrito } = useContext(CartContext);
    console.log(carrito)
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
       cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {
        const itemAgredado = {...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgredado.id);

        if(estaEnElCarrito){
            estaEnElCarrito.cantidad += cantidad;

        }else{
            nuevoCarrito.push(itemAgredado);
           
        }
        setCarrito(nuevoCarrito);
        
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }
  
    return (
    <div>
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>agregar al carrito</button>
    </div>
  )
}

export default ItemCount