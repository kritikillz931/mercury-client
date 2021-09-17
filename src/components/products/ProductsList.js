import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductsProvider"
import "../products/Products.css"
import { Button } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom"


export const ProductList = (props) => {
    const { product, getProducts } = useContext(ProductContext)
    const history = useHistory()

    useEffect(() => {
        getProducts()
    }, [])
    
    
    return (
        <article className="productInfo">
{
    
    
    product.map(p => {
        return (
            
            <section key={`product--${p.id}`} className="product" onClick={() => history.push(`/products/details/${p.id}`)}>
            <div className="featured">
            <div className="featuredProduct">
            <span className="featuredTitle">{p.name}</span>
            <div className="featuredProductContainer">
            <span><img src={p.image}  className="featuredProductImage"
             /></span>
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