import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'

import { Header } from './Components/Header'

// console.log(initialStoreItems)

export default function App() {
  
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Wrtite some code here... */}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
