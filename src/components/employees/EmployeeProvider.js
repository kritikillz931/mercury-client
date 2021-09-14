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
    
    
        return (
            <EmployeeContext.Provider value={{ employee, getEmployees }} >
        { props.children }
    </EmployeeContext.Provider>
)
    
    
    }