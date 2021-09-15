
import { Button } from "@material-ui/core"
import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import "../employees/Employees.css"


export const EmployeeList = (props) => {
    const { employee, getEmployees } = useContext(EmployeeContext)
    useEffect(() => {
        getEmployees()
    }, [])
    let history = useHistory()

    useEffect(() => {
        getEmployees()
    }, [])
    return (
        <article className="employeeInfo">
            {



                employee.map(e => {
                    return (
                        <section key={`employee--${e.id}`} className="employee">
                        <div className="featured">
                        <div className="featuredEmployee">
                        <span className="featuredEmployeeName">{e.user.first_name} {e.user.last_name}</span>
                        <div className="featuredEmployeeContainer">
                        <span><img src={e.image} className="featuredEmployeeImage"/></span>
                        </div>
                        <div><Button onClick={e => {
                            e.preventDefault()
                            history.push("Employees/Details")
                        }}>Details</Button></div>
                        </div>
                        </div>
                    </section>

                    )
                })

            }
        </article>
    )
}