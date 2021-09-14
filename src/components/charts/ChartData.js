import { useContext, useEffect, useState } from "react"
import { MonthlyContext } from "../featuredInfo/featuredInfoProvider"


export const ChartData = (props) => {
    const { monthlyInfo, getMonthlyInformation } = useContext(MonthlyContext)
    useEffect(() => {
        getMonthlyInformation()
    }, [])
    
   
    let chartProfits = monthlyInfo.map(i => {
                return <section key={`i--${i.id}`} className="i">
                <div className="i__revenue">{i.profit}</div>
                
                </section>
            })
        
        
}