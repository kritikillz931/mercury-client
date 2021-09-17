import React, { useState, createContext } from "react";

export const EmployeeContext = React.createContext()

export const EmployeeProvider = (props) => {
    const [ employee, setEmployee ] = useState([])


    const getEmployees = () => {
        return fetch("http://localhost:8000/employees", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("m_token")}`
            }
        })
            .then(response => response.json())
            .then(setEmployee)
        }

    const getEmployeesById = employeeId => {
        return fetch(`http://localhost:8000/employees/employeeDetail/${employeeId}`)
        .then(res => res.json())
    }

    const createEmployee = (employee) => {
        return fetch("http://localhost:8000/employees", {
            method: "POST",
            headers: {
                
                    "Authorization": `Token ${localStorage.getItem("m_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(response => response.json())
    }
    
    
        return (
            <EmployeeContext.Provider
            value={{
                employee,
                getEmployees,
                getEmployeesById,
                createEmployee }} >
        { props.children }
    </EmployeeContext.Provider>
)
    
    
    }