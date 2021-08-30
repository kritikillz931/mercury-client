import { userData } from "../../../dummyData"
import { Chart } from "../../charts/Chart"
import { FeaturedInfo } from "../../featuredInfo/FeaturedInfo"
import { WidgetsLarge } from "../../widgetsLarge/widgetsLarge"
import { WidgetsSmall } from "../../widgetsSmall/widgetsSmall"
import "./home.css"

export const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetsSmall/>
                <WidgetsLarge/>

            </div>
        </div>
    )
}
