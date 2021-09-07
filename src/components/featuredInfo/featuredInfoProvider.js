import React, { useState } from "react";

export const MonthlyContext = React.createContext()

export const FeaturedInfoProvider = (props) => {
    const [ info, setInfo ] = useState([])

    const getInformation = () => {
        return fetch("http://localhost:8000/Monthly", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("m_token")}`
            }
        })
            .then(response => response.json())
            .then(setInfo)
        }
        
        return (
            <MonthlyContext.Provider value={{ info, getInformation }} >
        { props.children }
    </MonthlyContext.Provider>
)
}