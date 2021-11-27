import React from 'react'
import styles from "../../styles/HomepageChart.module.scss"
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";


const HomepageChart = ({data, dataKey, grid}) => {
    return (
        <div className={styles.chart}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                <XAxis dataKey="name" stroke="rgb(19, 38, 90)" />
                <Line type="monotone" dataKey={dataKey} stroke="rgb(19, 38, 90)" />
                <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default HomepageChart
