import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, Report, WorkOutline, Settings } from "@material-ui/icons"
import { Link } from "react-router-dom"

export const Sidebar =() => {
    return (
            <div className="sidebar">
                <div className="sidebarWrapper"></div>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link to="/" className="link"><LineStyle className="sidebarIcon" />
                        Home
                        </Link></li>
                </ul>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/products" className="link">

                    <li className="sidebarListItem">
                        <Storefront className="sidebarIcon" />
                        Products
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon" />
                        Transactions
                    </li>
                </ul>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        Manage
                    </li>
                </ul>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">User</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Settings className="sidebarIcon" />
                        User Settings
                    </li>
                </ul>
            </div>   
    )
}