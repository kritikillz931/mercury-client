import React, { useState, createContext } from "react";

export const TransactionContext = React.createContext()

export const TransactionProvider = (props) => {
    const [ transaction, setTransaction ] = useState([])

    const getTransactions = () => {
        return fetch("http://localhost:8000/transactions", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("m_token")}`
            }
        })
            .then(response => response.json())
            .then(setTransaction)
        }
        
        return (
            <TransactionContext.Provider value={{ transaction, getTransactions }} >
        { props.children }
    </TransactionContext.Provider>
)
}