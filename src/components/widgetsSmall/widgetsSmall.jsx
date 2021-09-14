import { Visibility } from "@material-ui/icons"
import "./widgetsSmall.css"
import { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "../employees/EmployeeProvider"


export const WidgetsSmall = (props) => {
    const { employee, getEmployees } = useContext(EmployeeContext)
    useEffect(() => {
        getEmployees()
    }, [])
console.log(employee)

        

            employee.map(e => {
                return <section key={`e--${e.id}`} className="e">
                    <div className="e__name">{e.first_name}</div>

                </section>
            })
        
    
    return (
        <div className="widgetsSmall">
            <span className="widgetsSmallTitle">New Members</span>
            <ul className="widgetsSmallList">
                <li className="widgetsSmallListItem">
                    <img src="https://iveystudio.com/wp-content/uploads/2017/06/08-8019-pp_gallery/Christina-Pham-1%28pp_w1200_h1500%29.jpg" alt="" className="widgetsSmallImg" />
                    <div className="widgetsSmallUser">
                        <span className="widgetsSmallUsername">Anna Keller</span>
                        <span className="widgetsSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsSmallButton">
                        <Visibility className="widgetsSmallIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetsSmallListItem">
                    <img src="https://iveystudio.com/wp-content/uploads/2017/06/08-8019-pp_gallery/Christina-Pham-1%28pp_w1200_h1500%29.jpg" alt="" className="widgetsSmallImg" />
                    <div className="widgetsSmallUser">
                        <span className="widgetsSmallUsername">Anna Keller</span>
                        <span className="widgetsSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsSmallButton">
                        <Visibility className="widgetsSmallIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetsSmallListItem">
                    <img src="https://iveystudio.com/wp-content/uploads/2017/06/08-8019-pp_gallery/Christina-Pham-1%28pp_w1200_h1500%29.jpg" alt="" className="widgetsSmallImg" />
                    <div className="widgetsSmallUser">
                        <span className="widgetsSmallUsername">Anna Keller</span>
                        <span className="widgetsSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsSmallButton">
                        <Visibility className="widgetsSmallIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetsSmallListItem">
                    <img src="https://iveystudio.com/wp-content/uploads/2017/06/08-8019-pp_gallery/Christina-Pham-1%28pp_w1200_h1500%29.jpg" alt="" className="widgetsSmallImg" />
                    <div className="widgetsSmallUser">
                        <span className="widgetsSmallUsername">Anna Keller</span>
                        <span className="widgetsSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsSmallButton">
                        <Visibility className="widgetsSmallIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetsSmallListItem">
                    <img src="https://iveystudio.com/wp-content/uploads/2017/06/08-8019-pp_gallery/Christina-Pham-1%28pp_w1200_h1500%29.jpg" alt="" className="widgetsSmallImg" />
                    <div className="widgetsSmallUser">
                        <span className="widgetsSmallUsername">Anna Keller</span>
                        <span className="widgetsSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetsSmallButton">
                        <Visibility className="widgetsSmallIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
    
    
}