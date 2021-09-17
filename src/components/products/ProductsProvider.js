import React, { useState, createContext } from "react";

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [product, setProduct] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8000/products", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("m_token")}`
            }
        })
            .then(response => response.json())
            .then(setProduct)

    }

    const createProduct = (product) => {
        return fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {
                
                    "Authorization": `Token ${localStorage.getItem("m_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
    }


    const getProductById = productId => {
        return fetch(`http://localhost:8000/products/${productId}`)
            .then(res => res.json())
    }



    const deleteProduct = productId => {
        return fetch(`http://localhost:8000/products/${productId}`, {
            method: "DELETE"
        })
            .then(getProducts)
    }


    const updateProduct = productObj => {
        return fetch(`http://localhost:8000/products/${productObj.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("m_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
            .then(getProducts)
    }





    return (
        <ProductContext.Provider
            value={{
                product,
                getProducts,
                createProduct,
                deleteProduct,
                updateProduct,
                getProductById
            }} >
            {props.children}
        </ProductContext.Provider>
    )
}