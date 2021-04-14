import React from 'react'
import { Typography , Grid, LinearProgress } from '@material-ui/core'
import CardComponent from './card/Card'
import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return <LinearProgress />
    }

    return (
        <div className={styles.container }>
            <Typography gutterBottom variant="h2" component="h2" className={styles.title_card} >Global Covid-19 Tracker</Typography>
            <Grid container spacing={3} m={4} justify="center"> 
            {/*infected card */}
                <CardComponent 
                    className={styles.infected}
                    cardTitle="Infected"
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of active cases from COVID-19 pandemic"
                />

            {/*Recovered card */}
                <CardComponent 
                    className={styles.recovered}
                    cardTitle="Recovered"
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of recoveries from COVID-19 pandemic"
                />
            
            {/*No of Deaths card */}
                <CardComponent 
                    className={styles.deaths}
                    cardTitle="Deaths"
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle="Number of deaths from COVID-19 pandemic"
                />
            </Grid>
        </div>
    )
}

export default Cards
