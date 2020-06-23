import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Price from './Price';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: 300,
    maxWidth: 500,
    spacing: 8
  },
  media: {
    height: 200,
    marginBottom: 10
  }
});

export default function Kit(props) {
  const classes = useStyles();
  const kit = props.kit;

  return (
    <Card elevation={3} key={props.kit.id} className={classes.root}>
        <CardActionArea>

            <CardMedia
            className={classes.media}
            image={kit.photos[0].service_url}
            title="Contemplative Reptile"
            />
            { kit.restaurant.tags.map ((tag) => 
                <Chip key={tag.id} label={tag.name} variant="outlined" margin="1rem" />
            )}
            <CardContent>
            <Typography gutterBottom component="h2">
                {kit.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                {kit.restaurant.name}
            </Typography>
            <Price price={kit.price} />

        </CardContent>
      </CardActionArea>
    </Card>

  );
};
