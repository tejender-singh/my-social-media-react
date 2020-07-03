import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SendIcon from '@material-ui/icons/Send';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import appConfig from '../../appConfig'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 50,
      },
  content: {
      padding: 0,
  },
      media: {
    height:'100%',
    paddingTop: '100%', // 16:9
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  header: {
    padding: 10,
    textAlign:'inherit'
  },
  title: {
    fontSize: '0.875em',
    fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    fontWeight:'bold',
},
  line:{
    display: 'inline-block',
    padding:'10',
    textAlign:'inherit'
  },    
  caption:{
    textAlign:'left',
    marginLeft:15,
    fontSize: '0.875em',
    fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    marginBottom:3,
    },
    commentsLink:{
        textAlign:'left',
        marginLeft:15,
        fontSize: '0.875em',
        fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
        marginBottom:3,
        color:'#90908E',
        textDecoration:'none',
    },
      actions:{
      padding:0,
    },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [isLiked, setLiked] = useState(false);

  const toggleLike = () =>{
      console.log('isLiked '+isLiked);
      setLiked(!isLiked);
  }
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
      <CardHeader
        className={classes.header}
        avatar={
            <div className={classes.line}>
                <Avatar alt="Remy Sharp" src={appConfig.serverURL+"/images/dp.jpg"} />
          </div>
        }
        action={
          <IconButton className={classes.title} aria-label="settings">
            <MoreHoriz />
          </IconButton>
        }
        style={{'text-align': 'justify'}}
        title={
            <div>
                <p className={classes.title}>barked</p>
            </div>
        }
        // titleTypographyProps={{'class':'MuiTypography-root makeStyles-bold-242 MuiTypography-body1'}}
        />

        <CardMedia
        className={classes.media}
        image={appConfig.serverURL+"/images/dog.jpg"}
        />
      </CardContent>
      <CardActions className={classes.actions} disableSpacing>
        <IconButton aria-label="like" onClick={toggleLike}>
        {isLiked ? <FavoriteIcon style={{ color: "#E61D0F" }} /> : <FavoriteBorderIcon style={{ color: "#000" }}/>}
        
        
        </IconButton>
        <IconButton aria-label="comment">
        <ChatBubbleOutlineIcon style={{ color: "#000" }}/>
        </IconButton>
        <IconButton aria-label="share">
          <SendIcon style={{ color: "#000" }}/>
        </IconButton>
      </CardActions>
      <Typography className={classes.caption} color="#000">
      <b>barked </b>Maybe summer isn't so bad after all 🌼💛
        </Typography>

        <Typography className={classes.commentsLink}>
        <a href="#" style={{'text-decoration':'none', 'color':'#90908E'}}>
        View all 14,890 comments
        </a>
        </Typography>

        <Typography className={classes.caption} color="#000">
        <b>edwinsamoyed </b>Thank you so much for sharing ❤️❤️🐻
        </Typography>
        <Typography className={classes.caption} color="#000">
        <b>dgirlgonzalez </b>Hi little friend!!!❤️
        </Typography>
        &nbsp;
   </Card>
  );
}