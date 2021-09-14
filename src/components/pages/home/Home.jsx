import { useContext, useEffect } from "react"
import { userData } from "../../../dummyData"
import { Chart } from "../../charts/Chart"
import { FeaturedInfo } from "../../featuredInfo/FeaturedInfo"
import { MonthlyContext } from "../../featuredInfo/featuredInfoProvider"
import { WidgetsLarge } from "../../widgetsLarge/widgetsLarge"
import { WidgetsSmall } from "../../widgetsSmall/widgetsSmall"
import "./home.css"

export const Home = () => {


    const { monthlyInfo, getMonthlyInformation } = useContext(MonthlyContext)
    useEffect(() => {
        getMonthlyInformation()
    }, [])
    console.log(monthlyInfo)
   let chartProfits = []
     monthlyInfo.map(i => {
                chartProfits.push({name: i.month, "Monthly Sales": i.revenue})
            })
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={chartProfits} title="Yearly Overview" grid dataKey="Monthly Sales"/>
            <div className="homeWidgets">
                <WidgetsSmall/>
                <WidgetsLarge/>

            </div>
        </div>
    )
}
