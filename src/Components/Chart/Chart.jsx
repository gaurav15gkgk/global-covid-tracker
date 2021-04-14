import React, { useEffect, useState} from 'react'
import { Line, Bar } from 'react-chartjs-2'

import { fetchDailyData } from '../../api'

import styles from './Chart.module.css'
const Chart = ({data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData , setDailyData ] = useState({})

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await fetchDailyData()
            setDailyData(initialDailyData)
        }
        fetchMyAPI()
    },[])

    const barChart = (
        confirmed ? (
            <Bar
            data={{
                labels:['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor:['#FFD166', '#06D6A0', '#EF476F'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    },
                    
                ],
            }}
            options={{
                legend: {display: false},
                title: { display: true, text:`Current state is ${country}`}
            }}
           /> 
        ):null
    )

    const lineChart = (
        dailyData[0] ?(
            <Line 
                data ={{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#FFC100',
                        fill :true
                    }, {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor:'red',
                        backgroundColor:'#E40066',
                        fill: true,

                    }]
                }}
            />
        ):null
    )

    return (
        <div className={styles.container}>
        {country ? barChart : lineChart}
  </div>
    )
}

export default Chart
