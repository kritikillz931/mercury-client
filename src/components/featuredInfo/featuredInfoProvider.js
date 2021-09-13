import React, { useState, createContext } from "react";

export const MonthlyContext = React.createContext()

export const FeaturedInfoProvider = (props) => {
    const [ monthlyInfo, setMonthlyInfo ] = useState([])

    const getMonthlyInformation = () => {
        return fetch("http://localhost:8000/monthlyfinances", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("m_token")}`
            }
        })
            .then(response => response.json())
            .then(setMonthlyInfo)
        }
        
        return (
            <MonthlyContext.Provider value={{ monthlyInfo, getMonthlyInformation }} >
        { props.children }
    </MonthlyContext.Provider>
)
}