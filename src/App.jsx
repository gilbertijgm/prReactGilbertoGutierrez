import "./main.css"
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import { useState } from "react";
import { CartContext } from "./context/CartContext";




function App() {

  const [carrito, setCarrito ] = useState([]);

  

  return (
    <div>
      
      <CartContext.Provider value={ {carrito, setCarrito } }>
      
      <Navbar/>
      <ItemListContainer/>
      
      </CartContext.Provider>

    
    </div>  
  )
}

export default App;