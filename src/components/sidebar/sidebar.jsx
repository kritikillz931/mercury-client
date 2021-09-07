import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, Report, WorkOutline } from "@material-ui/icons"
import { Link } from "react-router-dom"

export const Sidebar =() => {
    return (
            <div className="sidebar">
                <div className="sidebarWrapper"></div>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Link to="/" className="link"><LineStyle className="sidebarIcon" />
                        Home
                        </Link></li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon" />
                        Sales
                    </li>
                </ul>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                    <li className="sidebarListItem active">
                        <PermIdentity className="sidebarIcon" />
                        Users
                    </li>
                    </Link>
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
                    <li className="sidebarListItem">
                        <BarChart className="sidebarIcon" />
                        Reports
                    </li>
                </ul>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MailOutline className="sidebarIcon" />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon" />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon" />
                        Messages
                    </li>
                </ul>
                <div className="sidebarMenu"></div>
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <WorkOutline className="sidebarIcon" />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon" />
                        Reports
                    </li>
                </ul>
            </div>   
    )
}