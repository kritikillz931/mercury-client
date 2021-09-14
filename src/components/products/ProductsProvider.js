import React, { useState, createContext } from "react";

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [ product, setProduct ] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8000/products", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("m_token")}`
            }
        })
            .then(response => response.json())
            .then(setProduct)
        }
        
        return (
            <ProductContext.Provider value={{ product, getProducts }} >
        { props.children }
    </ProductContext.Provider>
)
}