import { useEffect } from "react"
import { useContext } from "react"
import { ProductContext } from "../products/ProductsProvider"
import "./widgetsLarge.css"

export const WidgetsLarge = () => {
    const { product, getProducts } = useContext(ProductContext)
    useEffect(() => {
        getProducts()
    }, [])

    let soldProducts = product.filter(p => p.quantitySold >= 1)
    let sortedProducts = soldProducts.sort(function(a,b){
        return b.quantitySold - a.quantitySold
    })
    let topThree = sortedProducts.slice(0,3)
    console.log(topThree)

    return (
        <div className="widgetsLarge">
            <h3 className="widgetsLargeTitle">
                Top 3 Products</h3>
                <table className="widgetsLargeTable">
                    <tr className="widgetLargeTr">
                        <th className="widgetsLargeTh">Product</th>
                        <th className="widgetsLargeTh">Date</th>
                        <th className="widgetsLargeTh">Amount Sold</th>
                    </tr>

{   topThree.map(p => {






                 return   <tr className="widgetLargeTr">
                        <td className="widgetsLargeUser">
                            
                            <img src={p.image}
                            className="widgetsLargeImg" />
                            <span className="widgetLargeName">{p.product.name}</span>
                        </td> 
                            <td className="widgetsLargeDate">2 Jun 2021</td>
                            <td className="widgetsLargeAmount">$122.00</td>
                    </tr>                         
})}
                </table>
        </div>
    )
}
