import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import { useContext, useEffect } from "react"
import { MonthlyContext } from "./featuredInfoProvider"
export const FeaturedInfo = () => {
const { info, getInfo } = useContext(MonthlyContext)
    
    useEffect(() => {
        getInfo()
    }, [])
    
    
    
    return (

        <article className="monthlyInfo">
            {

                info.map(i => {
                    return <section key={`i--${i.id}`} className="i">
                        <div className="i_Revenue">{i.revenue}</div>

                    </section>
                })


            }

        {/* <div className="featured">
            <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className="featuredIcon negative"/>
            </span>
            </div>
            <div className="span featuredSubTitle">Compared to last month</div>
            </div>
            <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">
                -1.4 <ArrowDownward className="featuredIcon negative"/>
            </span>
            </div>
            <div className="span featuredSubTitle">Compared to last month</div>
            </div>
            <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
                +2.4 <ArrowUpward className="featuredIcon"/>
            </span>
            </div>
            <div className="span featuredSub">Compared to last month</div>
            </div>
            </div> */}
        </article>
    )
}