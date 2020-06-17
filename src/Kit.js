import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: 300,
    maxWidth: 500
  },
  media: {
    height: 200
  }
});

export default function BookCard(props) {
  const classes = useStyles();
  const kit = props.kit;

  return (
    <Card key={props.kit.id} className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={kit.photos[0].service_url}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom component="h2">
                {kit.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {kit.restaurant.name}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );
};
