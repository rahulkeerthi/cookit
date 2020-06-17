import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
// import Price from './Price';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: 350,
    maxWidth: 500,
    spacing: 8
  },
  media: {
    height: 200,
    marginBottom: 10
  }
});

export default function Restaurant(props) {
  const classes = useStyles();
  const restaurant = props.restaurant;

  return (
    <Card elevation={3} key={props.restaurant.id} className={classes.root}>
        <CardActionArea>

            <CardMedia
            className={classes.media}
            image={restaurant.photos[0].service_url}
            title="Contemplative Reptile"
            />
            { restaurant.tags.map ((tag) => 
                <Chip key={tag.id} label={tag.name} variant="outlined" m={1} />
            )}
            <CardContent>
            <Typography gutterBottom component="h2">
                {restaurant.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                {restaurant.city} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                {restaurant.kits.length > 1 ? restaurant.kits.length + ' kits' : restaurant.kits.length + ' kit'} available
            </Typography>
            {/* <Price price={restaurant.price}/> */}

        </CardContent>
      </CardActionArea>
    </Card>

  );
};
