import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import Price from './Price';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: 300,
    maxWidth: 500,
    spacing: 8,
  },
  media: {
    height: 200,
    marginBottom: 10,
  },
});

export default function Kit({ kit }) {
  const classes = useStyles();
  const { id, photos, restaurant, name, price } = kit;

  return (
    <Card elevation={3} key={id} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photos[0].service_url}
          title="Contemplative Reptile"
        />
        {restaurant.tags.map((tag) => (
          <Chip key={tag.id} label={tag.name} variant="outlined" margin="1rem" />
        ))}
        <CardContent>
          <Typography gutterBottom component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            {restaurant.name}
          </Typography>
          <Price price={price} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Kit.propTypes = {
  kit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(),
    price: PropTypes.string.isRequired,
    restaurant: PropTypes.shape({
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf().isRequired,
    }).isRequired,
  }).isRequired,
};
