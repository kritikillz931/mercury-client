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
                    <Link to="/Products" className="link">

                    <li className="sidebarListItem">
                        <Storefront className="sidebarIcon" />
                        Products
                    </li>
                    </Link>
                    <Link to="/Transactions" className="link">
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon" />
                        Transactions
                    </li>
                    </Link>
                </ul>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <Link to="/employees" className="link" >
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        Manage
                    </li>
                    </Link>
                </ul>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">User</h3>
                <ul className="sidebarList">
                    <Link to="/UserSettings" className="link">
                    <li className="sidebarListItem">
                        <Settings className="sidebarIcon" />
                        User Settings
                    </li>
                    </Link>
                </ul>
            </div>   
    )
}