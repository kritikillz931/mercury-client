
import { Button } from "@material-ui/core"
import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import "../employees/Employees.css"


export const EmployeeList = (props) => {
    const { employee, getEmployees } = useContext(EmployeeContext)
    const { userId } = useParams()
    const [employeeId, setEmployeeId] = useState()
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
                                    <span className="featuredEmployeeName">{e.first_name} {e.last_name}</span>
                                    <div className="featuredEmployeeContainer">
                                        <span><img src={e.image} className="featuredEmployeeImage" /></span>
                                    </div>
                                    <div><Button onClick={event => {
                                        event.preventDefault()
                                        console.log(e.id)
                                        history.push(`/Employees/employeeDetail/${e.id}`)
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