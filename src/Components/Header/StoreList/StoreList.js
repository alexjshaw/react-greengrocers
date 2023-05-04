import { useState } from "react";

function StoreList ({storeItems, cartItems, setCartItems}) {
    return (
    <ul className="item-list store--item-list">
        {storeItems.map((item, index) => {
            return (          
                <li key={index} >
                <div className="store--item-icon">
                  <img
                  src={`/assets/icons/${item.id}.svg`}
                  alt={"beetroot"}
                  />
                </div>
                <button>Add to cart</button>
              </li>  
            )
        })}
    </ul>    
    )
}

export default StoreList