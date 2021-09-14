import { useEffect } from "react"
import { useContext } from "react"
import { TransactionContext } from "../pages/transactions/TransactionsProvider"
import { ProductContext } from "../products/ProductsProvider"
import "./widgetsLarge.css"

export const WidgetsLarge = () => {
    const { transaction, getTransactions } = useContext(TransactionContext)
    useEffect(() => {
        getTransactions()
    }, [])

    let completedTransactions = transaction.filter(t => t.quantitySold >= 1)
    
    let sortedTransactions = completedTransactions.sort(function(a,b){
        return b.quantitySold - a.quantitySold
    })
    let topThree = sortedTransactions.slice(0,3)


    return (
        <div className="widgetsLarge">
            <h3 className="widgetsLargeTitle">
                Top 3 Products</h3>
                <table className="widgetsLargeTable">
                    <tr className="widgetLargeTr">
                        <th className="widgetsLargeTh">Product</th>
                        <th className="widgetsLargeTh">Amount Sold</th>
                    </tr>

{   topThree.map(t => {






                 return   <tr className="widgetLargeTr">
                        <td className="widgetsLargeUser">
                            
                            <img src={t.product.image}
                            className="widgetsLargeImg" />
                            <span className="widgetLargeName">{t.product.name}</span>
                        </td> 
                            <td className="widgetsLargeAmount">{t.quantitySold}</td>
                    </tr>                         
})}
                </table>
        </div>
    )
}
