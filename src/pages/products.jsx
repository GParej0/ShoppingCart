import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx"

export default function Products(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/jewelery").then(response=> response.json()).then(data=> setProducts(data))
    }, [])
    
    return (
        <div className="products-container">
            <h2>Jewelery collection</h2>
            <p>From FakeStore API · category: jewelery</p>
            <div className="products">
                {
                    products.map((product)=>(
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    )
}
