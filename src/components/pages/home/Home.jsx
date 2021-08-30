import { userData } from "../../../dummyData"
import { Chart } from "../../charts/Chart"
import { FeaturedInfo } from "../../featuredInfo/FeaturedInfo"
import "./home.css"

export const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    )
}
