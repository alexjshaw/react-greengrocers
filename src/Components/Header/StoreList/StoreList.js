import { useState } from "react";

function StoreList({storeItems, cartItems, setCartItems}) {

    function UpdateCart (item) {
        if (cartItems.length === 0) {
            const newCartItem = {...item, quantity: 1}
            const updatedCart = [...cartItems, newCartItem]
            setCartItems(updatedCart)
        } else {
            const updatedQuantityItem = cartItems.find((oldItem) => {
                return oldItem.name == item.name
            })
            if (updatedQuantityItem === undefined) {
                const newCartItem = {...item, quantity: 1}
                const updatedCart = [...cartItems, newCartItem]
                setCartItems(updatedCart)
            } else {
                updatedQuantityItem.quantity++
                const updatedCart = [...cartItems]
                setCartItems(updatedCart)
            }
        }
    }

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
                <button
                onClick={() => {
                    UpdateCart(item, index)
                }} >Add to cart</button>
              </li>  
            )
        })}
    </ul>    
    )
}

export default StoreList