import './App.css'
import Home from "./Home"
import Cart from "./Cart"
import Shop from "./Shop"
import { Routes, Route, Link } from "react-router-dom"
import { useEffect,useState } from 'react'




function App() {

  const [cart, setCart] = useState([])
  
  const addToCart = (item) => {
    const findCart = cart.find((element) => element.id === item.id)

    if (findCart === undefined) {
      setCart([...cart, { ...item, quantity: 1 }])
    } else {
      const filterCart = cart.filter((element) => element.id !== item.id)
      setCart([...filterCart, { ...item, quantity: findCart.quantity + 1 }])

    }
  }

 
  

  const removeFromCart = (id) => {
    const updatedCart = cart.map((element) => element.id === id ? { ...element, quantity: element.quantity - 1 }
    : element).filter((element) => element.quantity > 0)
    setCart(updatedCart)
  }


  return (
    <>
      <div className='app'>
        <div className="header">
              <h2>shop cart</h2>
              <ul>
                  <li><Link to="/">home</Link></li>
                  <li><Link to="/shop">shop</Link></li>
                  <li><Link to="/cart">cart</Link></li>
              </ul>
        </div>
        
       



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart ={addToCart} />} />
          <Route path="/cart" element={<Cart cart = {cart} removeFromCart = {removeFromCart} />} />
        </Routes>
            
    
      </div>
    </>
  )
}

export default App
