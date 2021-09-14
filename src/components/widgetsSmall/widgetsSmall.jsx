import { Visibility } from "@material-ui/icons"
import "./widgetsSmall.css"
import { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "../employees/EmployeeProvider"


export const WidgetsSmall = (props) => {
    const { employee, getEmployees } = useContext(EmployeeContext)
    useEffect(() => {
        getEmployees()
    }, [])
  

    let salesReps = employee.filter(e => e.position === "Sales Rep")
    let sortedReps = salesReps.sort(function(a,b){
        return b.monthlySales - a.monthlySales
    })
    let topThree = sortedReps.slice(0,3)

    
    
    return (
        <div className="widgetsSmall">
            <span className="widgetsSmallTitle">Top 3 Sales Reps</span>
            <ul className="widgetsSmallList">
                
{            topThree.map(e => {

                return <li className="widgetsSmallListItem">
                <img src={e.image} alt="" className="widgetsSmallImg" />
                <div className="widgetsSmallUser">
                    <span className="widgetsSmallUsername">{e.user.first_name} {e.user.last_name}</span>
                    <span className="widgetsSmallUserTitle">Monthly Sales - {e.monthlySales}</span>
                </div>
                <button className="widgetsSmallButton">
                    <Visibility className="widgetsSmallIcon" />
                    Display
                </button>
            </li>
            })}


            </ul>
        </div>
    )


}