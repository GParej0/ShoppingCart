import PropTypes from "prop-types";
import { useState, useContext } from "react";
import {CartContext} from "../Context/CartContext.jsx"

export default function ProductCard ({product}){
    const [count, setCount] = useState(1)
    const {addToCart} = useContext(CartContext)
    function restNumber(count){
        if(count <= 1){
            setCount(1)
        }
        setCount(count-1)
    }

    function sumNumber(count){
        setCount(count+1)
    }
    

    return (
        <div className="productCard">
            <div className="productData">
                <img src={product.image} alt="Jewerely"/>
                <h3>{product.title}</h3>
                <p>{product.price} €</p>
            </div>
                <div className="number">
                    <button id="minusButton" onClick={()=>restNumber(count)} >-</button>
                    <input type="number" name="number" id="number" value={count} onChange={(e)=>setCount(e.target.value)} min="1"/>
                    <button id="plusButton" onClick={()=>sumNumber(count)}>+</button>
                </div>
                <button id="addToCart" onClick={()=> addToCart(product, parseInt(count))}>Add to cart</button>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number
    }).isRequired
}