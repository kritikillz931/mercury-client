import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductsProvider"
import "../products/Products.css"


export const ProductList = (props) => {
    const { product, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <article className="productInfo">
{

        
        product.map(p => {
            return (

        <section key={`product--${p.id}`} className="product">
            <div className="featured">
            <div className="featuredProduct">
            <span className="featuredTitle">{p.name}</span>
            <div className="featuredProductContainer">
            <span><img src={p.image} className="featuredProductImage"/></span>
            </div>
            </div>
            </div>
        </section>
                )
            
        }
        )
    }
    </article>
    )
}