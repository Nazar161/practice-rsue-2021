import React from 'react';
// import './StudentsListItem.css';
import {Link} from 'react-router-dom'

// const StudentsListItem = ({listItem}) => {
//     const {name, photo, activity, rating} = listItem;
//     return (
//         <li className="list-item">
//             <Link to={`/${listItem.id}`} className="list-link"> 
//                 <div className="list-name">{name}</div>
//                 <img className="list-img" src={photo} alt="Биг Босс"></img>
//             </Link>
//             <div className="list-activity">Activity: <span>{activity}</span></div>
//             <div className="list-rating">Rating: <span>{rating}</span></div>
//         </li>
//     );
// };

// export default StudentsListItem;


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 270,
      margin: 10,
    },
    media: {
      height: 240,
      width: 'calc(100%)',
      objectFit: 'cover',
    },
  });
  
  export default function StudentsListItem({listItem}) {
    const {name, photo, info} = listItem;
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
          {/* <Link to={`/${listItem.id}`} style={{textDecoration: 'none', color: 'black'}}> */}
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={photo}
                    title="Contemplative Reptile"
                />
                <CardContent style={{padding: '5px 20px'}}>
                    <Typography gutterBottom variant="h6" component="h5" style={{margin: 0}}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {info}
                    </Typography>
                </CardContent>
            </CardActionArea>
          {/* </Link> */}
        <CardActions>
            <Link to={`/${listItem.id}`} style={{textDecoration: 'none'}}>
                <Button size="small" color="primary">
                     Узнать больше
                </Button>
            </Link>
        </CardActions>
      </Card>
    );
  }