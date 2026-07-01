import { useState } from "react";
import { CartContext } from "../Context/CartContext";

export default function CartProvider({children}){
    const [cart, setCart] = useState([]);

    function addToCart(product, quantity){
        
        if(cart.some((item)=>item.product.id === product.id)){
            setCart(
                cart.map((item)=>{
                    if(item.product.id === product.id){
                        return {product: item.product, quantity: item.quantity + quantity}
                    } else { return item}
                })
            )
        } else {
        setCart([...cart, { product, quantity }])
        }
    }
    

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}