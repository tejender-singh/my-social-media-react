import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import appConfig from '../../appConfig'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  p1:{
    'margin-block-start': '0.1em',
    'margin-block-end': '0.1em',
    fontSize: '0.9em',
  },
  p2:{
    'margin-block-start': '0.1em',
    'margin-block-end': '0.1em',
    fontSize: '0.75em',
    color:'#90908E',
  },
  p3:{
    alignSelf: 'center',
    'margin-block-start': '0.1em',
    'margin-block-end': '0.1em',
    fontSize: '0.75em',
    color:'#0095f6',
  },

  p4:{
    alignSelf: 'center',
    'margin-block-start': '0.1em',
    'margin-block-end': '0.1em',
    fontSize: '0.92em',
    color:'#90908E',
  },

  p5:{
    alignSelf: 'center',
    'margin-block-start': '0.1em',
    'margin-block-end': '0.1em',
    fontSize: '0.75em',
    color:'black',
  },

  avatar : {
    width: theme.spacing(7),
    height: theme.spacing(7),
    // zIndex: 
    border: '0.1px groove #90908E'
  },
  avatar2 : {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  username:{
    alignSelf: 'center',
    marginLeft: '-15px',
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div style={{'position':'fixed', 'width':'25%'}}>
        <Grid style={{'margin-top':'60px'}} container spacing={1}>
        <Grid className={classes.alignRight} item xs={3}>
        <Avatar className={classes.avatar} alt="Remy Sharp" src={appConfig.serverURL+"/images/dp.jpg"} />

        </Grid>
            <Grid className={classes.username} item xs={9}>
                <div>
                    <p className={classes.p1} ><b>barked</b></p>
                </div>
                <div>
                    <p className={classes.p2} >Barked By 9GAG</p>
                </div>
            </Grid>

        </Grid>
        <Grid style={{'margin-top':'20px'}} container spacing={1}>
            <Grid className={classes.alignRight} item xs={9}>
                <p className={classes.p4} ><b>Suggestions for you</b></p>
            </Grid>
            <Grid className={classes.alignRight} item xs={3}>
                <p className={classes.p5} ><b>See all</b></p>
            </Grid>
        </Grid>

        <Grid style={{'margin-top':'7px'}} container spacing={1}>
            <Grid className={classes.alignRight} item xs={2}>
                <Avatar className={classes.avatar2} alt="Remy Sharp" src="/images/dp.jpg" />
            </Grid>
            <Grid className={classes.alignRight} item xs={7}>
                <p className={classes.p1} ><b>barked</b></p>
                <p className={classes.p2} >Followed by tejender +9 more</p>
            </Grid>
            <Grid className={classes.p3} item xs={3}>
                <p><b>Follow</b></p>            
            </Grid>
        </Grid>

        <Grid style={{'margin-top':'7px'}} container spacing={1}>
            <Grid className={classes.alignRight} item xs={2}>
                <Avatar className={classes.avatar2} alt="Remy Sharp" src={appConfig.serverURL+"/images/dp.jpg"} />
            </Grid>
            <Grid className={classes.alignRight} item xs={7}>
                <p className={classes.p1} ><b>barked</b></p>
                <p className={classes.p2} >Followed by tejender +9 more</p>
            </Grid>
            <Grid className={classes.p3} item xs={3}>
                <p><b>Follow</b></p>            
            </Grid>
        </Grid>

        <Grid style={{'margin-top':'7px'}} container spacing={1}>
            <Grid className={classes.alignRight} item xs={2}>
                <Avatar className={classes.avatar2} alt="Remy Sharp" src={appConfig.serverURL+"/images/dp.jpg"} />
            </Grid>
            <Grid className={classes.alignRight} item xs={7}>
                <p className={classes.p1} ><b>barked</b></p>
                <p className={classes.p2} >Followed by tejender +9 more</p>
            </Grid>
            <Grid className={classes.p3} item xs={3}>
                <p><b>Follow</b></p>            
            </Grid>
        </Grid>

        <Grid style={{'margin-top':'7px'}} container spacing={1}>
            <Grid className={classes.alignRight} item xs={2}>
                <Avatar className={classes.avatar2} alt="Remy Sharp" src={appConfig.serverURL+"/images/dp.jpg"} />
            </Grid>
            <Grid className={classes.alignRight} item xs={7}>
                <p className={classes.p1} ><b>barked</b></p>
                <p className={classes.p2} >Followed by tejender +9 more</p>
            </Grid>
            <Grid className={classes.p3} item xs={3}>
                <p><b>Follow</b></p>            
            </Grid>
        </Grid>

        <Grid style={{'margin-top':'7px'}} container spacing={1}>
            <Grid className={classes.alignRight} item xs={2}>
                <Avatar className={classes.avatar2} alt="Remy Sharp" src={appConfig.serverURL+"/images/dp.jpg"} />
            </Grid>
            <Grid className={classes.alignRight} item xs={7}>
                <p className={classes.p1} ><b>barked</b></p>
                <p className={classes.p2} >Followed by tejender +9 more</p>
            </Grid>
            <Grid className={classes.p3} item xs={3}>
                <p><b>Follow</b></p>            
            </Grid>
        </Grid>

      </div>
  );
}
