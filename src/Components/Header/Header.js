import { useState } from "react";
import initialStoreItems from "../../store-items"
import { StoreList } from "./StoreList";



function Header (cartItems, setCartItems) {

    const [storeItems, setStoreItems] = useState(initialStoreItems)

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <StoreList storeItems={storeItems} cartItems={cartItems} setCartItems={setCartItems} />
          </header>
    )
    }

export default Header