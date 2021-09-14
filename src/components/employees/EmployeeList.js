
import { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"


export const EmployeeList = (props) => {
    const { employee, getEmployees } = useContext(EmployeeContext)
    useEffect(() => {
        getEmployees()
    }, [])
console.log(employee)
    return (
        

            employee.map(e => {
                return <section key={`e--${e.id}`} className="e">
                    <div className="e__name">{e.first_name}</div>

                </section>
            })
        
    )
}