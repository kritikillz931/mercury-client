import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import { useContext, useEffect, useState } from "react"
import { MonthlyContext } from "./featuredInfoProvider.js"




export const FeaturedInfo = (props) => {

const { monthlyInfo, getMonthlyInformation } = useContext(MonthlyContext)
    const [thisMonth, setThisMonth] = useState([])
    useEffect(() => {
        getMonthlyInformation()
    }, [])
    useEffect(() => {
        setThisMonth(monthlyInfo.filter(i => i.month === "September"))
    }, [monthlyInfo])
    
    return (

        <article className="monthlyInfo">
            {/* {

                monthlyInfo.map(i => {
                    return <section key={`i--${i.id}`} className="i">
                        <div className="i__revenue">{i.revenue}</div>

                    </section>
                })
            } */}



            <div className="featured">
            <div className="featuredItem">
            <span className="featuredTitle">Profit</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(thisMonth[0]?.profit)}</span>

            </div>
            <div className="span featuredSubTitle">this months profit margins</div>
            </div>
            <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(thisMonth[0]?.revenue)}</span>

            </div>
            <div className="span featuredSubTitle">this months sales margins</div>
            </div>
            <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(thisMonth[0]?.cost)}</span>

            </div>
            <div className="span featuredSub">this months business costs</div>
            </div>
            </div>
        </article>
    )
}