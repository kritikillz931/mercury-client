import React, { useContext, useEffect } from "react"
import { TransactionsContext } from "./TransactionsProvider"


import { Link, useHistory } from "react-router-dom"


export const TransactionsList = (props) => {
    const { transaction, getTransactions } = useContext(TransactionContext)
    const history = useHistory()

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <article className="transactionInfo">
{

        
        transaction.map(t => {
            return (

        <section key={`transaction--${t.id}`} className="transaction">
            
        </section>
                )
            
        }
        )
    }
    </article>
    )
}