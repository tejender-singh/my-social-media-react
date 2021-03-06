import React from 'react';
import Card from '../Card/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomeRightPanel from './HomeRightPanel'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  alignRight: {
    textAlign: '-webkit-right',
  },
  cards: {
    textAlign: '-webkit-right',
    width: '75%',
  },
}));

export default function HomePage() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid style={{'margin-top':'60px'}} container spacing={3}>
          <Grid className={classes.alignRight} item xs={7}>
            <div className={classes.cards}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
          </Grid>
          <Grid item xs={5}>
            <HomeRightPanel  className={classes.paper}/>
          </Grid>
        </Grid>
        <div>
        </div>
      </div>
    );
  }

