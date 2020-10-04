import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props); 
    return(
       <div className = {styles.container}>
           <Grid container spacing={3} justify="center">
                <Grid item component={Card}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">data filler</Typography>
                        <Typography color="textSecondary">date filler</Typography>
                        <Typography variant="body2"># of active cases</Typography>
                    </CardContent>
                </Grid>
           </Grid>
       </div>
    )
}

export default Cards;