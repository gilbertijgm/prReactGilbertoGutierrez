import React from 'react'
import ItemCount from './ItemCount'

const Item = ( {productos} ) => {
    //href={`/item/${producto.id}`}
    return (
    <div className="producto">
        <img src={productos.imagen} alt={productos.id}/>
        
        <div>
            <h3>{productos.titulo}</h3>
            <p>Precio: ${productos.precio}</p>
            <p>Categoria: {productos.categoria}</p>
            <ItemCount item={productos}/>
        </div>
    </div>
  )
}

export default Item