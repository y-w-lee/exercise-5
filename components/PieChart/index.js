import styles from "./PieChart.module.css"
import { Pie } from "react-chartjs-2"
//import Pie here, not Bar
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    //imported ArcElement
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register (
    CategoryScale,
    ArcElement,
    //imported ArcElement
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({ 
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({ });

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 6, 15, 20, 12, 4],
                    borderColor: [
                        'rgb(53, 162, 235)',
                        'rgb(23, 162, 235)',
                        'rgb(53, 32, 235)',
                        'rgb(53, 162, 5)',
                        'rgb(125, 2, 235)',
                        'rgb(32, 32, 24)',
                    ],
                    backgroundColor: [
                        'rgba(53, 162, 235, 0.4)',
                        'rgba(23, 162, 235, 0.4)',
                        'rgba(53, 32, 235, 0.4)',
                        'rgba(53, 162, 5, 0.4)',
                        'rgba(125, 2, 235, 0.4)',
                        'rgba(32, 32, 24, 0.4)',
                    ],
                    borderWidth: 1,
                }
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })
    })

    return (
        <>
        <div>
            <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
            {/* change to Pie here, not Bar */}
        </div>
        </>
    )
}