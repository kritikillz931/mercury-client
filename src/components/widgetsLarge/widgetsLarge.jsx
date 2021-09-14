import { useEffect } from "react"
import { useContext } from "react"
import { TransactionContext } from "../pages/transactions/TransactionsProvider"
import { ProductContext } from "../products/ProductsProvider"
import "./widgetsLarge.css"

export const WidgetsLarge = () => {
    const { transaction, getTransactions } = useContext(TransactionContext)
    const { product, getProducts } = useContext(ProductContext)
    useEffect(() => {
        getTransactions()
        .then(getProducts)
    }, [])

    let completedTransactions = transaction.filter(t => t.quantitySold >= 1)
    
    
    


    let productSaleTotals = []
    product.forEach(item => {
        let sum = 0;
        transaction.forEach(trans => {
            console.log(trans)
            if (trans.product.id === item.id) {
                sum += trans.priceSold * trans.quantitySold
            }
        })
        productSaleTotals.push({"image": item.image, "name":item.name, "revenue": sum})
    })
    console.log(productSaleTotals)

    let sortedTransactions = productSaleTotals.sort(function(a,b){
        return b.quantitySold - a.quantitySold
    })
    let topThree = sortedTransactions.slice(0,3)
    console.log(topThree)


    return (
        <div className="widgetsLarge">
            <h3 className="widgetsLargeTitle">
                Top 3 Products</h3>
                <table className="widgetsLargeTable">
                    <tr className="widgetLargeTr">
                        <th className="widgetsLargeTh">Product</th>
                        <th className="widgetsLargeTh">Revenue</th>
                    </tr>

{   topThree.map(t => {






                 return   <tr className="widgetLargeTr">
                        <td className="widgetsLargeUser">
                            
                            <img src={t.image}
                            className="widgetsLargeImg" />
                            <span className="widgetLargeName">{t.name}</span>
                        </td> 
                            <td className="widgetsLargeAmount">{t.revenue}</td>
                    </tr>                         
})}
                </table>
        </div>
    )
}
