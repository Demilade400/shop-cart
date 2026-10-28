import React from 'react'

const Cart = ({cart,removeFromCart}) => {
  return (
    <div className='cart'>
      <h2>your cart</h2>
      {
        cart.map((item) => (
          <div key={item.id} className='cart-item'>
            <img src={item.image} alt={item.title} width={100} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <p>quantity: {item.quantity}</p>
            <button className='cart-btn' onClick={() => removeFromCart(item.id)}>x</button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart