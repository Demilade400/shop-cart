import React from 'react'
import { useEffect,useState } from 'react'

const Shop = ({addToCart}) => {

  const [products,setProducts] = useState([])

  useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data));
  },[])


  return (
    <div className='products-grid'>
          {
              products.map((item) => (
                  <div key={item.id} className='product'>
                      <img src={item.image} />
                      <h4>{item.title}</h4>
                      <p>${item.price}</p>
                      <button onClick={() => addToCart(item)}>add to cart</button>
                  </div>
              ))
         } 
    </div>
  )
}

export default Shop