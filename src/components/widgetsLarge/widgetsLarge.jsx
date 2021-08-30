import "./widgetsLarge.css"

export const WidgetsLarge = () => {
    
    const Button = ({type}) => {
        return<button className={"widgetsLargeButton " + type}>{type}</button>
    }
    return (
        <div className="widgetsLarge">
            <h3 className="widgetsLargeTitle">
                Latest Transactions</h3>
                <table className="widgetsLargeTable">
                    <tr className="widgetLargeTr">
                        <th className="widgetsLargeTh">Customer</th>
                        <th className="widgetsLargeTh">Date</th>
                        <th className="widgetsLargeTh">Amount</th>
                        <th className="widgetsLargeTh">Status</th>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetsLargeUser">
                            <img src="https://iveystudio.com/wp-content/uploads/2017/06/08-8019-pp_gallery/Christina-Pham-1%28pp_w1200_h1500%29.jpg" alt="" className="widgetsLargeImg" />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                            
                            <td className="widgetsLargeDate">2 Jun 2021</td>
                            <td className="widgetsLargeAmount">$122.00</td>
                            <td className="widgetsLargeStatus"><Button type="Approved"/></td>
                    </tr>

                    <tr className="widgetLargeTr">
                        <td className="widgetsLargeUser">
                            <img src="https://iveystudio.com/wp-content/uploads/2017/06/08-8019-pp_gallery/Christina-Pham-1%28pp_w1200_h1500%29.jpg" alt="" className="widgetsLargeImg" />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                            
                            <td className="widgetsLargeDate">2 Jun 2021</td>
                            <td className="widgetsLargeAmount">$122.00</td>
                            <td className="widgetsLargeStatus"><Button type="Declined"/></td>
                    </tr>

                    <tr className="widgetLargeTr">
                        <td className="widgetsLargeUser">
                            <img src="https://iveystudio.com/wp-content/uploads/2017/06/08-8019-pp_gallery/Christina-Pham-1%28pp_w1200_h1500%29.jpg" alt="" className="widgetsLargeImg" />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                            
                            <td className="widgetsLargeDate">2 Jun 2021</td>
                            <td className="widgetsLargeAmount">$122.00</td>
                            <td className="widgetsLargeStatus"><Button type="Pending"/></td>
                    </tr>

                    <tr className="widgetLargeTr">
                        <td className="widgetsLargeUser">
                            <img src="https://iveystudio.com/wp-content/uploads/2017/06/08-8019-pp_gallery/Christina-Pham-1%28pp_w1200_h1500%29.jpg" alt="" className="widgetsLargeImg" />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                            
                            <td className="widgetsLargeDate">2 Jun 2021</td>
                            <td className="widgetsLargeAmount">$122.00</td>
                            <td className="widgetsLargeStatus"><Button type="Approved"/></td>
                    </tr>
                </table>
        </div>
    )
}
